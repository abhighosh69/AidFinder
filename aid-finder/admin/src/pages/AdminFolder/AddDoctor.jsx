import React, { useContext, useState } from "react";
import { assets } from "../../assets/assetsAdmin/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [docName, setDocName] = useState("");
  const [docEmail, setDocEmail] = useState("");
  const [docPassword, setDocPassword] = useState("");
  const [docExperience, setDocExperience] = useState("1 Year");
  const [docRegistration, setDocRegistration] = useState("");
  const [docFees, setDocFees] = useState("");
  const [docAbout, setDocAbout] = useState("");
  const [docSpeciality, setDocSpeciality] = useState("General physician");
  const [docDegree, setDocDegree] = useState("");
  const [docAddress1, setDocAddress1] = useState("");
  const [docAddress2, setDocAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Please upload a doctor image");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", docName);
      formData.append("email", docEmail);
      formData.append("password", docPassword);
      formData.append("registration_no", docRegistration);
      formData.append("experience", docExperience);
      formData.append("fees", Number(docFees));
      formData.append("about", docAbout);
      formData.append("speciality", docSpeciality);
      formData.append("degree", docDegree);
      formData.append(
        "address",
        JSON.stringify({ line1: docAddress1, line2: docAddress2 })
      );

      // console.log formData
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
        
      })

      const {data} = await axios.post(backendUrl+ 'api/admin/add-doctor',formData, {headers:{aToken}})

      if (data.success) {
        toast.success(data.message);
      }else{
        toast.error(data.message);
      }




    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error(error.response?.data?.message || "Something went wrong");
  }
  
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full" action="">
      <p className="mb-3 text-lg font-semibold">Add Doctor</p>

      <div className="bg-secondary px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-32 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="upload_area"
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p>
            Upload Doctor <br /> Picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 text-gray-600">
          {/* left side */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Name</p>
              <input
                onChange={(e) => setDocName(e.target.value)}
                value={docName}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Enter Doctor Name"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setDocEmail(e.target.value)}
                value={docEmail}
                className="border rounded px-3 py-2"
                type="email"
                placeholder="Enter Doctor email"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input
                onChange={(e) => setDocPassword(e.target.value)}
                value={docPassword}
                className="border rounded px-3 py-2"
                type="password"
                placeholder="Enter Doctor password"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                onChange={(e) => setDocExperience(e.target.value)}
                value={docExperience}
                id="experience"
                className="border rounded px-3 py-2"
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
                <option value="10+ Year">10+ Year</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                onChange={(e) => setDocFees(e.target.value)}
                value={docFees}
                className="border rounded px-3 py-2"
                type="number"
                placeholder="Enter Doctor fees"
                required
              />
            </div>
          </div>
          {/* right side */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                onChange={(e) => setDocSpeciality(e.target.value)}
                value={docSpeciality}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Registration No</p>
              <input
                onChange={(e) => setDocRegistration(e.target.value)}
                value={docRegistration}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Enter Doctor Education"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input
                onChange={(e) => setDocDegree(e.target.value)}
                value={docDegree}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Enter Doctor Education"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                onChange={(e) => setDocAddress1(e.target.value)}
                value={docAddress1}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Address 1"
                required
              />
              <input
                onChange={(e) => setDocAddress2(e.target.value)}
                value={docAddress2}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Address 2"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            onChange={(e) => setDocAbout(e.target.value)}
            value={docAbout}
            className="w-full px-4 pt-2 border rounded"
            placeholder="Write About the Doctor"
            required
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-custom px-10 py-3 mt-4 text-white rounded-full font-semibold text-lg"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
