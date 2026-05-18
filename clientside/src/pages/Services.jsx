import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud, FaPaintBrush, FaChartLine, FaShieldAlt, FaRocket, FaDatabase, FaRobot, FaHeadset, FaServer, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    { icon: <FaCode />, title: "Web Development", desc: "Custom websites and web applications built with modern frameworks like React, Next.js, and Node.js.", features: ["Responsive Design", "SEO Optimized", "Fast Loading"] },
    { icon: <FaMobileAlt />, title: "Mobile Development", desc: "Cross-platform mobile apps for iOS and Android using React Native and Flutter.", features: ["Native Performance", "Offline Support", "Push Notifications"] },
    { icon: <FaCloud />, title: "Cloud Solutions", desc: "Scalable cloud infrastructure on AWS, Azure, and Google Cloud with auto-scaling capabilities.", features: ["99.99% Uptime", "Auto Scaling", "Global CDN"] },
    { icon: <FaShieldAlt />, title: "Security Services", desc: "Enterprise-grade security with zero-trust architecture, encryption, and regular audits.", features: ["DDoS Protection", "SSL/TLS", "Security Audits"] },
    { icon: <FaRobot />, title: "AI & Automation", desc: "Intelligent automation and AI-powered solutions to streamline your business operations.", features: ["Chatbots", "Predictive Analytics", "Process Automation"] },
    { icon: <FaDatabase />, title: "Database Management", desc: "High-performance database solutions with replication, backup, and optimization.", features: ["Automated Backups", "Performance Tuning", "24/7 Monitoring"] },
    { icon: <FaServer />, title: "DevOps & SRE", desc: "Site Reliability Engineering practices for continuous deployment and infrastructure monitoring.", features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting"] },
    { icon: <FaHeadset />, title: "24/7 Technical Support", desc: "Round-the-clock support from our expert team to ensure your systems run smoothly.", features: ["Instant Response", "Expert Team", "SLA Guaranteed"] },
  ];

  const packages = [
    { name: "Startup", price: "Custom", features: ["Basic SRE Setup", "24/7 Monitoring", "Security Essentials", "Email Support"], popular: false },
    { name: "Business", price: "Custom", features: ["Advanced SRE", "Auto-Scaling", "Priority Support", "Security Audits"], popular: true },
    { name: "Enterprise", price: "Custom", features: ["Dedicated SRE Team", "99.99% SLA", "24/7 Phone Support", "Custom Solutions"], popular: false },
  ];

  return (
    <div className="bg-[#0d2b0d] min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block mb-4">
              <span className="bg-[#1a3a1a] px-3 py-1 rounded-full text-green-300 text-xs font-medium border border-green-500/40">
                What We Offer
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">Our <span className="text-green-300">Services</span></h1>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto">
              Comprehensive solutions to help your business grow, from development to infrastructure management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="bg-[#1a3a1a]/60 rounded-xl p-5 border border-green-500/20 hover:border-green-500/40 hover:bg-[#1a3a1a]/80 transition-all duration-300">
                <div className="text-3xl text-green-400 mb-3">{service.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-xs mb-3 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.features.map((feature, fIdx) => (
                    <span key={fIdx} className="text-[10px] bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">{feature}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 px-4 bg-[#0a2a0a]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-white">Why Choose Our Services?</h2>
            <p className="text-gray-400 text-sm">We deliver excellence with every project</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-5 bg-[#1a3a1a]/60 rounded-xl border border-green-500/20">
              <FaRocket className="text-2xl text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold text-sm mb-1">Fast Delivery</h3>
              <p className="text-gray-400 text-xs">Agile methodology ensures quick turnaround without compromising quality</p>
            </div>
            <div className="text-center p-5 bg-[#1a3a1a]/60 rounded-xl border border-green-500/20">
              <FaShieldAlt className="text-2xl text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold text-sm mb-1">Secure by Default</h3>
              <p className="text-gray-400 text-xs">Security is embedded in every layer of our solutions</p>
            </div>
            <div className="text-center p-5 bg-[#1a3a1a]/60 rounded-xl border border-green-500/20">
              <FaHeadset className="text-2xl text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold text-sm mb-1">Ongoing Support</h3>
              <p className="text-gray-400 text-xs">We're with you every step of the way, even after launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-white">Flexible Engagement Models</h2>
            <p className="text-gray-400 text-sm">Choose what works best for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className={`bg-[#1a3a1a]/60 rounded-xl p-6 text-center border ${pkg.popular ? 'border-green-400 shadow-lg' : 'border-green-500/20'}`}>
                {pkg.popular && <div className="text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full inline-block mb-2">Most Popular</div>}
                <h3 className="text-lg font-bold text-white mb-1">{pkg.name}</h3>
                <div className="text-green-400 text-sm font-semibold mb-3">{pkg.price}</div>
                <ul className="text-left space-y-2 mb-4">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-gray-300 text-xs flex items-center gap-2">
                      <span className="text-green-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block w-full bg-green-600 text-white text-xs font-medium py-2 rounded-lg hover:bg-green-500 transition">
                  Contact Sales
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-[#1a3a1a] rounded-xl p-6 text-center border border-green-500/30">
            <h2 className="text-xl font-bold mb-2 text-white">Ready to Start Your Project?</h2>
            <p className="text-gray-400 text-sm mb-4">Let's discuss how we can help you achieve your goals</p>
            <Link to="/register" className="inline-block bg-green-600 px-6 py-2 rounded-full font-medium text-sm hover:bg-green-500 transition text-white">
              Get in Touch →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;