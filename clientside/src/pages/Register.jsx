import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosInstance from "../config/axios";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // FIX: Correct endpoint path
      const res = await axiosInstance.post("/auth/register", formData);

      if (res.data.success) {
        toast.success("Registered successfully! Please login.");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-slate-950">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md">
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/40 shadow-2xl">
          <h2 className="text-4xl font-bold mb-2 text-center font-mono text-cyan-400">&gt; REGISTER</h2>
          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div>
              <label className="block text-gray-300 mb-2 font-mono">FULL NAME</label>
              <input 
                type="text" 
                name="name"
                placeholder="John Doe"
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white font-mono" 
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-mono">EMAIL</label>
              <input 
                type="email" 
                name="email"
                placeholder="john@example.com"
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white font-mono" 
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-mono">PASSWORD</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  placeholder="••••••"
                  value={formData.password} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button 
              type="submit" 
              disabled={loading} 
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50"
            >
              {loading ? "Creating..." : "Sign Up"}
            </button>
          </form>
          <p className="text-center text-gray-400 mt-6">
            Have an account? <Link to="/login" className="text-cyan-400">Login</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;