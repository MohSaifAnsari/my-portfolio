import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  FaRocket,
  FaLaptopCode,
  FaPalette,
  FaTools,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaStar,
} from "react-icons/fa";

export default function About() {
  const itemsData = [
    {
      icon: <FaRocket className="text-pink-500" aria-hidden="true" />,
      title: "Passionate Engineer",
      details:
        "As a fresher, I am passionate about learning and dedicated to building scalable and maintainable software that makes a real difference.",
      summary: "Dedicated and enthusiastic about impactful software.",
    },
    {
      icon: <FaLaptopCode className="text-blue-500" aria-hidden="true" />,
      title: "Full Stack Skills",
      details:
        "I have hands-on expertise in React, Node.js, Express, and MongoDB. I design sleek user interfaces with TailwindCSS and create robust RESTful APIs to power seamless applications.",
      summary: "Expertise across frontend and backend technologies.",
    },
    {
      icon: <FaPalette className="text-yellow-400" aria-hidden="true" />,
      title: "UI/UX Focus",
      details:
        "User experience matters. I craft intuitive, accessible, and visually engaging interfaces to ensure users enjoy every interaction and find what they need effortlessly.",
      summary: "Prioritizing user-friendly and beautiful designs.",
    },
    {
      icon: <FaTools className="text-green-500" aria-hidden="true" />,
      title: "End-to-End Development",
      details:
        "From concept to deployment, I manage all phases of the software lifecycle. I ensure clean architecture, thorough testing, and reliable delivery for high-quality products.",
      summary: "Handling all stages of software delivery.",
    },
    {
      icon: <FaUsers className="text-purple-500" aria-hidden="true" />,
      title: "Collaborative",
      details:
        "I excel at working within diverse teams, communicating clearly with designers, product managers, and developers, and adapting to changing requirements to meet project goals.",
      summary: "Team player with excellent communication skills.",
    },
    {
      icon: <FaChartLine className="text-orange-500" aria-hidden="true" />,
      title: "Continuous Learner",
      details:
        "I keep pace with evolving technologies and industry trends, continuously upgrading my skills and applying new knowledge to create innovative and efficient solutions.",
      summary: "Always growing and embracing new tech.",
    },
    {
      icon: <FaGlobe className="text-teal-500" aria-hidden="true" />,
      title: "Global Mindset",
      details:
        "Open to remote and international collaboration, I embrace diverse perspectives and cultures, contributing positively to global projects and teams.",
      summary: "Open and adaptable to global teamwork.",
    },
    {
      icon: <FaStar className="text-red-500" aria-hidden="true" />,
      title: "Clean Code Advocate",
      details:
        "I write clear, maintainable, and well-documented code. My coding practices emphasize readability, scalability, and ease of handoff to future developers.",
      summary: "Writing code that lasts and is easy to maintain.",
    },
  ];

  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.9) {
        controls.start("visible");
      }
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative w-full min-h-[480px] py-16 flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700 px-6 md:px-12"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
      }}
      aria-label="About Me Section"
    >
      <motion.h2
        className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg max-w-3xl text-gray-300 leading-relaxed mb-12 text-center"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
        }}
      >
        I’m a passionate Software Engineer dedicated to building modern, scalable, and user-friendly digital experiences that solve real problems.
      </motion.p>

      {/* Cards List with stagger */}
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full"
        role="list"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {itemsData.map((item, index) => (
          <motion.li
            key={index}
            className="flex flex-col bg-gray-800 rounded-xl shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 transition-transform hover:scale-105 hover:bg-gray-700 p-6"
            tabIndex={0}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setExpandedIndex(expandedIndex === index ? null : index);
              }
            }}
            variants={cardVariants}
            aria-expanded={expandedIndex === index}
            aria-controls={`about-details-${index}`}
            role="button"
          >
            <div className="flex items-center gap-5">
              <div className="text-4xl flex-shrink-0" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>

            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  id={`about-details-${index}`}
                  className="mt-4 text-gray-300 text-base leading-relaxed select-text flex flex-col gap-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p>{item.details}</p>
                  <p className="italic text-sm text-pink-400 font-semibold">{item.summary}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
