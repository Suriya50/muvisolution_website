import { motion } from "framer-motion";
import { FaCode, FaUsers, FaLightbulb, FaTrophy, FaShieldAlt, FaRocket, FaAward, FaHandshake, FaClock, FaGlobe } from "react-icons/fa";

const About = () => {
  const values = [
    { icon: <FaCode />, title: "Technical Excellence", description: "We use modern frameworks and best practices to deliver cutting-edge solutions." },
    { icon: <FaUsers />, title: "Client-Centric", description: "Your success is our success. We work closely with you to achieve your goals." },
    { icon: <FaLightbulb />, title: "Innovation First", description: "Creative problem-solving and innovative approaches to every challenge." },
    { icon: <FaTrophy />, title: "Quality Assured", description: "Excellence in every project with rigorous testing and quality checks." },
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", desc: "Started with a vision to revolutionize web infrastructure" },
    { year: "2021", title: "First 50 Clients", desc: "Achieved milestone of 50 satisfied clients" },
    { year: "2022", title: "SRE Certification", desc: "Became certified Site Reliability Engineering partners" },
    { year: "2023", title: "Global Expansion", desc: "Expanded services to international markets" },
    { year: "2024", title: "500+ Projects", desc: "Completed over 500 successful projects worldwide" },
  ];

  return (
    <div className="bg-[#0d2b0d] min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block mb-3 sm:mb-4">
              <span className="bg-[#1a3a1a] px-2.5 sm:px-3 py-1 rounded-full text-green-300 text-[10px] sm:text-xs font-medium border border-green-500/40">
                Our Story
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              About <span className="text-green-300">MaviSolution</span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto px-2">
              We're on a mission to help businesses thrive in the digital age through reliable, secure, and scalable infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 sm:py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="bg-[#1a3a1a]/60 rounded-xl p-5 sm:p-6 border border-green-500/20">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-green-300">Who We Are</h2>
            <p className="text-gray-300 mb-3 text-xs sm:text-sm leading-relaxed">
              Founded in 2020, MaviSolution started with a simple idea: to make cutting-edge technology accessible to businesses of all sizes. 
              We saw a gap between traditional web development and modern Site Reliability Engineering (SRE), and we set out to bridge it.
            </p>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Today, we've grown into a trusted partner for over 150 businesses worldwide, from ambitious startups to established enterprises. 
              Our team of SRE experts, developers, and security specialists work together to deliver high-performance platforms that businesses can rely on.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="bg-gradient-to-br from-green-700 to-green-800 rounded-xl p-5 sm:p-6 text-center">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-green-200 text-[10px] sm:text-xs">Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-green-200 text-[10px] sm:text-xs">Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-green-200 text-[10px] sm:text-xs">Experts</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">99.99%</div>
                <div className="text-green-200 text-[10px] sm:text-xs">Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-8 sm:py-10 px-4 bg-[#0a2a0a]/30">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-lg sm:text-xl font-bold mb-3 text-white">Our Mission</h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed px-2">
              To empower businesses with reliable, secure, and scalable digital infrastructure that drives growth and innovation. 
              We believe that technology should work for you, not against you, and we're committed to making enterprise-grade 
              reliability accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 sm:py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Our Core Values</h2>
            <p className="text-gray-400 text-xs sm:text-sm">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((val, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center p-4 sm:p-5 bg-[#1a3a1a]/60 rounded-xl border border-green-500/20 hover:border-green-500/40 transition">
                <div className="flex justify-center mb-3 text-2xl sm:text-3xl text-green-400">{val.icon}</div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2">{val.title}</h3>
                <p className="text-gray-400 text-[11px] sm:text-xs">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-8 sm:py-10 px-4 bg-[#0a2a0a]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Our Journey</h2>
            <p className="text-gray-400 text-xs sm:text-sm">Milestones that define our growth</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            {milestones.map((milestone, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="text-center p-2 sm:p-3 bg-[#1a3a1a]/60 rounded-lg border border-green-500/20">
                <div className="text-green-400 font-bold text-base sm:text-lg">{milestone.year}</div>
                <div className="text-white text-[10px] sm:text-xs font-semibold mt-1">{milestone.title}</div>
                <div className="text-gray-500 text-[8px] sm:text-[10px] mt-1">{milestone.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;