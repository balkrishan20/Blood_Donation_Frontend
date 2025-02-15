import React from 'react';

const BloodTestReport = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-b from-rose-400 to-rose-600 p-8 rounded-3xl shadow-lg flex flex-wrap items-center gap-8 max-w-5xl">
        {/* Left Section - Text */}
        <div className="flex-1 text-white">
          <h2 className="text-4xl font-bold mb-4">Visualize your Blood test report</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
          <button className="bg-white text-rose-500 font-medium py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            Upload
          </button>
        </div>

        {/* Right Section - Drag & Drop */}
        <div style={{width: '50%', height: '100%', background: 'linear-gradient(335deg, rgba(255, 255, 255, 0.10) 0%, rgba(254.63, 254.63, 254.63, 0.30) 100%)', boxShadow: '0px 4px 50px -5px rgba(0, 0, 0, 0.25)', borderRadius: 25, border: '2px white solid', backdropFilter: 'blur(40px)'}}>
      <div className="relative bg-white p-8 rounded-3xl shadow-lg w-96">
        <h3 className="text-center text-rose-500 font-bold text-lg mb-4">UPLOAD PDF</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 01.88-2.575L12 3l8.12 9.425A4 4 0 0121 15v6H3v-6z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v6" />
          </svg>
          <p className="text-rose-500 font-medium text-lg mb-2">Drag & Drop</p>
          <p className="text-gray-500">Upload your PDF for visualization</p>
        </div>
      </div>
      </div>
    </div>
    </section>
  );
};

export default BloodTestReport;
