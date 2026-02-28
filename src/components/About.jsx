import React from "react";
import { motion } from "framer-motion";
import {
  FaUser, FaCode, FaPalette, FaRocket, FaUsers,
  FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaBriefcase
} from "react-icons/fa";

const highlights = [
  { icon: FaCode, color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20", label: "Full Stack Developer" },
  { icon: FaPalette, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20", label: "UI/UX Enthusiast" },
  { icon: FaRocket, color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20", label: "Fast Learner" },
  { icon: FaUsers, color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20", label: "Team Player" },
  { icon: FaBriefcase, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20", label: "Problem Solver" },
  { icon: FaGraduationCap, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", label: "BCA Graduate" },
];

const skills = [
  { name: "React / Frontend", level: 88, color: "from-indigo-500 to-purple-500" },
  { name: "Node.js / Backend", level: 82, color: "from-purple-500 to-pink-500" },
  { name: "MongoDB / Database", level: 78, color: "from-pink-500 to-rose-500" },
  { name: "UI/UX Design", level: 75, color: "from-cyan-500 to-indigo-500" },
];

const personalInfo = [
  { icon: FaUser, label: "Name", value: "Moh Saif Ansari" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Jaunpur, Uttar Pradesh, India" },
  { icon: FaGraduationCap, label: "Degree", value: "BCA – Bachelor of Computer Application" },
  { icon: FaEnvelope, label: "Email", value: "saifansari50231@gmail.com" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag mb-4 inline-block">✦ About Me</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Who <span className="text-gradient">Am I?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A passionate developer who loves building meaningful digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Personal Info + Highlights ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card rounded-3xl p-8 mb-8 border border-white/5">
              <h3 className="text-xl font-display font-bold mb-6 text-gradient">Personal Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/3 transition">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="text-indigo-400 text-xs" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-medium">{label}</p>
                      <p className="text-white text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-6">
              I'm a <span className="text-indigo-300 font-semibold">Full Stack Developer</span> with
              hands-on experience building real-world applications using the MERN stack. I'm passionate about
              creating clean, performant, and accessible web experiences that make a real-world impact.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              When I'm not coding, I'm exploring new technologies, contributing to open-source, or mentoring
              peers. I believe great software starts with empathy for the user and clarity in the code.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-glow-sm"
            >
              Let's Work Together →
            </motion.a>
          </motion.div>

          {/* ── Right: Skill Bars + Highlights ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Skill Bars */}
            <div className="glass-card rounded-3xl p-8 mb-8 border border-white/5">
              <h3 className="text-xl font-display font-bold mb-6 text-gradient">Core Skills</h3>
              <div className="flex flex-col gap-5">
                {skills.map(({ name, level, color }, i) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{name}</span>
                      <span className="text-sm font-bold text-indigo-400">{level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map(({ icon: Icon, color, bg, label }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border ${bg} transition-all text-center cursor-default`}
                >
                  <Icon className={`text-xl ${color}`} />
                  <span className="text-xs font-medium text-gray-300">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
