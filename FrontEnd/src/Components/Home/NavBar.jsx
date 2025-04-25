import React, { useState, useEffect } from "react";
import { Plane } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position for navbar styling changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if a link is active
  const isActive = (path) => {
    if (path === "/#features") {
      return location.pathname === "/" && location.hash === "#features";
    }
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-md" : "bg-white/80"
      } backdrop-blur-sm border-b border-gray-200`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 group">
            <Plane className="h-6 w-6 text-teal-600 group-hover:text-teal-700 transition-colors duration-200" />
            <span className="text-xl font-semibold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
              <Link to="/">Travel Budget Planning Tool</Link>
            </span>
          </div>

          {/* Desktop Navbar Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#features"
              className={`font-medium transition-colors duration-200 hover:text-teal-600 relative ${isActive("/#features") ? "text-teal-600" : "text-gray-700"
                }`}
            >
              Features
              {isActive("/#features") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transform -translate-y-1"></span>
              )}
            </a>
            <Link
              to="/about"
              className={`font-medium transition-colors duration-200 hover:text-teal-600 relative ${isActive("/about") ? "text-teal-600" : "text-gray-700"
                }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transform -translate-y-1"></span>
              )}
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors duration-200 hover:text-teal-600 relative ${isActive("/contact") ? "text-teal-600" : "text-gray-700"
                }`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transform -translate-y-1"></span>
              )}
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors duration-200"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-teal-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar Links (Positioned on the right side) */}
      <div
        className={`md:hidden absolute top-16 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 w-48 shadow-lg rounded-bl-md transition-all duration-300 transform ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-start py-3 space-y-4 px-4">
          <a
            href="/#features"
            onClick={() => setIsMenuOpen(false)}
            className={`font-medium transition-colors duration-200 hover:text-teal-600 ${isActive("/#features") ? "text-teal-600" : "text-gray-700"
              }`}
          >
            Features
          </a>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={`font-medium transition-colors duration-200 hover:text-teal-600 ${isActive("/about") ? "text-teal-600" : "text-gray-700"
              }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={`font-medium transition-colors duration-200 hover:text-teal-600 ${isActive("/contact") ? "text-teal-600" : "text-gray-700"
              }`}
          >
            Contact
          </Link>
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="w-full px-3 py-2 rounded-md bg-teal-600 text-white font-medium text-center hover:bg-teal-700 transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;