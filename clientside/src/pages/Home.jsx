import { motion } from "framer-motion";
import { FaRocket, FaMobile, FaCloud, FaChartLine, FaShieldAlt, FaHeadset, FaArrowRight, FaStar, FaUsers, FaProjectDiagram, FaCheckCircle, FaClock, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    { icon: <FaRocket />, title: "SRE Managed Services", description: "99.99% uptime guaranteed with our Site Reliability Engineering expertise.", color: "green" },
    { icon: <FaMobile />, title: "Responsive Design", description: "Perfect experience on desktop, tablet, and mobile devices.", color: "green" },
    { icon: <FaCloud />, title: "Cloud Infrastructure", description: "Scalable solutions on AWS, Azure, and Google Cloud.", color: "green" },
    { icon: <FaChartLine />, title: "Performance Optimized", description: "Lightning-fast loading speeds and SEO-friendly architecture.", color: "green" },
    { icon: <FaShieldAlt />, title: "Enterprise Security", description: "Bank-grade encryption and zero-trust security protocols.", color: "green" },
    { icon: <FaHeadset />, title: "24/7 Support", description: "Round-the-clock technical assistance from our experts.", color: "green" },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <FaProjectDiagram /> },
    { number: "150+", label: "Happy Clients", icon: <FaUsers /> },
    { number: "98%", label: "Client Retention", icon: <FaStar /> },
    { number: "24/7", label: "Support Available", icon: <FaClock /> },
  ];

  return (
    <div className="bg-[#0d2b0d] min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block mb-4">
              <span className="bg-[#1a3a1a] px-3 py-1 rounded-full text-green-300 text-xs font-medium border border-green-500/40">
                <FaShieldAlt className="inline mr-1 text-[10px]" /> Trusted Since 2020
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-green-300">Mavi</span>
              <span className="text-white">Solution</span>
            </h1>
            <p className="text-green-300 text-sm mb-2">Reliability Protocols Active</p>
            <p className="text-gray-200 text-sm max-w-2xl mx-auto mb-6">
              We help startups and businesses achieve 99.99% uptime with our SRE managed services. 
              We bridge the gap between Web Development and Site Reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/services" className="group bg-green-600 px-5 py-2 rounded-full font-medium text-sm hover:bg-green-500 transition inline-flex items-center gap-2 text-white">
                Explore Services <FaArrowRight className="group-hover:translate-x-1 transition text-xs" />
              </Link>
              <Link to="/about" className="bg-[#1a3a1a] px-5 py-2 rounded-full font-medium text-sm hover:bg-green-500/20 transition border border-green-500/40 text-white">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-8">
            <div className="inline-flex items-center gap-2 bg-[#1a3a1a]/80 px-4 py-2 rounded-full border border-green-500/30">
              <FaGlobe className="text-green-400 text-xs" />
              <span className="text-gray-300 text-[11px]">Trusted by startups and enterprises for mission-critical infrastructure</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} className="bg-[#1a3a1a]/60 rounded-xl p-4 text-center border border-green-500/20">
                <div className="text-2xl text-green-400 mb-1 flex justify-center">{stat.icon}</div>
                <div className="text-xl font-bold text-white mb-0.5">{stat.number}</div>
                <div className="text-gray-400 text-[11px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-white">What We Do</h2>
            <p className="text-gray-400 text-sm">Engineering high-performance platforms that are ultra-fast, secure, and scalable</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)} className="bg-[#1a3a1a]/60 rounded-xl p-5 transition-all duration-300 border border-green-500/20 hover:border-green-500/40 hover:bg-[#1a3a1a]/80" style={{ transform: hoveredCard === index ? "translateY(-3px)" : "translateY(0)" }}>
                <div className={`mb-3 text-3xl text-green-400`}>{feature.icon}</div>
                <h3 className="text-base font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 px-4 bg-[#0a2a0a]/30">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-white">Why Choose MaviSolution?</h2>
            <p className="text-gray-400 text-sm">What makes us different from the rest</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a3a1a]/60 rounded-xl p-5 border border-green-500/20">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-400 text-lg mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">99.99% Uptime Guarantee</h3>
                  <p className="text-gray-400 text-xs">Our SRE protocols ensure your business never experiences downtime.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a3a1a]/60 rounded-xl p-5 border border-green-500/20">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-400 text-lg mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Enterprise Security</h3>
                  <p className="text-gray-400 text-xs">Bank-grade encryption and regular security audits for your peace of mind.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a3a1a]/60 rounded-xl p-5 border border-green-500/20">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-400 text-lg mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">24/7 Expert Support</h3>
                  <p className="text-gray-400 text-xs">Our SRE team is always available to assist you with any issues.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a3a1a]/60 rounded-xl p-5 border border-green-500/20">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-400 text-lg mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Scalable Solutions</h3>
                  <p className="text-gray-400 text-xs">Grow without limits with our cloud-native architecture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-[#1a3a1a] rounded-xl p-6 text-center border border-green-500/30">
            <h2 className="text-xl font-bold mb-2 text-white">Ready to Secure Your Infrastructure?</h2>
            <p className="text-gray-400 text-sm mb-4">Join 150+ businesses that trust MaviSolution for mission-critical operations</p>
            <Link to="/register" className="inline-block bg-green-600 px-6 py-2 rounded-full font-medium text-sm hover:bg-green-500 transition text-white">
              Get Started Today →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;