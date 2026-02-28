import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaDatabase, FaRobot, FaPalette, FaServer } from "react-icons/fa";

const services = [
    {
        icon: <FaCode />,
        title: "Web Development",
        description: "Building fast, scalable, and maintainable web applications using modern MERN stack architecture.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10 border-indigo-500/20",
        gradient: "from-indigo-500/10 to-purple-500/5",
    },
    {
        icon: <FaMobileAlt />,
        title: "Responsive Design",
        description: "Crafting pixel-perfect, mobile-first interfaces that look great on every screen and device.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10 border-cyan-500/20",
        gradient: "from-cyan-500/10 to-blue-500/5",
    },
    {
        icon: <FaDatabase />,
        title: "Backend & APIs",
        description: "Designing robust RESTful APIs, database schemas, and server-side logic with Node.js & Express.",
        color: "text-green-400",
        bg: "bg-green-500/10 border-green-500/20",
        gradient: "from-green-500/10 to-emerald-500/5",
    },
    {
        icon: <FaRobot />,
        title: "AI Integration",
        description: "Integrating AI/ML capabilities like face recognition and intelligent automation into web systems.",
        color: "text-purple-400",
        bg: "bg-purple-500/10 border-purple-500/20",
        gradient: "from-purple-500/10 to-violet-500/5",
    },
    {
        icon: <FaPalette />,
        title: "UI/UX Design",
        description: "Designing intuitive, visually stunning interfaces with attention to detail, usability, and aesthetics.",
        color: "text-pink-400",
        bg: "bg-pink-500/10 border-pink-500/20",
        gradient: "from-pink-500/10 to-rose-500/5",
    },
    {
        icon: <FaServer />,
        title: "Full Stack Solutions",
        description: "End-to-end development from database architecture to frontend polish — I handle the complete stack.",
        color: "text-amber-400",
        bg: "bg-amber-500/10 border-amber-500/20",
        gradient: "from-amber-500/10 to-orange-500/5",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
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
                    <span className="section-tag mb-4 inline-block">✦ What I Offer</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        My <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From concept to deployment — I offer a full range of services to bring your digital ideas to life.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08, duration: 0.5 }}
                            whileHover={{ y: -6 }}
                            className={`relative glass-card rounded-3xl p-6 border border-white/6 bg-gradient-to-br ${service.gradient} hover:border-white/12 hover:shadow-card-hover transition-all duration-300 group overflow-hidden`}
                        >
                            {/* Subtle background circle */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                                style={{ background: `radial-gradient(circle, currentColor, transparent)` }} />

                            <div className={`w-12 h-12 rounded-2xl ${service.bg} border flex items-center justify-center text-xl ${service.color} mb-5 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-display font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                            <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                                <span>Learn more</span>
                                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
