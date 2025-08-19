import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

function Header() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      ref={headerRef}
      className="fixed w-full z-50 bg-[#081926]" // Changed to always blue-900
    >
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg relative">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <img src="./logo.png" alt="Logo" className="h-10" />
          </span>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={nav}
              onClick={() => setNav(!nav)}
            >
              <span className="sr-only">Open main menu</span>
              {nav ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Navigation items */}
          <div
            className={`flex-col md:flex md:flex-row items-center w-full md:w-auto md:order-2 ${
              nav
                ? "flex absolute top-14 left-0 w-full bg-white shadow-md p-4 z-50 md:shadow-none md:p-0 md:bg-transparent md:relative md:top-0"
                : "hidden md:flex gap-6"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:gap-8 gap-0">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setNav(false);
                  }}
                  className="group cursor-pointer block py-2 px-3 rounded md:bg-transparent md:p-0"
                >
                  <span className="relative text-gray-700 md:text-white group-hover:text-white transition-colors duration-300">
                    <span className="block group-hover:animate-float">
                      {item.name}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </li>
              ))}
            </ul>
            <button
              className="cursor-pointer transition duration-150 ease-in-out mt-4 md:mt-0 rounded-full bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:ml-4 hover:animate-bounce"
              type="button"
            >
              Sign Up Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;