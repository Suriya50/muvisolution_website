import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle, FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaSignInAlt, FaUserPlus } from "react-icons/fa";
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
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LEFT SIDE: Logo */}
          <Link to="/" className="group">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-lg shadow-cyan-500/50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">M</div>
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-wider">
                  <span className="text-cyan-400">Mavi</span>
                  <span className="text-white">Solution</span>
                </h1>
                <p className="text-[10px] text-cyan-400/70 tracking-wider font-mono">&gt; SYSTEM_READY</p>
              </div>
            </motion.div>
          </Link>

          {/* RIGHT SIDE: Navigation Links + Auth */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-mono text-sm ${
                  location.pathname === link.path
                    ? "text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}

            {isAuthenticated && user ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  <FaUserCircle className="text-xl" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 rounded-full font-semibold text-sm bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 border border-red-500/30"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  <FaSignInAlt /> Login
                </Link>
                <Link
                  to="/register"
                  className="border border-cyan-500/50 px-5 py-2 rounded-full font-semibold text-sm text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 flex items-center gap-2"
                >
                  <FaUserPlus /> Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-cyan-400 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm ${
                    location.pathname === link.path
                      ? "bg-cyan-400/20 text-cyan-400 border-l-2 border-cyan-400"
                      : "text-gray-300 hover:bg-cyan-400/10"
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
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  >
                    <FaUserCircle />
                    <span>{user.name}</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center px-4 py-3 rounded-lg border border-cyan-500/50 text-cyan-400"
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