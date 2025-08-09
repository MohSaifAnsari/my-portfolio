// ContactSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
      id="contact"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-4"
      >
        📬 Let’s Connect
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-gray-300 mb-12 text-lg"
      >
        Got a question, a project idea, or just want to say hi? 😊  
        I’m always happy to chat!  
        🚀 Even if it’s just to share your favorite coffee recipe ☕
      </motion.p>

      {/* Contact Info Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email */}
        <motion.a
          href="mailto:saifansari50231@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center border-t-4 border-blue-500 cursor-pointer"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaEnvelope className="text-blue-400 text-4xl mx-auto mb-4" />
          </motion.div>
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-gray-400 mt-2">📧 saifansari50231@gmail.com</p>
        </motion.a>

        {/* Phone */}
        <motion.a
          href="tel:+918922886076"
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center border-t-4 border-green-500 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaPhone className="text-green-400 text-4xl mx-auto mb-4" />
          </motion.div>
          <h3 className="text-xl font-semibold">Phone</h3>
          <p className="text-gray-400 mt-2">📞 +91 8922886076</p>
        </motion.a>

        {/* Location */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center border-t-4 border-pink-500"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <FaMapMarkerAlt className="text-pink-400 text-4xl mx-auto mb-4" />
          </motion.div>
          <h3 className="text-xl font-semibold">Location</h3>
          <p className="text-gray-400 mt-2">📍 Jaunpur, Uttar Pradesh, India</p>
        </motion.div>
      </div>

      {/* Fun Closing Line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center text-gray-400 mt-12 text-lg italic"
      >
        💡 “Don’t be shy — great conversations start with a simple hello!”
      </motion.p>
    </section>
  );
}
