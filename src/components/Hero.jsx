import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const name = "Saif Ansari".split(" ");

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white transition-colors duration-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6">

        {/* Text Section */}
        <motion.div
          className="text-center md:text-left max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Typing Animation */}
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 flex flex-wrap justify-center md:justify-start">
            Hi, I'm{" "}
            <span className="ml-3 text-blue-400 flex">
              {name.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="inline-block"
                >
                  {word}
                  {index !== name.length - 1 && "\u00A0"}
                </motion.span>
              ))}
            </span>
            <motion.span
              className="ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: name.length * 0.1 }}
            >
              👋
            </motion.span>
          </h1>

          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: name.length * 0.1 + 0.5 }}
          >
            A passionate <span className="text-pink-400">Software Engineer </span>
            dedicated to building intelligent, high-quality, and impactful digital experiences ✨
          </motion.p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mb-6">
            {[
              { icon: FaFacebook, link: "https://www.facebook.com/saif.ansari.264259", color: "text-blue-500" },
              { icon: FaInstagram, link: "https://instagram.com/saifansari_27s", color: "text-pink-500" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/saif-ansari-27s/", color: "text-blue-400" },
              { icon: FaGithub, link: "https://github.com/MohSaifAnsari", color: "text-gray-300" }
            ].map(({ icon: Icon, link, color }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} text-3xl hover:scale-125 transition-transform duration-300`}
                whileHover={{ rotate: 10, scale: 1.2 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Resume Button */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: name.length * 0.1 + 1 }}
          >
            📄 View & Download Resume
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-transparent animate-glow"></div>
          <img
            src={`${import.meta.env.BASE_URL}images/saif 1.jpg`}
            alt="Saif Ansari"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-pink-500 shadow-lg hover:scale-105 transition-transform duration-300 relative z-10"
          />
        </motion.div>
      </div>

      {/* Resume Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <motion.div
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 w-[90%] md:w-[60%] shadow-2xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white text-center">
              My Resume
            </h2>

            <iframe
              src={`${import.meta.env.BASE_URL}images/M.saif-cv.pdf`}
              title="Resume Preview"
              className="w-full h-[400px] border rounded-lg bg-white"
            ></iframe>

            <div className="mt-5 flex flex-wrap justify-center gap-4">
              <a
                href={`${import.meta.env.BASE_URL}images/M.saif-cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md transition"
              >
                View Full PDF
              </a>
              <a
                href={`${import.meta.env.BASE_URL}images/M.saif-cv.pdf`}
                download="M.saif-cv.pdf"
                className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full shadow-md transition"
              >
                Download
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full shadow-md transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
