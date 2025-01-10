import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_MAP_ACCESS_TOKEN;

const Hospitals = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current, // Reference to the map container
      style: "mapbox://styles/abhi-69/cm5h55254000l01s739enh16h", // Replace with your Mapbox Studio style URL
      center: [88.3639, 22.5726], // Center coordinates (longitude, latitude) for India
      zoom: 8, // Initial zoom level
    });

    // Add the MapboxGeocoder control
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: "Search for locations",
      zoom: 12, // Zoom level after selecting a location
    });

    map.current.addControl(geocoder);

    // Add navigation controls (optional)
    map.current.addControl(new mapboxgl.NavigationControl());

    // Add geolocate control to locate user's position
    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });

    map.current.addControl(geolocateControl);

    // Trigger geolocation on map load
    map.current.on("load", () => {
      geolocateControl.trigger();
    });

    // Load GeoJSON data dynamically
    fetch("/map.geojson")
      .then((response) => response.json())
      .then((data) => {
        // Add the GeoJSON data as a source
        map.current.addSource("hospitals", {
          type: "geojson",
          data: data,
        });

        // Add a layer to display the points
        map.current.addLayer({
          id: "hospital-points",
          type: "circle",
          source: "hospitals",
          paint: {
            "circle-radius": 8,
            "circle-color": "#FF5722", // Customize point color
          },
        });

        // Add a popup to display hospital names on click
        map.current.on("click", "hospital-points", (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const name = e.features[0].properties.name;

          const popup = new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`<strong>${name}</strong>`)
            .addTo(map.current);

          // Make sure the close button is inert
          popup.on("open", () => {
            const closeButton = document.querySelector(
              ".mapboxgl-popup-close-button"
            );
            if (closeButton) {
              closeButton.setAttribute("inert", "true");
            }
          });

          // Remove inert when the popup is closed
          popup.on("close", () => {
            const closeButton = document.querySelector(
              ".mapboxgl-popup-close-button"
            );
            if (closeButton) {
              closeButton.removeAttribute("inert");
            }
          });
        });

        // Change cursor to pointer when hovering over points
        map.current.on("mouseenter", "hospital-points", () => {
          map.current.getCanvas().style.cursor = "pointer";
        });

        // Reset cursor when leaving points
        map.current.on("mouseleave", "hospital-points", () => {
          map.current.getCanvas().style.cursor = "";
        });
      })
      .catch((error) => console.error("Error loading GeoJSON data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Hospitals Map</h1>
      <div
        ref={mapContainer}
        className="h-[500px] w-full max-w-5xl rounded-md shadow-lg border border-gray-300"
      ></div>
    </div>
  );
};

export default Hospitals;
