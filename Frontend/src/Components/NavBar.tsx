import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import logo from "../assets/Logo.png";
import DEEP from "../assets/DEEP NET.png";
import SOFT from "../assets/SOFT.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between ">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img className="w-14 object-contain" src={logo} alt="Logo" />
          <div className="flex flex-col gap-2">
            <img className="object-contain" src={DEEP} alt="DEEP NET" />
            <img className="object-contain w-14" src={SOFT} alt="SOFT" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-Oswald">
          <Link to="/" className="text-white hover:text-blue-500 transition duration-300">HOME</Link>
          <Link to="/menu" className="text-white hover:text-blue-500 transition duration-300">MENU</Link>
          <Link to="/menu" className="text-white hover:text-blue-500 transition duration-300">MAKE A RESERVATION</Link>
          <Link to="/menu" className="text-white hover:text-blue-500 transition duration-300">CONTACT US</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative">
          <button
            onClick={handleMenuToggle}
            className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 p-2 rounded-full shadow-lg"
          >
            {isMenuOpen ? (
              <RiCloseFill className="text-2xl text-gray-400" />
            ) : (
              <FiMenu className="text-2xl text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out pt-5   ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col items-center space-y-4 py-4 font-Oswald bg-gray-800 rounded-md">
          <Link to="/" className="text-white hover:text-blue-500 transition duration-300">HOME</Link>
          <Link to="/menu" className="text-white hover:text-blue-500 transition duration-300">MENU</Link>
          <Link to="/menu" className="text-white hover:text-blue-500 transition duration-300">MAKE A RESERVATION</Link>
          <Link to="/menu" className="text-white hover:text-blue-500 transition duration-300">CONTACT US</Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
