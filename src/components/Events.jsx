import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdTime } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";


const Events = () => {
    const events = [
        {
          date: '17-08-2021',
          time: '10 am - 1 pm',
          location: 'Kolkata',
          title: 'Blood Donation for Independence Day',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        },
        {
          date: '17-11-2021',
          time: '10 am - 1 pm',
          location: 'Bihar',
          title: 'Blood Donation for Independence Day',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        },
        {
          date: '09-12-2021',
          time: '10 am - 1 pm',
          location: 'Delhi',
          title: 'Blood Donation for Independence Day',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        },
      ];
    
      return (
        <section className="py-6">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Blood Donation Event</h2>
          </div>
    
          {/* Cards Container */}
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg flex flex-col overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="bg-gray-300 h-48"></div>
    
                {/* Event Details */}
                <div className="flex">
                  <div style={{ backgroundColor: '#FFACAC' }} className="flex items-center text-white px-4 py-2 w-1/2">
                  <CiCalendarDate className='mr-2' />
                    <span>{event.date}</span>
                  </div>
                  <div style={{ backgroundColor: '#C6414C' }} className="flex items-center text-white px-4 py-2 w-1/2">
                  <IoMdTime className='mr-2' />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* location */}

                <div className="flex justify-center items-center bg-gray-500 text-white px-4 py-2">
                <FaMapMarkerAlt className="text-white mr-2" />
                <span>{event.location}</span>
              </div>
    
                {/* Event Content */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    };

export default Events;
