import React from "react";
import { motion } from "framer-motion";
import {
  FaCuttlefish, FaReact, FaUsers, FaChartLine,
  FaNodeJs, FaPython, FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiJavascript,
  SiCplusplus, SiHtml5, SiCss3, SiGithub, SiSocketdotio,
  SiFlask, SiSqlite
} from "react-icons/si";

const skillsData = [
  {
    category: "Languages",
    icon: <FaCuttlefish className="text-pink-400" />,
    barColor: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/20",
    bgColor: "bg-pink-500/10",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 88 },
      { name: "Python", icon: <FaPython className="text-blue-400" />, level: 75 },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" />, level: 70 },
      { name: "C", icon: <FaCuttlefish className="text-pink-400" />, level: 68 },
      { name: "Java", icon: <span className="text-orange-400 font-bold text-xs">☕</span>, level: 65 },
    ],
  },
  {
    category: "Frontend",
    icon: <FaReact className="text-cyan-400" />,
    barColor: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/20",
    bgColor: "bg-cyan-500/10",
    skills: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: 90 },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" />, level: 88 },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-400" />, level: 92 },
      { name: "CSS3", icon: <SiCss3 className="text-blue-400" />, level: 85 },
    ],
  },
  {
    category: "Backend & DB",
    icon: <FaNodeJs className="text-green-400" />,
    barColor: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/20",
    bgColor: "bg-green-500/10",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" />, level: 82 },
      { name: "Express", icon: <SiExpress className="text-gray-300" />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 78 },
      { name: "Flask", icon: <SiFlask className="text-gray-300" />, level: 65 },
      { name: "SQLite", icon: <SiSqlite className="text-blue-300" />, level: 60 },
    ],
  },
  {
    category: "Tools & Concepts",
    icon: <FaChartLine className="text-orange-400" />,
    barColor: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500/20",
    bgColor: "bg-orange-500/10",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400" />, level: 85 },
      { name: "GitHub", icon: <SiGithub className="text-gray-200" />, level: 85 },
      { name: "Socket.io", icon: <SiSocketdotio className="text-white" />, level: 75 },
      { name: "OOP / DSA", icon: <span className="text-indigo-400 text-xs font-bold">{"{}"}</span>, level: 78 },
    ],
  },
  {
    category: "Soft Skills",
    icon: <FaUsers className="text-purple-400" />,
    barColor: "from-purple-500 to-violet-500",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/10",
    skills: [
      { name: "Leadership", icon: <span>👑</span>, level: 82 },
      { name: "Communication", icon: <span>💬</span>, level: 85 },
      { name: "Teamwork", icon: <span>🤝</span>, level: 88 },
      { name: "Problem Solving", icon: <span>🧩</span>, level: 86 },
      { name: "Adaptability", icon: <span>🌱</span>, level: 84 },
    ],
  },
];

export default function Expertise() {
  return (
    <section id="experties" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/5 rounded-full blur-3xl" />
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
          <span className="section-tag mb-4 inline-block">✦ Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical toolkit across languages, frameworks, databases, and professional attributes.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillsData.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`glass-card rounded-3xl p-6 border ${cat.borderColor} hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl ${cat.bgColor} border ${cat.borderColor} flex items-center justify-center text-xl`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-display font-bold">{cat.category}</h3>
              </div>

              {/* Skill rows */}
              <div className="flex flex-col gap-3.5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-base leading-none">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-xs font-bold text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.barColor}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: sIdx * 0.08 + catIdx * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
