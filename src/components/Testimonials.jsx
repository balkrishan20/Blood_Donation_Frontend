import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Favorite site to find tools",
      author: "CEO of Apps Without Code",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      quote: "An amazing buyer network",
      author: "Sold Soil & Clay in 2022",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      quote: "Great platform to grow",
      author: "Entrepreneur",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      quote: "Helped me connect globally",
      author: "CEO, Startup World",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Main Testimonial Carousel */}
        <div style={{backgroundColor: '#FFACAC'}} className="relative w-full md:w-[500px] h-[300px] overflow-hidden  rounded-[30px] shadow-lg" >
        <div className="absolute top-0 left-4 text-red-600 text-6xl font-bold">“</div>
          <div
            className="flex transition-transform duration-500 ease-in-out gap-0"
            style={{ transform: `translateX(-${activeIndex * 100}%)`,  }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  
                }}
                className="w-full h-full min-h-full flex-shrink-0 flex flex-col justify-center items-center p-6"
              >
                <p className="mt-12 text-gray-700 text-center">{testimonial.details}</p>
                <div className="flex items-center mt-6">
                  <div className="h-10 w-10 rounded-full bg-gray-400"></div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Navigation List */}
        <div className="flex flex-col space-y-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`p-4 rounded-[15px] shadow-md cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-white text-black'
                  : 'bg-slate-400 text-gray-800 hover:bg-gray-200'
              }`}
            >
              <p className="font-semibold">{testimonial.quote}</p>
              <p className="text-sm">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
