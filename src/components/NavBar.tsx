import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div>
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="hero"
              duration={300}
              smooth={true}
              className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              to="about"
              duration={300}
              smooth={true}
              className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
            >
              About Me
            </Link>
            <Link
              to="projects"
              duration={300}
              smooth={true}
              className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              duration={300}
              smooth={true}
              className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
            >
              Contacts
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700">
            <Link
              to="hero"
              duration={300}
              smooth={true}
              className="block px-3 py-2 rounded-md transition-colors duration-300 hover:bg-gray-600 hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              to="about"
              duration={300}
              smooth={true}
              className="block px-3 py-2 rounded-md transition-colors duration-300 hover:bg-gray-600 hover:text-blue-400"
            >
              About Me
            </Link>
            <Link
              to="projects"
              duration={300}
              smooth={true}
              className="block px-3 py-2 rounded-md transition-colors duration-300 hover:bg-gray-600 hover:text-blue-400"
            >
              Portfolio
            </Link>
            <Link
              to="contacts"
              duration={300}
              smooth={true}
              className="block px-3 py-2 rounded-md transition-colors duration-300 hover:bg-gray-600 hover:text-blue-400"
            >
              Contacts
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
