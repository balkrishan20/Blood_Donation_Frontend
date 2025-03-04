import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import "tailwindcss/tailwind.css";

export default function UserNavbar() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full p-4 overflow-hidden lg:gap-2 gap-6 lg:flex-nowrap">
      {/* Main Content - Expanded Width */}
      <div className="flex-[12] flex flex-col h-full pr-6">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-xl">
          <div>
            <h2 className="text-lg font-semibold">Welcome Back!</h2>
            <p className="text-gray-600">Ramzey Nassar</p>
          </div>
          <div className="flex space-x-4 items-center">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 bg-white border border-black rounded-xl focus:outline-none "
            />
            <button className="p-2 bg-gray-200 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Posts Section - Expanded Width */}
        <div className="mt-6 flex-grow overflow-y-auto p-4 bg-white rounded-lg shadow-md h-0 custom-scrollbar">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="p-4 border-b border-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full" />
                <div>
                  <h4 className="font-semibold">Ramzey Nassar</h4>
                  <p className="text-gray-500 text-sm">19 min ago</p>
                </div>
              </div>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
              <div className="mt-4 flex space-x-2">
                <Button className="bg-red-500 text-white shadow-md">Comment</Button>
                <Button className="bg-white text-black shadow-md">Hospital</Button>
                <Button className="bg-white text-black shadow-md">Organization</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar - Responsive */}
      <div className="flex-[4] w-full lg:w-[300px]">
        <div className="bg-white p-4 rounded-lg shadow-xl">
          <h3 className="font-semibold">Welcome Back!</h3>
          <p className="text-gray-600">Ramzey Nassar</p>
        </div>
        <div className="mt-4 space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-32 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
