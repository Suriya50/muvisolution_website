import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaShieldAlt } from "react-icons/fa";
import axiosInstance from "../config/axios";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/auth/register", formData);
      if (res.data.success) {
        toast.success("Account created successfully!");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-[#0d2b0d]">
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md">
        <div className="bg-[#1a3a1a] rounded-xl p-6 border border-green-500/30 shadow-lg">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaShieldAlt className="text-white text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-white">Create Account</h2>
            <p className="text-gray-400 text-sm mt-1">Join MaviSolution today</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1 text-sm">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe"
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full pl-9 pr-3 py-2 bg-[#0d2b0d] border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 text-white text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-1 text-sm">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input 
                  type="email" 
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full pl-9 pr-3 py-2 bg-[#0d2b0d] border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 text-white text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-1 text-sm">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-3 py-2 bg-[#0d2b0d] border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 text-white text-sm pr-10"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button 
              type="submit" 
              disabled={loading} 
              className="w-full bg-green-600 py-2 rounded-lg font-medium text-sm hover:bg-green-500 transition text-white disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>
          <p className="text-center text-gray-400 mt-4 text-sm">
            Already have an account? <Link to="/login" className="text-green-400 hover:text-green-300">Sign in</Link>
          </p>
          <p className="text-center text-gray-500 text-[11px] mt-3">
            By signing up, you agree to our Terms of Service
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;