import React from "react";
import { motion } from "framer-motion";
import { FaCuttlefish, FaReact, FaUsers, FaChartLine } from "react-icons/fa";

const skillsData = [
  {
    category: "Programming Languages",
    icon: <FaCuttlefish className="text-pink-500" />,
    skills: [
      { name: "C", emoji: "🔵" },
      { name: "C++", emoji: "⚙️" },
      { name: "Java", emoji: "☕" },
    ],
  },
  {
    category: "Web Development",
    icon: <FaReact className="text-blue-500" />,
    skills: [
      { name: "HTML5", emoji: "📄" },
      { name: "CSS", emoji: "🎨" },
      { name: "Tailwind CSS", emoji: "🌬️" },
      { name: "JavaScript", emoji: "✨" },
      { name: "React-JS", emoji: "⚛️" },
      { name: "Express-JS", emoji: "🚂" },
      { name: "Next-JS", emoji: "➡️" },
      { name: "MongoDB", emoji: "🍃" },
    ],
  },
  {
    category: "Soft Skills",
    icon: <FaUsers className="text-purple-500" />,
    skills: [
      { name: "Leadership", emoji: "👑" },
      { name: "Public Speaking", emoji: "🎤" },
      { name: "Time Management", emoji: "⏰" },
      { name: "Problem-solving", emoji: "🧩" },
      { name: "Teamwork", emoji: "🤝" },
      { name: "Critical Thinking", emoji: "🧠" },
    ],
  },
  {
    category: "Coursework",
    icon: <FaChartLine className="text-orange-500" />,
    skills: [
      { name: "Object Oriented Programming", emoji: "📦" },
      { name: "Data Structures & Algorithms", emoji: "🔢" },
      { name: "Networking", emoji: "🌐" },
      { name: "Operating System", emoji: "🖥️" },
      { name: "DBMS", emoji: "💾" },
    ],
  },
];

export default function Expertise() {
  return (
    <section className="w-full bg-gray-900 text-white py-8">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillsData.map(({ category, icon, skills }, i) => (
          <motion.div
            key={category}
            className="bg-gray-800 rounded-lg p-5 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.15, duration: 0.5 }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2 border-b border-pink-500 pb-1">
              <span className="text-2xl">{icon}</span> {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map(({ name, emoji }, idx) => (
                <motion.div
                  key={name}
                  className="bg-gray-700 rounded-full px-3 py-1 text-xs md:text-sm flex items-center gap-2 cursor-default hover:bg-pink-600 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.2 + idx * 0.08,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{emoji}</span> {name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
