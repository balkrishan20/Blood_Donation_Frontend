import { useState } from "react";
import { HeartHandshake } from "lucide-react";
import { LayoutDashboard, Settings, Users, ChevronRight, Menu, Home, Calendar, BarChart, LogOut } from "lucide-react";
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
          isOpen ? "w-72" : "w-20"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-md">
              <LayoutDashboard className="text-white" />
            </div>
            {isOpen && <span className="text-lg font-semibold">bikku</span>}
          </div>
        </div>
        <nav className="flex-1 space-y-6">
          <SidebarItem icon={<Home />} label="Home" isOpen={isOpen} />
          <SidebarItem icon={<HeartHandshake />} label="Donate" isOpen={isOpen} />
          <SidebarItem icon={<LayoutDashboard />} label="Recipient" isOpen={isOpen} />
          <SidebarItem icon={<Calendar />} label="Event" isOpen={isOpen} />
          <SidebarItem icon={<BarChart />} label="Visualization" isOpen={isOpen} />
          
          <div className="border-t border-white my-4"></div>
          
          <SidebarItem icon={<Settings />} label="Setting" isOpen={isOpen} />
          <SidebarItem icon={<LogOut />} label="Logout" isOpen={isOpen} />
        </nav>
        <div className="mt-auto flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
          <img src="/avatar.png" alt="User" className="w-8 h-8 rounded-full" />
          {isOpen && <span>Bikku</span>}
          <ChevronRight className="ml-auto text-white" />
        </div>
      </div>
      
      {/* Menu Button - Positioned Next to Sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white bg-black hover:bg-gray-800 rounded-md h-fit mt-4 ml-2"
      >
        <Menu size={28} />
      </button>
    </div>
  );
};

const SidebarItem = ({ icon, label, isOpen }) => {
  return (
    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
      {icon}
      {isOpen && <span>{label}</span>}
      {isOpen &&<ChevronRight className="ml-auto text-white" />}
    </div>
  );
};

export default Sidebar;
