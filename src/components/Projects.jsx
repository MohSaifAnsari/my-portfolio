import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaDatabase,
  FaClipboardList,
  FaLock,
  FaUtensils
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    name: "ToDo List",
    logo: <FaClipboardList className="text-yellow-400 text-6xl" />,
    logoMotion: { rotate: [0, 10, -10, 0] },
    description: "Organize your tasks efficiently with this simple ToDo app.",
    detailed:
      "This ToDo List app allows users to add, edit, and delete tasks with an intuitive UI. Built with React for fast rendering and Tailwind CSS for responsive design.",
    tech: [
      { name: "React", icon: <FaReact color="#61DBFB" />, motion: { rotate: 360 } },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" />, motion: { y: [0, -6, 0] } },
    ],
  },
  {
    name: "Password Manager",
    logo: <FaLock className="text-red-400 text-6xl" />,
    logoMotion: { scale: [1, 1.1, 1] },
    description: "Securely manage your passwords with encryption and user auth.",
    detailed:
      "A full-stack Password Manager with React frontend, Express.js backend, and MongoDB for secure data. Features user authentication and encrypted storage.",
    tech: [
      { name: "React", icon: <FaReact color="#61DBFB" />, motion: { rotate: 360 } },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" />, motion: { y: [0, -6, 0] } },
      { name: "Express.js", icon: <SiExpress color="#fff" />, motion: { scale: [1, 1.2, 1] } },
      { name: "MongoDB", icon: <SiMongodb color="#4DB33D" />, motion: { scale: [1, 1.2, 1] } },
    ],
  },
  {
    name: "E-Commerce Restaurant Website",
    logo: <FaUtensils className="text-green-400 text-6xl" />,
    logoMotion: { rotate: [0, 15, -15, 0] },
    description: "Online restaurant platform with product management and auth.",
    detailed:
      "Built with React, Tailwind CSS, Express.js, and MongoDB. Supports product browsing, cart management, and secure user authentication.",
    tech: [
      { name: "React", icon: <FaReact color="#61DBFB" />, motion: { rotate: 360 } },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" />, motion: { y: [0, -6, 0] } },
      { name: "Express.js", icon: <SiExpress color="#fff" />, motion: { scale: [1, 1.2, 1] } },
      { name: "MongoDB", icon: <SiMongodb color="#4DB33D" />, motion: { scale: [1, 1.2, 1] } },
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-900 text-white rounded-none shadow-2xl">
  {/* Heading */}
  <motion.h2
    className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent relative"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Skills & Expertise
    <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-20 sm:w-24 h-1 bg-blue-500 rounded-full"></span>
  </motion.h2>

  {/* Project Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
    {projects.map((proj, idx) => (
      <motion.div
        key={proj.name}
        className="bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-blue-500/50 hover:scale-105 transition-transform"
        onClick={() => setSelected(proj)}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.3, duration: 0.8 }}
      >
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-4"
          animate={proj.logoMotion}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {proj.logo}
        </motion.div>

        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-center">{proj.name}</h3>
        <p className="text-gray-300 mb-6 text-center text-sm sm:text-base">{proj.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-4 justify-center">
          {proj.tech.map((t, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              animate={t.motion}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-3xl sm:text-4xl">{t.icon}</div>
              <span className="text-xs sm:text-sm text-gray-400">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>
  );
}
