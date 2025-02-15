import React from 'react';

const FacilitiesOffered = () => {
  return (
    <section className="py-12 from-white to-rose-100">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Text Section */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-6xl font-bold mb-4">
            Facilities <br /> Offered
          </h2>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full md:w-1/2 flex flex-wrap gap-4 justify-center px-4 drop-shadow-[-50px_35px_35px_rgba(255,172,172,1)]">
          {/* Card 1 */}
          <div className="relative w-48 h-64 rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-500 ease-in-out peer-hover:w-20">
            <img
              src=""
              alt="Expert Staff"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-rose-500 text-white py-2 text-center">
              Expert Staff
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative peer w-20 h-64 rounded-lg overflow-hidden shadow-lg bg-white hover:w-48 transition-all duration-500 ease-in-out">
            <img
              src=""
              alt="Expert"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-rose-500 text-white py-2 text-center">
              Expert
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-20 h-64 rounded-lg overflow-hidden shadow-lg bg-white hover:w-48 transition-all duration-500 ease-in-out">
            <img
              src=""
              alt="Expert"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-rose-500 text-white py-2 text-center">
              Expert
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesOffered;
