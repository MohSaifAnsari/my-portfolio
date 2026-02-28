import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGithub, FaTimes,
  FaUtensils, FaComments, FaFilm
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiSocketdotio } from "react-icons/si";

const filters = ["All", "Full Stack", "Frontend", "Real-time"];

const projects = [
  {
    name: "E-Commerce Food App",
    category: "Full Stack",
    emoji: "🍕",
    gradient: "from-emerald-900/60 via-green-800/40 to-teal-900/60",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    glowColor: "shadow-emerald-500/10",
    description: "Full-stack food ordering platform with multi-role authentication, cart system, and admin dashboard.",
    detailed: "A complete MERN stack food ordering application featuring JWT authentication, role-based access (User, Restaurant Admin, App Admin), cart system, order placement, and a full admin panel for managing restaurants and food items.",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
    links: { code: "https://github.com/MohSaifAnsari" },
    featured: true,
  },
  {
    name: "Real-Time Chat App",
    category: "Real-time",
    emoji: "💬",
    gradient: "from-blue-900/60 via-indigo-800/40 to-blue-900/60",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    glowColor: "shadow-blue-500/10",
    description: "WhatsApp-style instant messaging with real-time typing indicators and online status.",
    detailed: "A real-time chat application powered by Socket.io featuring instant messaging, typing indicators, online/offline status, user search, JWT authentication, and message persistence with MongoDB.",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
    links: { code: "https://github.com/MohSaifAnsari" },
    featured: true,
  },
  {
    name: "ToDo Task Manager",
    category: "Frontend",
    emoji: "📝",
    gradient: "from-purple-900/60 via-violet-800/40 to-purple-900/60",
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/20",
    glowColor: "shadow-purple-500/10",
    description: "Interactive and animated task management application built with React.",
    detailed: "A responsive ToDo task manager built using React and Tailwind CSS. Features include task creation, editing, deletion, localStorage persistence, smooth animations using Framer Motion, and a clean modern UI design.",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: "Framer Motion", icon: <FaReact className="text-pink-400" /> },
    ],
    links: { code: "https://github.com/MohSaifAnsari" },
    featured: true,
  },
  {
    name: "Movie Trailer Viewer",
    category: "Frontend",
    emoji: "🎬",
    gradient: "from-rose-900/60 via-red-800/40 to-pink-900/60",
    accentColor: "text-rose-400",
    borderColor: "border-rose-500/20",
    glowColor: "shadow-rose-500/10",
    description: "Browse trending movies & watch trailers instantly with TMDB API integration.",
    detailed: "A movie trailer viewer built with React and Tailwind CSS that fetches trending movies from TMDB API. Features include search, category filters, trailer playback via YouTube embed, and a responsive card layout.",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
    ],
    links: { code: "https://github.com/MohSaifAnsari" },
    featured: false,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  : "glass-card text-gray-400 border border-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((proj) => (
            <div
              key={proj.name}
              onClick={() => setSelected(proj)}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 cursor-pointer hover:shadow-xl transition-all"
            >
              <div className={`h-48 bg-gradient-to-br ${proj.gradient} flex items-center justify-center`}>
                <span className="text-7xl">{proj.emoji}</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{proj.description}</p>

                <div className="flex gap-2">
                  <a
                    href={proj.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-300 border border-white/10 transition"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="glass-card w-full max-w-2xl rounded-3xl overflow-hidden border border-white/10"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`h-52 bg-gradient-to-br ${selected.gradient} flex items-center justify-center relative`}>
                  <span className="text-8xl">{selected.emoji}</span>
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
                  <p className="text-gray-300 mb-6">{selected.detailed}</p>

                  <a
                    href={selected.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-300 border border-white/10 transition"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}