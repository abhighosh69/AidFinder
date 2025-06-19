import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

// Load access token from env
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_MAP_ACCESS_TOKEN;

const Hospitals = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [loading, setLoading] = useState(true);
  const [geoJsonError, setGeoJsonError] = useState(null);

  useEffect(() => {
    if (map.current) return; // Prevent re-initialization

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/abhi-69/cm5h55254000l01s739enh16h",
      center: [88.3639, 22.5726],
      zoom: 8,
    });

    // Add controls
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: "Search for locations",
      zoom: 12,
    });
    map.current.addControl(geocoder);
    map.current.addControl(new mapboxgl.NavigationControl());

    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserHeading: true,
    });
    map.current.addControl(geolocateControl);

    // When map style is fully loaded
    map.current.on("load", () => {
      geolocateControl.trigger();

      // Load GeoJSON safely
      fetch("/map.geojson")
        .then((response) => {
          if (!response.ok) throw new Error("GeoJSON file not found.");
          return response.json();
        })
        .then((data) => {
          if (!data || !data.features || data.features.length === 0) {
            throw new Error("GeoJSON data is empty.");
          }

          map.current.addSource("hospitals", {
            type: "geojson",
            data: data,
          });

          map.current.addLayer({
            id: "hospital-points",
            type: "circle",
            source: "hospitals",
            paint: {
              "circle-radius": 8,
              "circle-color": "#FF5722",
            },
          });

          // Handle popup
          map.current.on("click", "hospital-points", (e) => {
            const coordinates = e.features[0].geometry.coordinates.slice();
            const name = e.features[0].properties.name || "Unnamed Hospital";

            const popup = new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(<strong>${name}</strong>)
              .addTo(map.current);
          });

          map.current.on("mouseenter", "hospital-points", () => {
            map.current.getCanvas().style.cursor = "pointer";
          });

          map.current.on("mouseleave", "hospital-points", () => {
            map.current.getCanvas().style.cursor = "";
          });

          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading GeoJSON data:", error);
          setGeoJsonError(error.message);
          setLoading(false);
        });
    });

    // Cleanup map on component unmount
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Hospitals Map</h1>

      {loading && (
        <div className="mb-4 text-blue-500 font-medium">
          Loading map data...
        </div>
      )}

      {geoJsonError && (
        <div className="mb-4 text-red-500 font-medium">
          Failed to load hospital data: {geoJsonError}
        </div>
      )}

      <div
        ref={mapContainer}
        className="h-[500px] w-full max-w-5xl rounded-md shadow-lg border border-gray-300"
      ></div>
    </div>
  );
};

export default Hospitals;