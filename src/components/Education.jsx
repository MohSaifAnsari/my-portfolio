import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool } from "react-icons/fa";

const educationData = [
  {
    institution: "United Institute of Management",
    duration: "2022 - 2025",
    degree: "BCA - Bachelor in Computer Application",
    icon: <FaUniversity className="text-blue-500" aria-hidden="true" />,
    description:
      "Completed Bachelor in Computer Application with a focus on software development, data structures, and management principles.",
  },
  {
    institution: "Hindu Inter College",
    duration: "2021",
    degree: "Intermediate",
    icon: <FaSchool className="text-purple-500" aria-hidden="true" />,
    description:
      "Completed intermediate education with strong emphasis on science and mathematics subjects.",
  },
  {
    institution: "Raj Inter College",
    duration: "2019",
    degree: "High School",
    icon: <FaSchool className="text-green-500" aria-hidden="true" />,
    description:
      "Finished high school education with solid foundation in core subjects, preparing for higher studies.",
  },
];

export default function Education() {
  return (
    <section
      className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12"
      aria-label="Education Section"
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent select-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>

      <div className="flex flex-col items-center gap-10 w-full px-4 sm:px-6">
        {educationData.map(({ institution, duration, degree, icon, description }, idx) => (
          <motion.article
            key={institution}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-md w-full max-w-4xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 * idx, duration: 0.6, ease: "easeOut" }}
            tabIndex={0}
            aria-label={`${degree} at ${institution}, ${duration}`}
          >
            <div className="text-5xl flex-shrink-0">{icon}</div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{institution}</h3>
              <p className="text-sm text-gray-400 mb-1">{duration}</p>
              <p className="text-lg text-pink-400 font-medium mb-2">{degree}</p>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
