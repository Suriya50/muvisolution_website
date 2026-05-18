import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = ["Web Development", "Mobile Apps", "Cloud Solutions", "SRE Consulting", "Security Audit", "24/7 Support"];

  return (
    <footer className="relative bg-[#1a3a1a] border-t border-green-500/30 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-green-500 rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <h2 className="text-base font-semibold">
                <span className="text-green-300">Mavi</span>
                <span className="text-white">Solution</span>
              </h2>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Empowering businesses with SRE practices and cutting-edge technology solutions. 
              We transform ideas into digital reality with 99.99% uptime guarantee.
            </p>
            <div className="flex space-x-3 pt-4">
              <a href="#" className="text-gray-500 hover:text-green-400 transition">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-400 transition">
                <FaLinkedin size={14} />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-400 transition">
                <FaGithub size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-green-300 transition text-xs">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="text-white font-semibold text-sm mb-4">Our Services</h3>
            <ul className="space-y-1.5">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-xs">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-white font-semibold text-sm mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-gray-400 text-xs">
                <FaMapMarkerAlt className="text-green-400 mt-0.5" /> 123 Tech Valley, San Francisco, CA
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <FaEnvelope className="text-green-400" /> hello@mavisolution.com
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <FaPhone className="text-green-400" /> +1 (555) 123-4567
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="border-t border-green-500/20 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-[10px] flex items-center justify-center gap-2">
            <FaShieldAlt className="text-green-500/50" />
            © {currentYear} MaviSolution — Innovate. Create. Transform. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;