import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle, FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaSignInAlt, FaUserPlus, FaShieldAlt, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    setIsAuthenticated(false);
    setUser(null);
    navigate("/");
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#1a3a1a]/95 backdrop-blur-md border-b border-green-400/30 shadow-md" 
          : "bg-[#1a3a1a]/90 backdrop-blur-sm border-b border-green-400/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-12 sm:h-14">
          {/* Logo */}
          <Link to="/" className="group" onClick={() => setIsMenuOpen(false)}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-1.5 sm:gap-2"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-green-500 rounded-md flex items-center justify-center shadow-sm">
                <span className="text-white text-[11px] sm:text-xs font-bold">M</span>
              </div>
              <div>
                <h1 className="text-xs sm:text-sm font-semibold tracking-wide">
                  <span className="text-green-300">Mavi</span>
                  <span className="text-white">Solution</span>
                </h1>
                <p className="hidden sm:block text-[8px] sm:text-[9px] text-green-400/70">secure infrastructure</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-1 lg:gap-1.5 px-2 lg:px-3 py-1.5 rounded-md transition-all duration-300 text-[11px] lg:text-xs font-medium ${
                  location.pathname === link.path
                    ? "text-green-300 bg-green-500/20"
                    : "text-gray-200 hover:text-green-300 hover:bg-green-500/10"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}

            {isAuthenticated && user ? (
              <div className="flex items-center gap-2 ml-2">
                <Link
                  to="/profile"
                  className="flex items-center gap-1.5 bg-green-600 px-2 lg:px-3 py-1.5 rounded-full text-[11px] lg:text-xs font-medium text-white hover:bg-green-500 transition"
                >
                  <FaUserCircle className="text-sm" />
                  <span className="hidden sm:inline">{user.name?.split(' ')[0] || user.name}</span>
                  <span className="sm:hidden">Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-2 lg:px-3 py-1.5 rounded-full text-[11px] lg:text-xs font-medium bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white transition border border-red-500/30"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2 ml-2">
                <Link
                  to="/login"
                  className="bg-green-600 px-2 lg:px-3 py-1.5 rounded-full text-[11px] lg:text-xs font-medium text-white hover:bg-green-500 transition flex items-center gap-1.5"
                >
                  <FaSignInAlt size={10} /> Login
                </Link>
                <Link
                  to="/register"
                  className="border border-green-500/60 px-2 lg:px-3 py-1.5 rounded-full text-[11px] lg:text-xs font-medium text-green-300 hover:bg-green-500/20 transition flex items-center gap-1.5"
                >
                  <FaUserPlus size={10} /> Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-green-300 focus:outline-none text-base p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a3a1a]/95 backdrop-blur-xl border-t border-green-500/30"
          >
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium ${
                    location.pathname === link.path
                      ? "bg-green-500/20 text-green-300"
                      : "text-gray-200 hover:bg-green-500/10"
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              {isAuthenticated && user ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-md bg-green-600 text-white text-sm font-medium"
                  >
                    <FaUserCircle />
                    <span>{user.name}</span>
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                    className="w-full text-left px-3 py-3 rounded-md bg-red-500/20 text-red-300 border border-red-500/30 text-sm font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2 pt-2">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center px-3 py-3 rounded-md bg-green-600 text-white text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center px-3 py-3 rounded-md border border-green-500/60 text-green-300 text-sm font-medium"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;