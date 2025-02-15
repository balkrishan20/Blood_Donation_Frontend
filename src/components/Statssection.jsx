import React from 'react';

const Statssection = () => {
  return (
    <section>
      {/* Stats Section */}
      <div style={{ backgroundColor: '#C6414C' }} className="text-white my-5 py-16 rounded-lg shadow-xl max-w-4xl mx-auto flex justify-around text-center relative -mt-20">
        <div>
          <h2 className="text-4xl font-bold">24+</h2>
          <p className="text-m mt-2">Year Experience</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">98+</h2>
          <p className="text-m mt-2">Expert Staff</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">50+</h2>
          <p className="text-m mt-2">Blood Per-Month</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">33+</h2>
          <p className="text-m mt-2">Cooperation</p>
        </div>
      </div>
    </section>
  );
};

export default Statssection;
