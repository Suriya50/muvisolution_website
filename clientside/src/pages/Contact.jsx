import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaGithub, FaPaperPlane, FaUser, FaComment, FaShieldAlt, FaHeadset, FaRocket } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call - Replace with your actual endpoint
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 1500);
  };

  const contactInfo = [
    { icon: <FaEnvelope />, title: "Email Us", details: "hello@mavisolution.com", sub: "support@mavisolution.com", action: "mailto:hello@mavisolution.com" },
    { icon: <FaPhone />, title: "Call Us", details: "+1 (555) 123-4567", sub: "Mon-Fri, 9am - 6pm PST", action: "tel:+15551234567" },
    { icon: <FaMapMarkerAlt />, title: "Visit Us", details: "123 Tech Valley", sub: "San Francisco, CA 94103", action: "#" },
    { icon: <FaClock />, title: "Support Hours", details: "24/7 Emergency Support", sub: "SRE Team Always Available", action: "#" },
  ];

  const faqs = [
    { question: "What is your typical response time?", answer: "We respond to all inquiries within 2-4 hours during business days. Emergency support is available 24/7 for existing clients." },
    { question: "Do you offer customized solutions?", answer: "Yes, we provide fully customized solutions tailored to your specific business needs and requirements." },
    { question: "What is your pricing model?", answer: "We offer flexible pricing based on project scope. Contact us for a free consultation and quote." },
    { question: "Do you provide ongoing support?", answer: "Absolutely! We offer various support packages including 24/7 monitoring, maintenance, and dedicated SRE support." },
  ];

  return (
    <div className="bg-[#0d2b0d] min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block mb-3 sm:mb-4">
              <span className="bg-[#1a3a1a] px-2.5 sm:px-3 py-1 rounded-full text-green-300 text-[10px] sm:text-xs font-medium border border-green-500/40">
                Get In Touch
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">Contact <span className="text-green-300">Us</span></h1>
            <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto px-2">
              Have a question or ready to start your project? We'd love to hear from you. 
              Our team is here to help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-6 sm:py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#1a3a1a] rounded-xl p-4 sm:p-5 text-center border border-green-500/20 hover:border-green-500/40 hover:bg-[#1a3a1a]/80 transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl text-green-400 mb-3 flex justify-center group-hover:scale-110 transition">
                  {info.icon}
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1">{info.title}</h3>
                <p className="text-green-300 text-[11px] sm:text-xs font-medium break-words">{info.details}</p>
                <p className="text-gray-500 text-[9px] sm:text-[10px] mt-1">{info.sub}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-8 sm:py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-[#1a3a1a] rounded-xl p-5 sm:p-6 border border-green-500/30"
            >
              <div className="mb-4 sm:mb-5">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-1">Send us a Message</h2>
                <p className="text-gray-400 text-[11px] sm:text-xs">Fill out the form and we'll get back to you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-1 text-xs sm:text-sm font-medium">Your Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 sm:pl-9 pr-3 py-2 bg-[#0d2b0d] border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 text-white text-xs sm:text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1 text-xs sm:text-sm font-medium">Email Address</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 sm:pl-9 pr-3 py-2 bg-[#0d2b0d] border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 text-white text-xs sm:text-sm"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1 text-xs sm:text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#0d2b0d] border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 text-white text-xs sm:text-sm"
                    placeholder="Project Inquiry / Support Request"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1 text-xs sm:text-sm font-medium">Message</label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-3 text-gray-400 text-xs sm:text-sm" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full pl-8 sm:pl-9 pr-3 py-2 bg-[#0d2b0d] border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 text-white text-xs sm:text-sm resize-none"
                      placeholder="Tell us about your project or question..."
                    ></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 py-2 rounded-lg font-medium text-xs sm:text-sm hover:bg-green-500 transition text-white flex items-center justify-center gap-2"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane size={12} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Office Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-5 sm:space-y-6"
            >
              {/* Office Location */}
              <div className="bg-[#1a3a1a] rounded-xl p-5 sm:p-6 border border-green-500/30">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-3">Our Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-green-400 text-sm sm:text-base mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-xs sm:text-sm font-medium">MaviSolution Headquarters</p>
                      <p className="text-gray-400 text-[11px] sm:text-xs">123 Tech Valley, Suite 100</p>
                      <p className="text-gray-400 text-[11px] sm:text-xs">San Francisco, CA 94103</p>
                      <p className="text-gray-400 text-[11px] sm:text-xs">United States</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <FaPhone className="text-green-400 text-xs sm:text-sm" />
                    <p className="text-gray-300 text-xs sm:text-sm break-words">+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-green-400 text-xs sm:text-sm" />
                    <p className="text-gray-300 text-xs sm:text-sm break-all">hello@mavisolution.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#1a3a1a] rounded-xl p-5 sm:p-6 border border-green-500/30">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-3">Connect With Us</h3>
                <p className="text-gray-400 text-[11px] sm:text-xs mb-4">Follow us on social media for updates and insights</p>
                <div className="flex gap-4">
                  <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0d2b0d] flex items-center justify-center text-green-400 hover:bg-green-600 hover:text-white transition-all duration-300">
                    <FaLinkedin size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0d2b0d] flex items-center justify-center text-green-400 hover:bg-green-600 hover:text-white transition-all duration-300">
                    <FaTwitter size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0d2b0d] flex items-center justify-center text-green-400 hover:bg-green-600 hover:text-white transition-all duration-300">
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-xl p-5 text-center">
                <FaHeadset className="text-2xl sm:text-3xl text-white mx-auto mb-2" />
                <h4 className="text-white font-semibold text-xs sm:text-sm mb-1">24/7 Emergency Support</h4>
                <p className="text-green-100 text-[10px] sm:text-xs mb-2">For urgent issues, our SRE team is always available</p>
                <a href="tel:+15551234567" className="inline-block bg-white/20 px-3 sm:px-4 py-1.5 rounded-full text-white text-[10px] sm:text-xs font-medium hover:bg-white/30 transition">
                  Call Emergency Line
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-10 px-4 bg-[#0a2a0a]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-xs sm:text-sm">Find answers to common questions about our services</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#1a3a1a] rounded-xl p-4 sm:p-5 border border-green-500/20 hover:border-green-500/40 transition"
              >
                <h3 className="text-white font-semibold text-xs sm:text-sm mb-2">{faq.question}</h3>
                <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#1a3a1a] rounded-xl p-5 sm:p-6 text-center border border-green-500/30"
          >
            <FaRocket className="text-2xl sm:text-3xl text-green-400 mx-auto mb-3" />
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-white">Ready to Transform Your Business?</h2>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">Let's discuss how MaviSolution can help you achieve 99.99% uptime</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:hello@mavisolution.com" className="inline-block bg-green-600 px-4 sm:px-5 py-2 rounded-full font-medium text-xs sm:text-sm hover:bg-green-500 transition text-white">
                Email Us Directly
              </a>
              <a href="/services" className="inline-block border border-green-500/60 px-4 sm:px-5 py-2 rounded-full font-medium text-xs sm:text-sm hover:bg-green-500/20 transition text-white">
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Security Note */}
      <div className="text-center pb-5 sm:pb-6 px-4">
        <p className="text-gray-500 text-[9px] sm:text-[10px] flex items-center justify-center gap-2 flex-wrap">
          <FaShieldAlt className="text-green-500/50" />
          All communications are encrypted and secure. Your privacy is our priority.
        </p>
      </div>
    </div>
  );
};

export default Contact;