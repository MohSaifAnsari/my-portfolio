import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaHeart, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#experties" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/MohSaifAnsari", label: "GitHub", color: "hover:bg-gray-700" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/saif-ansari-27s/", label: "LinkedIn", color: "hover:bg-blue-700" },
  { icon: FaInstagram, href: "https://instagram.com/saifansari_27s", label: "Instagram", color: "hover:bg-pink-700" },
  { icon: FaFacebook, href: "https://www.facebook.com/saif.ansari.264259", label: "Facebook", color: "hover:bg-blue-800" },
  { icon: FaEnvelope, href: "mailto:saifansari50231@gmail.com", label: "Email", color: "hover:bg-indigo-700" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-16 pb-8 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Saif</span>
                <span className="text-gradient"> Ansari</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer passionate about crafting clean, scalable, and impactful web applications.
            </p>
            <div className="flex gap-2 mt-5">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all ${color}`}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Let's Work Together</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Have a project in mind or a job opportunity? I'm always open to new collaborations.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg hover:shadow-indigo-500/25 transition-all"
            >
              Hire Me ✦
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} <span className="text-gray-400 font-medium">Saif Ansari</span>. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-pink-500 mx-0.5" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
