import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#C6414C' }} className="text-white py-20 w-full mt-auto ">
      {/* Newsletter Section */}
      <div className="w-full px-10 flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-black">Join To Get Our Newsletter</h3>
              <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="mt-4 md:mt-0 flex w-full md:w-auto ">
              <div className="flex items-center drop-shadow-md overflow-hidden w-full ">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-6 py-4 bg-white text-black focus:outline-none "
                />
                <button style={{ backgroundColor: '#C6414C' }} className="text-white px-6 py-2 drop-shadow-md font-semibold hover:bg-red-600 mr-2 ml-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="w-full px-4 mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <h4 className="font-bold text-lg">LOGO</h4>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectet adipireti scing elit sed do eiusmod tempor incidi.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-xing"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg">Quick Link</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Charity</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Term & Condition</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold text-lg">Useful Links</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>GMIT BARUIPUR,KOLKATA</li>
            <li>7549272558</li>
            <li>bikku@mail.com</li>
          </ul>
        </div>

        {/* Work Hours */}
        <div>
          <h4 className="font-bold text-lg">Work Hours</h4>
          <p className="text-sm mt-2">Mon - Fri : 09:00 AM - 9:00 PM</p>
          <p className="mt-4 text-sm font-bold">Need For Help? Call Us</p>
          <button className="mt-2 bg-white text-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
