import { useState } from "react";
import { HeartHandshake, PanelLeft, PanelRight } from "lucide-react";
import { LayoutDashboard, Settings, Home, Calendar, BarChart, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative h-screen flex">
      {/* Sidebar */}
      <div
        style={{ backgroundColor: "#C6414C" }}
        className={cn(
          "h-screen text-white p-4 flex flex-col transition-all duration-300 ease-in-out",
          isOpen ? "w-72" : "w-24"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center gap-3 relative">
          <div className="bg-blue-600 p-2 rounded-md">
            <LayoutDashboard className="text-white" />
          </div>
          {isOpen && <span className="text-xl font-semibold">bikku</span>}

          {/* Sidebar Toggle Icon */}
          <div 
            className="absolute right-[-40px] top-0 bg-white p-2 rounded-full shadow-md cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <PanelLeft size={24} className="text-black" />
            ) : (
              <PanelRight size={24} className="text-black" />
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-6 mt-6">
          <SidebarItem icon={<Home />} label="Home" isOpen={isOpen} />
          <SidebarItem icon={<HeartHandshake />} label="Donate" isOpen={isOpen} />
          <SidebarItem icon={<LayoutDashboard />} label="Recipient" isOpen={isOpen} />
          <SidebarItem icon={<Calendar />} label="Event" isOpen={isOpen} />
          <SidebarItem icon={<BarChart />} label="Visualization" isOpen={isOpen} />
          
          <div className="border-t border-white my-4"></div>
          
          <SidebarItem icon={<Settings />} label="Setting" isOpen={isOpen} />
          <SidebarItem icon={<LogOut />} label="Logout" isOpen={isOpen} />
        </nav>

        {/* User Profile Section */}
        <div className="mt-auto flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
          <img src="/avatar.png" alt="User" className="w-10 h-10 rounded-full" />
          {isOpen && <span className="text-lg">Bikku</span>}
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, isOpen }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
      {icon}
      {isOpen && <span className="text-lg">{label}</span>}
    </div>
  );
};

export default Sidebar;
