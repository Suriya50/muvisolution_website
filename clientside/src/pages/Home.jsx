import { motion } from "framer-motion";
import { FaRocket, FaMobile, FaCloud, FaChartLine, FaShieldAlt, FaHeadset, FaArrowRight, FaStar, FaUsers, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "> WHERE IDEAS COME TO LIFE_";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <FaRocket />, title: "Fast Development", description: "Agile methodology with modern stacks.", color: "from-cyan-500 to-blue-500" },
    { icon: <FaMobile />, title: "Responsive Design", description: "Pixel-perfect on all devices.", color: "from-blue-500 to-indigo-500" },
    { icon: <FaCloud />, title: "Cloud Solutions", description: "99.9% uptime guarantee.", color: "from-indigo-500 to-purple-500" },
    { icon: <FaChartLine />, title: "SEO Optimized", description: "Boost your search rankings.", color: "from-purple-500 to-pink-500" },
    { icon: <FaShieldAlt />, title: "Secure Systems", description: "Enterprise-grade security.", color: "from-pink-500 to-red-500" },
    { icon: <FaHeadset />, title: "24/7 Support", description: "Round-the-clock assistance.", color: "from-red-500 to-orange-500" },
  ];

  const stats = [
    { number: "500+", label: "Projects", icon: <FaProjectDiagram /> },
    { number: "150+", label: "Happy Clients", icon: <FaUsers /> },
    { number: "50+", label: "Experts", icon: <FaStar /> },
    { number: "99.9%", label: "Satisfaction", icon: <FaStar /> },
  ];

  return (
    <div className="relative overflow-hidden bg-slate-950">
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-950 via-cyan-950/10 to-slate-950"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block mb-6">
              <span className="bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full text-cyan-400 text-sm font-mono border border-cyan-500/50 shadow-lg">
                🖥️ CRT MODE ACTIVE
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-cyan-400">MaviSolution</span>
              <br />
              <span className="text-white font-mono text-3xl md:text-5xl tracking-wider">{typedText}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-mono">
              We craft digital experiences that inspire, engage, and transform businesses into industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                Explore Services <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="bg-slate-900/80 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-500/50">
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-20 bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden max-w-4xl mx-auto border border-cyan-500/30 shadow-2xl">
            <div className="bg-slate-900/80 px-4 py-3 flex items-center gap-2 border-b border-cyan-500/30">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-glow"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-cyan-400 ml-2 font-mono">mavisolution@crt:~$</span>
            </div>
            <div className="p-6 font-mono text-sm bg-black/50">
              <p className="text-green-400">$ const maviSolution = {"{"}</p>
              <p className="ml-4 text-cyan-400">innovation: <span className="text-yellow-400">'unlimited'</span>,</p>
              <p className="ml-4 text-cyan-400">quality: <span className="text-yellow-400">'excellence'</span>,</p>
              <p className="ml-4 text-cyan-400">passion: <span className="text-yellow-400">'technology'</span></p>
              <p className="text-green-400">{"}"};</p>
              <p className="text-purple-400 mt-2">{`> System ready. Let's build.`}</p>
              <span className="text-cyan-400 animate-pulse">█</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-cyan-500/30">
                <div className="text-4xl text-cyan-400 mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">{stat.number}</div>
                <div className="text-gray-400 font-mono text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono"><span className="text-cyan-400">&gt;</span> Why Choose <span className="text-cyan-400">MaviSolution?</span></h2>
            <p className="text-xl text-gray-400">Technical excellence meets creative innovation.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)} className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl border border-cyan-500/30" style={{ transform: hoveredCard === index ? "translateY(-10px) scale(1.02)" : "translateY(0)" }}>
                <div className={`mb-6 text-5xl bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 font-mono">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-slate-900/80 backdrop-blur-sm rounded-3xl p-12 text-center relative overflow-hidden border border-cyan-500/40">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">Ready to Transform Your <span className="text-cyan-400">Business?</span></h2>
              <p className="text-xl text-gray-300 mb-8">Join hundreds of satisfied clients.</p>
              <Link to="/login" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                &gt; Start Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;