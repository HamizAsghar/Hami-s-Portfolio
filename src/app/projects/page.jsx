'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'

export default function Projects() {
    const projects = [
        {
            title: "Finance Management System",
            description: "Comprehensive finance management system with Next.js, offering expense tracking, budget planning, real-time analytics, and secure Stripe payment integration.",
            image: "/projects/f_m_s.jpg?height=400&width=600",
            tags: ["Next.js", "MongoDB", "Tailwind CSS"],
            github: "#",
            live: "https://finance-management-swart.vercel.app/",
            year: "2025"
        },
        {
                title: "Versanex",
                description: "Professional portfolio showcasing a modern design and responsive layout built with Next.js, demonstrating proficiency in full-stack web development and user-friendly interfaces.",
                image: "/projects/p_f.JPG?height=400&width=600",
                tags: ["ReactJS", "VueJS", "Express","MongoDB"],
                github: "#",
                live: "https://versanexinc.vercel.app/",
                year: "2024"
            },
        {
            "title": "Aura",
            "description": "E-commerce website showcasing a modern and intuitive shopping experience built with Next.js. Features responsive design, seamless navigation, and integration with advanced technologies to enhance user engagement and functionality.",
            "image": "/projects/ecom.JPG?height=400&width=600",
            "tags": ["Next.js", "React", "Tailwind CSS"],
            "github": "#",
            "live": "https://aura-marketplace.vercel.app/",
            "year": "2024"
        }

    ]
    const noteworthyProjects = [
        {
            title: "E-commerce Platform",
            description: "A fully responsive e-commerce application with real-time inventory tracking, payment gateway integration, and user-friendly UI.",
            tags: ["React", "Firebase", "Tailwind CSS"],
            github: "https://github.com/example/ecommerce-platform",
            live: "https://aura-marketplace.vercel.app/"
        },
        {
            title: "Personal Portfolio Website",
            description: "A modern portfolio website showcasing my skills, projects, and experience with smooth animations and dark mode support.",
            tags: ["Next.js", "CSS Modules", "Framer Motion"],
            github: "https://github.com/example/portfolio",
            live: "https://versanexinc.vercel.app/"
        },
        {
            title: "Chat Application",
            description: "Real-time chat application with WebSocket support, allowing users to communicate seamlessly.",
            tags: ["MERN Stack", "Socket.io", "Bootstrap"],
            github: "https://github.com/example/chat-app",
            live: "https://chat-app.vercel.app/"
        },
        {
            title: "Weather Dashboard",
            description: "Interactive weather dashboard with data visualization, location-based weather updates, and future forecasts.",
            tags: ["React", "OpenWeather API", "Chart.js"],
            // github: "https://github.com/example/weather-dashboard",
            // live: "https://weather-dashboard.vercel.app/"
        },
        {
            title: "Blogging Platform",
            description: "A blogging platform allowing users to create, edit, and publish articles with Markdown support.",
            tags: ["Next.js", "Prisma", "Tailwind CSS"],
            // github: "https://github.com/example/blogging-platform",
            // live: "https://blogging-platform.vercel.app/"
        },
        {
            title: "Task Tracker App",
            description: "A lightweight task management tool with drag-and-drop functionality and user authentication.",
            tags: ["Vue.js", "Firebase", "Vuetify"],
            // github: "https://github.com/example/task-tracker",
            // live: "https://task-tracker.vercel.app/"
        }
    ]
    return (
        <main className="bg-black min-h-screen">
            <div className="py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-4">
                        Featured Projects
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore my recent web development projects showcasing my expertise
                        in building modern, responsive applications.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative"
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
                                    {/* Project Image */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full md:w-3/5 relative"
                                    >
                                        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                fill
                                                className="object-contain"
                                            />
                                            <div className="absolute inset-0 bg-black/30 " />
                                        </div>
                                    </motion.div>

                                    {/* Project Info */}
                                    <div className="w-full md:w-2/5 space-y-6">
                                        <motion.div
                                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            viewport={{ once: true }}
                                        >
                                            <p className="text-[#FFD700] mb-2">{project.year}</p>
                                            <h3 className="text-3xl font-bold text-white mb-4">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-300 text-lg mb-6">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="bg-gray-800 text-[#FFD700] px-4 py-1 rounded-full text-sm"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-4">
                                                <motion.a
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 bg-[#FFD700] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#E5C100] transition-colors"
                                                >
                                                    <Github size={20} />
                                                    Code
                                                </motion.a>
                                                <motion.a
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                                                >
                                                    <ExternalLink size={20} />
                                                    Live Demo
                                                </motion.a>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32"
                >
                    <h2 className="text-3xl font-bold text-[#FFD700] mb-12 text-center">
                        Other Noteworthy Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {noteworthyProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-[#FFD700]">
                                        <Github size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-[#FFD700] transition-colors"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-[#FFD700] transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FFD700] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                                    {project.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-12 text-center"
                    >
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[#FFD700] hover:text-[#E5C100] transition-colors text-lg"
                        >
                            View More Projects
                            <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}




