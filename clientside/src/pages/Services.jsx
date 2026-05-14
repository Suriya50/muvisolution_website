import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud, FaPaintBrush, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    { icon: <FaCode />, title: "Web Development", desc: "React, Node.js, Next.js" },
    { icon: <FaMobileAlt />, title: "Mobile Apps", desc: "React Native, Flutter" },
    { icon: <FaCloud />, title: "Cloud Solutions", desc: "AWS, Azure, GCP" },
    { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "User-centered design" },
    { icon: <FaChartLine />, title: "Digital Marketing", desc: "SEO, Social Media" },
    { icon: <FaShieldAlt />, title: "IT Consulting", desc: "Strategic planning" },
  ];

  return (
    <div className="bg-slate-950">
      <section className="py-24 bg-gradient-to-b from-cyan-500/10 to-transparent text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold font-mono">Our <span className="text-cyan-400">Services</span></motion.h1>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="text-5xl text-cyan-400 mb-4">{svc.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{svc.title}</h3>
            <p className="text-gray-400">{svc.desc}</p>
          </motion.div>
        ))}
      </section>
      <section className="py-20 text-center">
        <Link to="/login" className="bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-4 rounded-full font-semibold inline-block hover:shadow-cyan-500/50 shadow-lg transition-all duration-300 transform hover:scale-105">Start Your Project →</Link>
      </section>
    </div>
  );
};

export default Services;
