import React, { useState } from "react";
import { User } from "lucide-react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { CiHospital1 } from "react-icons/ci";
import { VscOrganization } from "react-icons/vsc";
import { TbLockPassword } from "react-icons/tb";


const SignUp = () => {
  const [activeTab, setActiveTab] = useState("User"); // Track active tab
  const [step, setStep] = useState(1); // Track current step
  const [formData, setFormData] = useState({
    user: { name: "", email: "", phone: "", aadhar: null },
    hospital: { name: "", email: "", phone: "", verificationImage: null },
    organization: { name: "", email: "", phone: "", registrationFile: null },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setStep(1); // Reset step to 1 when switching tabs
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 172, 172, 1), rgba(198, 65, 76, 1)), linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 172, 172, 0.5))",
      }}
    >
      {/* Form Container */}
      <div className="w-[85%] max-w-5xl p-8 flex">
        {/* Sidebar Content */}
        <div className="w-1/2 text-white px-6 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-6">SignUp</h1>
            <ul className="space-y-6">
              <li>
                <h2 className="text-xl font-semibold">
                  Start your 30 day trial
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </li>
              <li>
                <User className="w-10 h-10" />
                <h2 className="text-xl font-semibold">
                  Start your 30 day trial
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </li>
              <li>
                <CiHospital1 className="w-10 h-10" />
                <h2 className="text-xl font-semibold">
                  Start your 30 day trial
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </li>
              <li>
                <VscOrganization className="w-10 h-10" />
                <h2 className="text-xl font-semibold">
                  Start your 30 day trial
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-12 text-sm">Terms • Privacy • Docs • Home</div>
        </div>

        {/* Form Content */}
        <div className="w-1/2 bg-white bg-opacity-10 border p-8 rounded-3xl shadow-2xl">
          {/* Tabs */}
          <div className="flex justify-center space-x-4 mb-6">
            {["User", "Hospital", "Organization"].map((tab) => (
              <button
              key={tab}
              onClick={() => handleTabChange(tab)} // Using handleTabChange here
              className={`w-28 px-2 py-2 font-semibold ${
                activeTab === tab
                  ? "bg-red-500 text-white rounded-md"
                  : "bg-white"
              }`}
            >
              {tab}
            </button>
            ))}
          </div>

          {/* Step Indicator */}
          <div className="flex items-center mb-6">
            {/* Step 1 */}
            <div className="flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${
                  step === 1 ? "bg-red-500 text-white" : "bg-white"
                }`}
              >
                1
              </div>
            </div>

            {/* Line to Step 2 */}
            <div className="flex-1 flex items-center">
              <div className="h-0.5 bg-white mx-2 flex-1"></div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${
                  step === 2 ? "bg-red-500 text-white" : "bg-white"
                }`}
              >
                2
              </div>
            </div>

            {/* Line to Step 3 */}
            <div className="flex-1 flex items-center">
              <div className="h-0.5 bg-white mx-2 flex-1"></div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${
                  step === 3 ? "bg-red-500 text-white" : "bg-white"
                }`}
              >
                3
              </div>
            </div>
          </div>

          {/* User avtiveTab */}
          {step === 1 && activeTab === "User" && (
            <div>
              <div className="flex space-x-4 mb-4">
                <div className="w-1/2 relative">
                  <label className="block text-gray-700 font-medium mb-1">
                    First Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center">
                      <User className="w-5 h-4 text-gray-400" />
                    </span>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full shadow-lg h-9 bg-white px-10 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <div className="w-1/2 relative">
                  <label className="block text-gray-700 font-medium mb-1">
                    Last Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center">
                      <User className="w-5 h-4 text-gray-400" />
                    </span>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full shadow-lg h-9 bg-white px-10 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center">
                    <HiOutlineMail className="w-5 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-9 shadow-lg bg-white px-10 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center">
                    <FiPhoneCall className="w-5 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-9 shadow-lg bg-white px-10 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pb-6 pt-10">
                <button
                  onClick={nextStep}
                  className="w-[48%] px-4 py-2 shadow-lg bg-red-500 text-white rounded-md"
                >
                  Next
                </button>
                <button
                  className="w-[48%] px-4 py-2 shadow-lg bg-blue-500 bg-white rounded-md flex items-center justify-center"
                  onClick={() => alert("Google Sign In")}
                >
                  <FcGoogle className="mr-2" />
                  Google SignUp
                </button>
              </div>
            </div>
          )}

          {step === 2 && activeTab === "User" && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Aadhar Card ID
              </label>
              <input
                type="text"
                name="aadhar"
                placeholder="Aadhar Number"
                value={formData.aadhar}
                onChange={handleChange}
                className="w-full mb-4 shadow-lg bg-white px-4 py-2 border rounded-md"
              />
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Upload Aadhar Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData({
                          ...formData,
                          aadharImage: reader.result,
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="w-full shadow-lg bg-white px-4 py-2 border rounded-md"
                />
                {formData.aadharImage && (
                  <div className="mt-4">
                    <p className="text-gray-700 mb-2">Preview:</p>
                    <img
                      src={formData.aadharImage}
                      alt="Aadhar Preview"
                      className="max-w-full h-auto rounded-md border"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-between pb-6 pt-10 ">
                <button
                  onClick={prevStep}
                  className="w-1/2 px-4 shadow-lg py-2 bg-white text-black rounded-md mr-2"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="w-1/2 px-4 py-2 shadow-lg bg-red-500 text-white rounded-md ml-2"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && activeTab === "User" && (
            <div>
              <div className="relative mb-4">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <TbLockPassword className="w-5 h-5 text-gray-400" />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-white px-10 py-2 shadow-lg border rounded-md"
                />
              </div>
              <div className="relative mb-4">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <TbLockPassword className="w-5 h-5 text-gray-400" />
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-white px-10 py-2 shadow-lg border rounded-md"
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="w-1/2 px-4 py-2 bg-white text-black rounded-md mr-2"
                >
                  Back
                </button>
                <button
                  onClick={() => alert("Form Submitted!")}
                  className="w-1/2 px-4 py-2 bg-green-500 text-white rounded-md ml-2"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* hospital activeTab */}
          {step === 1 && activeTab === "Hospital" && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Hospital Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center">
                    <CiHospital1 className="w-5 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    name="hospitalName"
                    placeholder="Hospital Name"
                    value={formData.hospitalName}
                    onChange={handleChange}
                    className="w-full shadow-lg h-9 bg-white px-10 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Email ID
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center">
                    <HiOutlineMail className="w-5 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    name="emailid"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-9 shadow-lg bg-white px-10 py-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Phone No
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center">
                    <FiPhoneCall className="w-5 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    name="phoneno"
                    placeholder="Phone No"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-9 shadow-lg bg-white px-10 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-between pb-6 pt-10">
                <button
                  onClick={nextStep}
                  className="w-[48%] px-4 py-2 shadow-lg bg-red-500 text-white rounded-md"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && activeTab === "Hospital" && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Hospital Verification ID
              </label>
              <input
                type="text"
                name="hospitalId"
                placeholder="Hospital Verification ID"
                value={formData.hospitalId}
                onChange={handleChange}
                className="w-full mb-4 shadow-lg bg-white px-4 py-2 border rounded-md"
              />
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Verifiaction
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData({
                          ...formData,
                          verification: reader.result,
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="w-full shadow-lg bg-white px-4 py-2 border rounded-md"
                />
                {formData.verification && (
                  <div className="mt-4">
                    <p className="text-gray-700 mb-2">Preview:</p>
                    <img
                      src={formData.verification}
                      alt="Verifiaction Preview"
                      className="max-w-full h-auto rounded-md border"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-between pb-6 pt-10 ">
                <button
                  onClick={prevStep}
                  className="w-1/2 px-4 shadow-lg py-2 bg-white text-black rounded-md mr-2"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="w-1/2 px-4 py-2 shadow-lg bg-red-500 text-white rounded-md ml-2"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 3 && activeTab === "Hospital" && (
            <div>
              <div className="relative mb-4">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <TbLockPassword className="w-5 h-5 text-gray-400" />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-white px-10 py-2 shadow-lg border rounded-md"
                />
              </div>
              <div className="relative mb-4">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <TbLockPassword className="w-5 h-5 text-gray-400" />
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-white px-10 py-2 shadow-lg border rounded-md"
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="w-1/2 px-4 py-2 bg-white text-black rounded-md mr-2"
                >
                  Back
                </button>
                <button
                  onClick={() => alert("Form Submitted!")}
                  className="w-1/2 px-4 py-2 bg-green-500 text-white rounded-md ml-2"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* Organizationa activeTabe */}
          {step === 1 && activeTab === "Organization" && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Organization Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center">
                  <VscOrganization className="w-5 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    name="OragnizationName"
                    placeholder="Oragnization Name"
                    value={formData.OrganizationName}
                    onChange={handleChange}
                    className="w-full shadow-lg h-9 bg-white px-10 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Email ID
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center">
                    <HiOutlineMail className="w-5 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    name="emailid"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-9 shadow-lg bg-white px-10 py-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Phone No
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center">
                    <FiPhoneCall className="w-5 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    name="phoneno"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-9 shadow-lg bg-white px-10 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-between pb-6 pt-10">
                <button
                  onClick={nextStep}
                  className="w-[48%] px-4 py-2 shadow-lg bg-red-500 text-white rounded-md"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && activeTab === "Organization" && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Organization Verification ID
              </label>
              <input
                type="text"
                name="organizationId"
                placeholder="Organization Verification ID"
                value={formData.organizationId}
                onChange={handleChange}
                className="w-full mb-4 shadow-lg bg-white px-4 py-2 border rounded-md"
              />
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Verifiaction
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData({
                          ...formData,
                          verification: reader.result,
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="w-full shadow-lg bg-white px-4 py-2 border rounded-md"
                />
                {formData.verification && (
                  <div className="mt-4">
                    <p className="text-gray-700 mb-2">Preview:</p>
                    <img
                      src={formData.verification}
                      alt="Verifiaction Preview"
                      className="max-w-full h-auto rounded-md border"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-between pb-6 pt-10 ">
                <button
                  onClick={prevStep}
                  className="w-1/2 px-4 shadow-lg py-2 bg-white text-black rounded-md mr-2"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="w-1/2 px-4 py-2 shadow-lg bg-red-500 text-white rounded-md ml-2"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && activeTab === "Organization" && (
            <div>
              <div className="relative mb-4">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <TbLockPassword className="w-5 h-5 text-gray-400" />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-white px-10 py-2 shadow-lg border rounded-md"
                />
              </div>
              <div className="relative mb-4">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <TbLockPassword className="w-5 h-5 text-gray-400" />
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-white px-10 py-2 shadow-lg border rounded-md"
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="w-1/2 px-4 py-2 bg-white text-black rounded-md mr-2"
                >
                  Back
                </button>
                <button
                  onClick={() => alert("Form Submitted!")}
                  className="w-1/2 px-4 py-2 bg-green-500 text-white rounded-md ml-2"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
