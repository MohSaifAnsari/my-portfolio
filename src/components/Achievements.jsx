// Achievements.jsx
import React from "react";
import { motion } from "framer-motion";

const achievements = [
  
  { title: "Best Talent Award by Regional Educational welfare Society", image: `${import.meta.env.BASE_URL}images/best talent.jpg` },
  { title: "Web Development Summer Internship", image: `${import.meta.env.BASE_URL}images/web development.jpg` },
  { title: "SPEL(Student police Experential Learning) Training Program", image: `${import.meta.env.BASE_URL}images/spel.jpg` },
  { title: "Mr. Smart Tag from college", image: `${import.meta.env.BASE_URL}images/mr samrt.jpg` },
  { title: "Web Development Club Captain ", image: `${import.meta.env.BASE_URL}images/captain.jpg` },
  { title: "Java Programming Internship Program ", image: `${import.meta.env.BASE_URL}images/java.jpg` },
];



export default function Achievements() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-900 to-black text-white"
      id="achievements"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Stylish Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center mb-14 relative"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Awards & Certificate
          </span>
          <span className="absolute left-1/2 -bottom-3 w-32 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full transform -translate-x-1/2 animate-pulse"></span>
        </motion.h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-[2px] rounded-2xl group w-full h-[280px]"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-borderGlow"></div>

              {/* Card Content */}
              <div className="relative bg-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center h-full shadow-lg group-hover:shadow-yellow-400/40 transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain mb-6 drop-shadow-lg"
                />
                <h3 className="text-lg font-bold text-center bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-md transition-all duration-300 group-hover:scale-105 group-hover:brightness-125">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Animation for Border Glow */}
      <style>
        {`
          @keyframes borderGlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-borderGlow {
            background-size: 300% 300%;
            animation: borderGlow 4s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
