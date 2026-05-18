import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaSignOutAlt, FaEdit, FaShieldAlt, FaCalendarAlt, FaSave, FaTimes } from "react-icons/fa";
import axiosInstance from "../config/axios";

const Profile = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    
    if (userData && token) {
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
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication required. Please login again.");
        navigate("/login");
        return;
      }

      const response = await axiosInstance.put("/auth/update-profile", formData);
      
      if (response.data.success) {
        const updatedUser = {
          ...user,
          name: response.data.user.name,
          email: response.data.user.email,
          updatedAt: new Date().toISOString()
        };
        
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setIsEditing(false);
        toast.success("Profile updated successfully!");
      } else {
        toast.error(response.data.message || "Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      if (error.response) {
        toast.error(error.response.data?.message || "Update failed. Please try again.");
      } else if (error.request) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const refreshUserData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/auth/me");
      if (response.data.success) {
        const freshUser = response.data.user;
        localStorage.setItem("user", JSON.stringify(freshUser));
        setUser(freshUser);
        setFormData({ name: freshUser.name, email: freshUser.email });
        toast.success("User data refreshed");
      }
    } catch (error) {
      console.error("Refresh error:", error);
      toast.error("Failed to refresh user data");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d2b0d]">
        <div className="animate-spin h-6 w-6 sm:h-8 sm:w-8 border-2 border-green-400 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4 bg-[#0d2b0d]">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#1a3a1a] rounded-xl overflow-hidden border border-green-500/30 shadow-lg">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-800 p-5 sm:p-6 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3 shadow-md">
              <span className="text-2xl sm:text-3xl font-bold text-white">{user.name.charAt(0).toUpperCase()}</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-white">{user.name}</h1>
            <p className="text-green-200 text-[10px] sm:text-xs mt-1 flex items-center justify-center gap-1">
              <FaCalendarAlt size={10} /> Member since {user.createdAt ? new Date(user.createdAt).getFullYear() : '2024'}
            </p>
            <div className="inline-flex items-center gap-1 mt-2 bg-green-600/30 px-2 py-0.5 rounded-full">
              <FaShieldAlt size={10} className="text-green-200" />
              <span className="text-[8px] sm:text-[10px] text-green-100">Verified Account</span>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-5 sm:p-6">
            {isEditing ? (
              <form onSubmit={handleUpdate} className="space-y-5">
                <div>
                  <label className="block text-gray-300 mb-1 text-xs sm:text-sm font-medium">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    className="w-full px-3 py-2 bg-[#0d2b0d] border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 text-white text-xs sm:text-sm" 
                    required 
                    disabled={loading} 
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1 text-xs sm:text-sm font-medium">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    className="w-full px-3 py-2 bg-[#0d2b0d] border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 text-white text-xs sm:text-sm" 
                    required 
                    disabled={loading} 
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="flex-1 bg-green-600 py-2 rounded-lg font-medium text-xs sm:text-sm hover:bg-green-500 transition text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin h-3 w-3 border-2 border-white rounded-full border-t-transparent"></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <FaSave size={12} /> Save Changes
                      </>
                    )}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({ name: user.name, email: user.email });
                    }} 
                    disabled={loading} 
                    className="flex-1 bg-[#0d2b0d] py-2 rounded-lg font-medium text-xs sm:text-sm hover:bg-[#1a3a1a] transition text-gray-300 border border-green-500/30 flex items-center justify-center gap-2"
                  >
                    <FaTimes size={12} /> Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                {/* User Info Cards */}
                <div className="space-y-3">
                  <div className="bg-[#0d2b0d] p-3 sm:p-4 rounded-lg flex items-center gap-3 border border-green-500/20 hover:border-green-500/40 transition">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600/20 flex items-center justify-center">
                      <FaUser className="text-green-400 text-sm sm:text-base" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-[9px] sm:text-[11px] font-medium">Full Name</p>
                      <h3 className="text-white text-xs sm:text-sm font-medium break-words">{user.name}</h3>
                    </div>
                  </div>
                  <div className="bg-[#0d2b0d] p-3 sm:p-4 rounded-lg flex items-center gap-3 border border-green-500/20 hover:border-green-500/40 transition">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600/20 flex items-center justify-center">
                      <FaEnvelope className="text-green-400 text-sm sm:text-base" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-[9px] sm:text-[11px] font-medium">Email Address</p>
                      <h3 className="text-white text-xs sm:text-sm font-medium break-all">{user.email}</h3>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button 
                    onClick={() => setIsEditing(true)} 
                    className="flex-1 bg-green-600 py-2 rounded-lg flex items-center justify-center gap-2 font-medium text-xs sm:text-sm hover:bg-green-500 transition text-white"
                  >
                    <FaEdit size={12} /> Edit Profile
                  </button>
                  <button 
                    onClick={refreshUserData} 
                    disabled={loading}
                    className="flex-1 bg-blue-600/20 text-blue-300 py-2 rounded-lg flex items-center justify-center gap-2 font-medium text-xs sm:text-sm border border-blue-500/30 hover:bg-blue-600 hover:text-white transition disabled:opacity-50"
                  >
                    <FaShieldAlt size={12} /> {loading ? "Refreshing..." : "Refresh Data"}
                  </button>
                  <button 
                    onClick={handleLogout} 
                    className="flex-1 bg-red-500/20 text-red-300 py-2 rounded-lg flex items-center justify-center gap-2 font-medium text-xs sm:text-sm border border-red-500/30 hover:bg-red-500 hover:text-white transition"
                  >
                    <FaSignOutAlt size={12} /> Logout
                  </button>
                </div>

                {/* Account Security Info */}
                <div className="mt-6 pt-4 border-t border-green-500/20 text-center">
                  <p className="text-gray-500 text-[8px] sm:text-[10px] flex items-center justify-center gap-1 flex-wrap">
                    <FaShieldAlt size={10} /> Account secured with 256-bit encryption
                  </p>
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