import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  const services = ["Web Development", "Mobile Apps", "Cloud Solutions", "UI/UX Design", "Digital Marketing", "IT Consulting"];

  return (
    <footer className="relative bg-slate-950/95 border-t-2 border-cyan-500/30 mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg rotate-45"></div>
              <h2 className="text-2xl font-bold">
                <span className="text-cyan-400">Mavi</span>
                <span className="text-white">Solution</span>
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm font-mono">
              &gt; Empowering businesses with cutting-edge technology solutions. We transform ideas into digital reality.
            </p>
            <div className="flex space-x-4 pt-6">
              {[FaTwitter, FaLinkedin, FaGithub, FaGlobe].map((Icon, idx) => (
                <a key={idx} href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="text-white font-bold text-lg mb-6 font-mono border-l-2 border-cyan-400 pl-3">[ QUICK LINKS ]</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group font-mono text-sm">
                    <span className="text-cyan-400">&gt;</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-white font-bold text-lg mb-6 font-mono border-l-2 border-cyan-400 pl-3">[ SERVICES ]</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm font-mono flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full"></span> {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="text-white font-bold text-lg mb-6 font-mono border-l-2 border-cyan-400 pl-3">[ CONTACT ]</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition text-sm font-mono">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" /> 123 Tech Valley, CA
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition text-sm font-mono">
                <FaEnvelope className="text-cyan-400" /> hello@mavisolution.com
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition text-sm font-mono">
                <FaPhone className="text-cyan-400" /> +1 (555) 123-4567
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="border-t border-cyan-500/20 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm font-mono">
            © {currentYear} MaviSolution — &gt; Innovate.Create.Transform.
            <span className="text-cyan-400 ml-2 animate-pulse">_</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;