import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin,
  FaGithub, FaPaperPlane, FaCheckCircle
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "saifansari50231@gmail.com",
    href: "mailto:saifansari50231@gmail.com",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/25",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+91 8922886076",
    href: "tel:+918922886076",
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/25",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Jaunpur, Uttar Pradesh, India",
    href: null,
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/25",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "saif-ansari-27s",
    href: "https://www.linkedin.com/in/saif-ansari-27s/",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/25",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/6 rounded-full blur-3xl" />
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
          <span className="section-tag mb-4 inline-block">✦ Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project idea, a job opportunity, or just want to say hi? My inbox is always open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* ── Contact Info (left) ── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-3xl p-6 border border-white/6 mb-2">
              <h3 className="text-lg font-display font-bold mb-2">Contact Info</h3>
              <p className="text-gray-400 text-sm mb-5">
                Reach out through any of these channels. I typically respond within 24 hours.
              </p>

              <div className="flex flex-col gap-3">
                {contactInfo.map(({ icon, label, value, href, color, bg }) => {
                  const Wrapper = href ? motion.a : motion.div;
                  return (
                    <Wrapper
                      key={label}
                      {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-4 p-3.5 rounded-2xl border ${bg} transition-all group ${href ? "cursor-pointer" : ""}`}
                    >
                      <div className={`text-xl ${color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {icon}
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs font-medium">{label}</p>
                        <p className="text-white text-sm font-medium">{value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            {/* Social CTA */}
            <div className="glass-card rounded-3xl p-6 border border-white/6">
              <p className="text-gray-400 text-sm text-center mb-4">Find me online</p>
              <div className="flex justify-center gap-3">
                {[
                  { icon: <FaGithub />, href: "https://github.com/MohSaifAnsari", label: "GitHub", color: "hover:bg-gray-700" },
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/saif-ansari-27s/", label: "LinkedIn", color: "hover:bg-blue-700" },
                  { icon: <FaEnvelope />, href: "mailto:saifansari50231@gmail.com", label: "Email", color: "hover:bg-indigo-700" },
                ].map(({ icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all ${color}`}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Contact Form (right) ── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-3xl p-8 border border-white/6">
              <h3 className="text-lg font-display font-bold mb-6">Send Me a Message</h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <FaCheckCircle className="text-green-400 text-3xl" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thank you for reaching out. I'll get back to you shortly!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow transition-all disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
