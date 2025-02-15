import { LogOut, User2, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navbar = () => {
  const location = useLocation();

  // Dynamic style based on current route
  const linkStyles = (path) => {
    return location.pathname === path
      ? "text-[#F83002] font-semibold border-b-2 border-[#F83002] pb-1"
      : "hover:text-[#F83002] transition-all duration-300 ease-in-out pb-1";
  };

  const logoutHandler = () => {
    // Add your logout logic here
    console.log("User logged out");
  };

  // Assuming user is authenticated or not
  const isAuthenticated = true; // Change this based on your auth logic
  const isRecruiter = false; // Example flag for recruiter/admin views

  return (
    <nav className="fixed top-5 left-20 right-20 w-100 z-50 bg-white/80 backdrop-blur-sm shadow rounded-full">
  <div className="flex items-center justify-between max-w-7xl mx-auto h-16 px-4 md:px-8">
    {/* Logo */}
    <div>
      <h1 className="text-3xl font-extrabold text-gray-900 tracking-wide">
        Blood <span className="text-[#F83002]">Finder</span>
      </h1>
    </div>

    {/* Nav Links */}
    <div className="flex items-center gap-8">
      <ul className="flex font-medium items-center gap-6 text-gray-700">
        {isRecruiter ? (
          <>
            <li>
              <Link
                to="/recruiter/companies"
                className={linkStyles("/recruiter/companies")}
              >
                Companies
              </Link>
            </li>
            <li>
              <Link
                to="/recruiter/jobs"
                className={linkStyles("/recruiter/jobs")}
              >
                Jobs
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/" className="text-gray-700 hover:text-[#F83002] transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className="text-gray-700 hover:text-[#F83002] transition duration-300">
                AboutUs
              </Link>
            </li>
            <li>
              <Link to="/Events" className="text-gray-700 hover:text-[#F83002] transition duration-300">
                Events
              </Link>
            </li>
            <li>
              <Link to="/Page" className="text-gray-700 hover:text-[#F83002] transition duration-300">
                Page
              </Link>
            </li>
            <li>
              <Link to="/News" className="text-gray-700 hover:text-[#F83002] transition duration-300">
                News
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Auth Buttons */}
      {isAuthenticated ? (
        <Popover>
          <PopoverTrigger asChild>
          <Button style={{ backgroundColor: '#C6414C' }} className="flex items-center gap-2 px-2 py-2 text-white rounded-full drop-shadow-xl">
          <Menu size={24} className="text-white" /> 
              <img
                src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                alt="user avatar"
                className="w-6 h-6 rounded-full flex items-center justify-center"
              />
          </Button>    
          </PopoverTrigger>
          
          <PopoverContent className="w-72 p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                  alt="user avatar"
                />
              </Avatar>
              <div>
                <h4 className="font-medium text-lg">Bikku</h4>
                <p className="text-sm text-gray-500">Blood</p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <User2 />
                <Button variant="ghost" className="bg-[#6A38C2]">
                  <Link to="/profile">View Profile</Link>
                </Button>
              </div>
              {isRecruiter && (
                <div className="flex items-center gap-2 text-gray-700">
                  <User2 />
                  <Button variant="link">
                    <Link to="/admin/home">Admin</Link>
                  </Button>
                </div>
              )}
              <div className="flex items-center gap-2 text-gray-700">
                <LogOut />
                <Button onClick={logoutHandler} variant="link">
                  Logout
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="px-4 py-1.5">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="px-4 py-1.5 bg-[#6A38C2] hover:bg-[#3b0696] transition-all duration-300 ease-in-out">
              Signup
            </Button>
          </Link>
        </div>
      )}
    </div>
  </div>
</nav>

  );
};

export default Navbar;