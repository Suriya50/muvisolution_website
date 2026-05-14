import { motion } from "framer-motion";
import { FaCode, FaUsers, FaLightbulb, FaTrophy } from "react-icons/fa";

const About = () => {
  const values = [
    { icon: <FaCode className="text-4xl text-cyan-400" />, title: "Technical Excellence", description: "Modern frameworks and best practices." },
    { icon: <FaUsers className="text-4xl text-cyan-400" />, title: "Client-Centric", description: "Your success is our success." },
    { icon: <FaLightbulb className="text-4xl text-cyan-400" />, title: "Innovation", description: "Creative problem-solving." },
    { icon: <FaTrophy className="text-4xl text-cyan-400" />, title: "Quality First", description: "Excellence in every project." },
  ];

  return (
    <div className="bg-slate-950">
      <section className="py-24 bg-gradient-to-b from-cyan-500/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold mb-6 font-mono">
            About <span className="text-cyan-400">MaviSolution</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            &gt; We're on a mission to help businesses thrive in the digital age.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-6 font-mono text-cyan-400">// OUR STORY</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">Founded in 2020, MaviSolution started with a simple idea: to make cutting-edge technology accessible. Today, we've served over 150+ businesses worldwide.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-center shadow-2xl">
            <div className="text-6xl font-bold text-white mb-4">500+</div><div className="text-white text-xl">Projects</div>
            <div className="text-6xl font-bold text-white mt-6 mb-4">150+</div><div className="text-white text-xl">Clients</div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-4xl font-bold font-mono text-cyan-400">[ CORE VALUES ]</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center p-6 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-cyan-500/30">
                <div className="flex justify-center mb-4">{val.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-gray-400">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;