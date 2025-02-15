import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import ReCAPTCHA from "react-google-recaptcha";

export default function SigninPage() {
  const [captchaUrl, setCaptchaUrl] = useState("/api/captcha");

  // Refresh custom captcha
  const refreshCaptcha = () => {
    setCaptchaUrl(`/api/captcha?${Date.now()}`);
  };

  // Handle Google reCAPTCHA response
  const handleCaptchaChange = (value) => {
    console.log("Google Captcha value:", value); // Send this value to your backend for validation
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen w-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 172, 172, 1), rgba(198, 65, 76, 1)), linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 172, 172, 0.5))",
      }}
    >
      <div className="w-full max-w-lg p-8 bg-white/20 rounded-2xl shadow-lg backdrop-blur-md">
        <h1 className="text-2xl font-semibold text-center text-white mb-6">
          Sign In
        </h1>
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-white mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-sm text-gray-900 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-white mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-sm text-gray-900 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Password"
              required
            />
          </div>

          {/* Forget Password Section */}
          <div className="mb-6 text-center">
            <a
              href="/forgot-password"
              className="text-sm text-white underline hover:text-blue-200"
            >
              Forgot Password?
            </a>
          </div>

          {/* Custom Captcha */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-white mb-2">
              Custom Captcha
            </label>
            <div className="flex items-center">
              <img
                src={captchaUrl}
                alt="Captcha"
                className="w-32 h-12 rounded-md bg-gray-200"
              />
              <button
                type="button"
                className="ml-4 text-black bg-transparent underline hover:text-blue-400"
                onClick={refreshCaptcha}
              >
                Reload Captcha
              </button>
            </div>
            <input
              type="text"
              className="mt-2 w-full px-4 py-2 text-sm text-gray-900 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter captcha"
              required
            />
          </div>

          {/* Google reCAPTCHA */}
          {/* <div className="mb-6">
            <ReCAPTCHA
              sitekey="your-site-key-here" // Replace with your Google reCAPTCHA site key
              onChange={handleCaptchaChange}
            />
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-lg font-medium text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Sign In
          </button>
        </form>

        {/* Google Sign In Button */}
        <div className="mt-6 flex justify-center">
          <button
            className="w-[48%] px-4 py-2 shadow-lg bg-blue-500 bg-white rounded-md flex items-center justify-center"
            onClick={() => alert("Google Sign In")}
          >
            <FcGoogle className="mr-2" />
            Google SignIn
          </button>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center text-white text-sm">
          <a href="/terms" className="hover:underline">
            Terms
          </a>{" "}
          ·
          <a href="/privacy" className="hover:underline mx-2">
            Privacy
          </a>{" "}
          ·
          <a href="/docs" className="hover:underline">
            Docs
          </a>{" "}
          ·
          <a href="/" className="hover:underline ml-2">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
