import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaSignOutAlt, FaEdit } from "react-icons/fa";
import axiosInstance from "../config/axios";

const Profile = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsed = JSON.parse(userData);
      setUser(parsed);
      setFormData({ name: parsed.name, email: parsed.email });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    toast.success("Logged out");
    navigate("/");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // FIX: Correct endpoint and use axiosInstance
      const res = await axiosInstance.put("/auth/profile", formData);
      if (res.data.success) {
        const updated = { ...user, ...formData };
        localStorage.setItem("user", JSON.stringify(updated));
        setUser(updated);
        setIsEditing(false);
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="animate-spin h-16 w-16 border-t-2 border-cyan-400 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-cyan-500/40 shadow-2xl"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
              <span className="text-5xl font-bold text-white">{user.name.charAt(0).toUpperCase()}</span>
            </div>
            <h1 className="text-3xl font-bold text-white">{user.name}</h1>
            <p className="text-cyan-400 font-mono text-sm">
              MEMBER SINCE {user.createdAt ? new Date(user.createdAt).getFullYear() : '2024'}
            </p>
          </div>
          
          <div className="p-8">
            {isEditing ? (
              <form onSubmit={handleUpdate} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-mono">FULL NAME</label>
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-mono">EMAIL</label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400" 
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <button type="submit" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                    Save Changes
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setIsEditing(false)} 
                    className="flex-1 bg-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-6 rounded-xl flex items-center gap-4 hover:bg-slate-800/70 transition">
                    <FaUser className="text-cyan-400 text-2xl" />
                    <div>
                      <p className="text-gray-400 text-sm font-mono">FULL NAME</p>
                      <h3 className="text-white text-xl">{user.name}</h3>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl flex items-center gap-4 hover:bg-slate-800/70 transition">
                    <FaEnvelope className="text-cyan-400 text-2xl" />
                    <div>
                      <p className="text-gray-400 text-sm font-mono">EMAIL</p>
                      <h3 className="text-white text-xl">{user.email}</h3>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <button 
                    onClick={() => setIsEditing(true)} 
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold hover:shadow-lg transition"
                  >
                    <FaEdit /> Edit Profile
                  </button>
                  <button 
                    onClick={handleLogout} 
                    className="flex-1 bg-red-500/20 text-red-400 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold border border-red-500/30 hover:bg-red-500/30 transition"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;