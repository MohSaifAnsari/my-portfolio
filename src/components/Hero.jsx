import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaGithub, FaLinkedin, FaInstagram, FaFacebook,
  FaDownload, FaArrowRight,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/MohSaifAnsari", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/saif-ansari-27s/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com/saifansari_27s", label: "Instagram" },
  { icon: FaFacebook, href: "https://www.facebook.com/saif.ansari.264259", label: "Facebook" },
];

const stats = [
  { value: 4, suffix: "+", label: "Projects Built" },
  { value: 5, suffix: "+", label: "Tech Stacks" },
  { value: 1, suffix: "+", label: "Years Exp." },
  { value: 100, suffix: "%", label: "Commitment" },
];

function StatItem({ value, suffix, label }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-white">
        {inView ? <CountUp end={value} duration={2} /> : 0}
        <span className="text-indigo-400">{suffix}</span>
      </div>
      <div className="text-xs text-gray-500 mt-0.5">{label}</div>
    </div>
  );
}

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const resumePath = `${import.meta.env.BASE_URL}images/M.saif-cv.pdf`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 bg-gradient-to-br from-indigo-950 via-[#0f172a] to-purple-950 text-white overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

        {/* ╔══════════════╗ */}
        {/* ║  LEFT SIDE   ║ */}
        {/* ╚══════════════╝ */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          {/* Availability Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm bg-green-500/15 text-green-400 rounded-full border border-green-500/30 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Opportunities
          </motion.div> */}

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4"
          >
            Hi 👋, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Saif Ansari
            </span>
          </motion.h1>

          {/* Type Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-300 mb-5 min-h-[2rem]"
          >
            <TypeAnimation
              sequence={[
                "💻 Full Stack Developer", 2000,
                "🚀 MERN Stack Engineer", 2000,
                "⚡ Problem Solver", 2000,
                "🎨 UI/UX Enthusiast", 2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-indigo-400 font-medium"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-sm sm:text-base"
          >
            I craft scalable and high-performance web applications using modern
            technologies. Passionate about clean UI, smart architecture,
            and solving real-world problems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all font-semibold text-sm"
            >
              <FaDownload />
              View Resume
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:bg-white/5 hover:border-white/30 transition-all text-sm font-medium"
            >
              View Projects <FaArrowRight />
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 justify-center lg:justify-start"
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-indigo-600/40 hover:border-indigo-500/40 transition-all"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ╔══════════════╗ */}
        {/* ║  RIGHT SIDE  ║ */}
        {/* ╚══════════════╝ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center relative order-1 lg:order-2"
        >
          {/* Rotating ring */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-2 border-dashed border-indigo-500/20 animate-spin-slow" />

          {/* Floating profile image */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {!imgError ? (
              <img
                src={`${import.meta.env.BASE_URL}images/saif 1.jpg`}
                alt="Saif Ansari"
                onError={() => setImgError(true)}
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-indigo-500/60 shadow-2xl shadow-indigo-800/40"
              />
            ) : (
              /* Fallback avatar */
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center border-4 border-indigo-500/60 shadow-2xl shadow-indigo-800/40">
                <span className="text-7xl font-bold text-white/80">S</span>
              </div>
            )}

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 bottom-6 bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap"
            >
              💻 Software Engineer
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
              className="absolute -left-4 top-6 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-xl text-xs font-semibold border border-white/15 shadow-lg"
            >
              🎓 BCA Graduate
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-2xl w-full mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card rounded-2xl py-4 px-3 border border-white/8 text-center"
          >
            <StatItem {...stat} />
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-transparent rounded-full"
        />
      </motion.div>

      {/* Resume Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/85 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200">
              <span className="text-gray-700 font-medium text-sm">📄 Resume — Saif Ansari</span>
              <div className="flex items-center gap-2">
                <a
                  href={resumePath}
                  download
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition"
                >
                  <FaDownload size={10} /> Download
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-200 text-gray-500 transition text-sm"
                >
                  ✕
                </button>
              </div>
            </div>
            <iframe
              src={resumePath}
              title="Resume"
              className="w-full flex-1"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}