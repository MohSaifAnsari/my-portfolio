import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaCalendarAlt, FaMedal } from "react-icons/fa";

const educationData = [
  {
    institution: "United Institute of Management",
    duration: "2022 – 2025",
    degree: "BCA – Bachelor in Computer Application",
    icon: <FaUniversity />,
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/30",
    lineColor: "from-indigo-500 to-purple-500",
    description: "Studied core computer science subjects including Software Engineering, Data Structures, DBMS, Networking, and Web Development. Actively led the Web Development Club and won multiple awards.",
    grade: "Completed",
  },
  {
    institution: "Hindu Inter College",
    duration: "2021",
    degree: "Intermediate (12th Grade)",
    icon: <FaSchool />,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/30",
    lineColor: "from-purple-500 to-pink-500",
    description: "Completed intermediate education with a strong focus on Science and Mathematics, building a solid analytical foundation for future engineering studies.",
    grade: "Passed",
  },
  {
    institution: "Raj Inter College",
    duration: "2019",
    degree: "High School (10th Grade)",
    icon: <FaSchool />,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10 border-pink-500/30",
    lineColor: "from-pink-500 to-rose-500",
    description: "Finished high school with a solid foundation in core subjects, developing strong study habits and discipline that paved the way for academic excellence.",
    grade: "Passed",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag mb-4 inline-block">✦ Background</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Academic milestones that shaped my technical foundation and analytical thinking.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/40 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {educationData.map((edu, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${isLeft ? "" : "md:[direction:rtl]"
                    }`}
                >
                  {/* Dot on timeline */}
                  <div className={`absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${edu.lineColor} shadow-lg ring-4 ring-dark-600 z-10`} />

                  {/* Card */}
                  <div className={`md:col-span-1 md:[direction:ltr] pl-16 md:pl-0 ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="glass-card rounded-3xl p-6 border border-white/6 hover:border-white/12 transition-all duration-300 hover:shadow-card-hover"
                    >
                      {/* Icon + Duration row */}
                      <div className="flex items-start justify-between mb-4 gap-3">
                        <div className={`w-11 h-11 rounded-xl ${edu.iconBg} border flex items-center justify-center text-xl ${edu.iconColor} flex-shrink-0`}>
                          {edu.icon}
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                          <FaCalendarAlt className="text-indigo-400 text-xs" />
                          {edu.duration}
                        </div>
                      </div>

                      <h3 className="text-lg font-display font-bold text-white mb-1">
                        {edu.institution}
                      </h3>
                      <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${edu.lineColor} bg-clip-text text-transparent`}>
                        {edu.degree}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="mt-4 flex items-center gap-2">
                        <FaMedal className="text-yellow-400 text-sm" />
                        <span className="text-xs font-medium text-yellow-400">{edu.grade}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty col for alternating layout */}
                  <div className="hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
