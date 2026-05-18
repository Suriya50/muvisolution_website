import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaShieldAlt } from "react-icons/fa";
import axiosInstance from "../config/axios";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setIsAuthenticated(true);
        toast.success("Welcome back!");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid credentials");
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
            <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
            <p className="text-gray-400 text-sm mt-1">Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1 text-sm">Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                required 
                className="w-full px-3 py-2 bg-[#0d2b0d] border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 text-white text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1 text-sm">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  value={formData.password} 
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                  required 
                  className="w-full px-3 py-2 bg-[#0d2b0d] border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 text-white text-sm pr-10"
                  placeholder="••••••••"
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
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="text-center text-gray-400 mt-4 text-sm">
            Don't have an account? <Link to="/register" className="text-green-400 hover:text-green-300">Create one</Link>
          </p>
          <p className="text-center text-gray-500 text-[11px] mt-3">
            Secure login with 256-bit encryption
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;