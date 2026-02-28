import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExpand } from "react-icons/fa";

const achievements = [
  {
    title: "Best Talent Award",
    subtitle: "Regional Educational Welfare Society",
    emoji: "🏆",
    color: "from-yellow-500/20 to-amber-500/20",
    border: "border-yellow-500/25",
    image: `${import.meta.env.BASE_URL}images/best talent.jpg`,
  },
  {
    title: "Best Performance – Speech",
    subtitle: "Speech Competition Award",
    emoji: "🎤",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/25",
    image: `${import.meta.env.BASE_URL}images/speech.jpg`,
  },
  {
    title: "Web Dev Internship",
    subtitle: "Summer Program Certificate",
    emoji: "💻",
    color: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/25",
    image: `${import.meta.env.BASE_URL}images/web development.jpg`,
  },
  {
    title: "SPEL Training Program",
    subtitle: "Student Police Experiential Learning",
    emoji: "🛡️",
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/25",
    image: `${import.meta.env.BASE_URL}images/spel.jpg`,
  },
  {
    title: "Mr. Smart",
    subtitle: "College Recognition Award",
    emoji: "⭐",
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/25",
    image: `${import.meta.env.BASE_URL}images/mr samrt.jpg`,
  },
  {
    title: "Web Dev Club Captain",
    subtitle: "College Club Leadership",
    emoji: "👑",
    color: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/25",
    image: `${import.meta.env.BASE_URL}images/captain.jpg`,
  },
  {
    title: "Java Programming Internship",
    subtitle: "Professional Training Certificate",
    emoji: "☕",
    color: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/25",
    image: `${import.meta.env.BASE_URL}images/java.jpg`,
  },
];

export default function Achievements() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-yellow-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag mb-4 inline-block">✦ Recognition</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Awards & <span className="text-gradient-gold">Certificates</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of recognitions, internships, and accomplishments I'm proud of.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.4 }}
              whileHover={{ y: -6 }}
              onClick={() => setLightbox(item)}
              className="group cursor-pointer"
            >
              {/* Animated gradient border wrapper */}
              <div className="relative p-[1px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-borderGlow opacity-60 rounded-3xl" />
                <div className={`relative glass-card rounded-3xl p-5 border ${item.border} bg-gradient-to-br ${item.color} h-full flex flex-col items-center text-center gap-3 group-hover:shadow-xl transition-all duration-300`}>
                  {/* Emoji icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-4xl border border-white/10 group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </div>

                  {/* Certificate image */}
                  <div className="w-full h-24 rounded-xl overflow-hidden relative border border-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-1 right-1 p-1 rounded-md bg-black/40 text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaExpand />
                    </div>
                  </div>

                  <h3 className="text-sm font-display font-bold text-white leading-snug">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative glass-card rounded-3xl overflow-hidden border border-white/10 max-w-lg w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-red-500/50 text-white border border-white/10 transition"
              >
                <FaTimes />
              </button>
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full max-h-[60vh] object-contain bg-white/5"
              />
              <div className="p-6 text-center">
                <span className="text-3xl">{lightbox.emoji}</span>
                <h3 className="text-xl font-display font-bold mt-2 mb-1">{lightbox.title}</h3>
                <p className="text-gray-400 text-sm">{lightbox.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
