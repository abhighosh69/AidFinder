import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BloodDonorForm from "../components/BloodDonorForm";
import BloodDonorDirectory from "../components/BloodDonorDirectory";
import BloodBankDirectory from "../components/BloodBankDirectory";

const Doneters = () => {
  const { loadBloodDonorsData } = useContext(AppContext);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Section Nav (Optional) */}
      <nav className="flex gap-6 justify-center text-primary font-semibold mb-8">
        <a href="#register" className="hover:underline">Register</a>
        <a href="#donors" className="hover:underline">Donors</a>
        <a href="#banks" className="hover:underline">Blood Banks</a>
      </nav>

      {/* Blood Donor Registration */}
      <section id="register">
        <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
          Blood Donor Registration
        </h2>
        <BloodDonorForm onSuccess={loadBloodDonorsData}/>
      </section>

      {/* Live Blood Donor List */}
      <section id="donors">
        <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
          Live Blood Donor Directory
        </h2>
        <BloodDonorDirectory />
      </section>

      {/* Static Blood Bank Directory */}
      <section id="banks">
        <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
          Nearby Blood Banks
        </h2>
        <BloodBankDirectory />
      </section>
    </div>
  );
};

export default Doneters;
