import React from 'react';

const Herosection = () => {
  return (
    <section className="relative bg-[url('/home.png')] bg-cover bg-center h-screen flex items-center justify-center text-center text-white">
      {/* Hero Content */}
      <div className="max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4 text-black">
          Donate Your Blood to Us, Save More Life Together
        </h1>
        <p className="text-lg mb-6 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
        </p>
        <div className="flex justify-center space-x-4 text-black">
          <button style={{ backgroundColor: '#C6414C' }} className="text-white px-6 py-3 rounded-lg shadow-md hover:bg-rose-600">
            Learn more
          </button>
          <button className="flex items-center bg-white text-rose-500 border-2 border-rose-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
            <i className="fas fa-play mr-2"></i> Watch Video
          </button>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 z-0">
        <div className="wave-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="wave"
          >
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,218.7C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <style jsx>{`
        .wave-container {
          position: relative;
          width: 100%;
          height: 150px;
          overflow: hidden;
        }
        .wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 150px;
          animation: moveWave 8s linear infinite;
        }
        @keyframes moveWave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style> */}

    </section>
  );
};

export default Herosection;
