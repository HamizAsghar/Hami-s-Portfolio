// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// export default function About() {
//     const stats = [
//         { label: 'Years Experience', value: '2+' },
//         { label: 'Projects Completed', value: '20+' },
//         { label: 'Technologies', value: '10+' },
//         { label: 'Satisfied Clients', value: '15+' },
//     ]

//     return (
//         <main className="bg-black min-h-screen">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//                 <div className="flex flex-col md:flex-row items-center gap-12">
//                     {/* Image Section */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.5 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5 }}
//                         className="md:w-1/2"
//                     >
//                         <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
//                             <Image
//                                 src="/images/about.png"
//                                 alt="Muhammad Hamiz Asghar"
//                                 fill
//                                 className="object-contain"
//                                 priority
//                             />
//                         </div>


//                     </motion.div>

//                     {/* Content Section */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 100 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                         className="md:w-1/2"
//                     >
//                         <h1 className="text-4xl font-bold text-[#FFD700] mb-6">About Me</h1>
//                         <p className="text-gray-300 mb-6">
//                             I am Muhammad Hamiz Asghar, a passionate Full Stack Developer with a BSCS degree from UCP.
//                             At 21, I've already built numerous web applications using the MERN stack and Next.js.
//                             My journey in web development started with a curiosity for creating interactive user experiences,
//                             and has evolved into a professional career building robust, scalable applications.
//                         </p>
//                         <p className="text-gray-300 mb-6">
//                             I specialize in modern web technologies including React.js, Node.js, and MongoDB,
//                             with a strong foundation in HTML, CSS, and JavaScript. My approach combines technical
//                             expertise with creative problem-solving to deliver exceptional digital solutions.
//                         </p>

//                         {/* Stats Grid */}
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//                             {stats.map((stat, index) => (
//                                 <motion.div
//                                     key={stat.label}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
//                                     className="text-center p-4 bg-gray-900 rounded-lg"
//                                 >
//                                     <div className="text-[#FFD700] text-2xl font-bold mb-2">
//                                         {stat.value}
//                                     </div>
//                                     <div className="text-gray-400 text-sm">{stat.label}</div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* Education & Experience Section */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.6 }}
//                     className="mt-24"
//                 >
//                     <h2 className="text-3xl font-bold text-[#FFD700] mb-8 text-center">
//                         Education & Experience
//                     </h2>
//                     <div className="grid md:grid-cols-2 gap-8">
//                         <div className="bg-gray-900 p-6 rounded-lg">
//                             <h3 className="text-xl font-bold text-white mb-4">Education</h3>
//                             <div className="space-y-4">
//                                 <div>
//                                     <h4 className="text-[#FFD700]">Matriculation</h4>
//                                     <p className="text-gray-500">2020</p>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-[#FFD700]">Intermediate</h4>
//                                     <p className="text-gray-500">2022</p>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-[#FFD700]">Bachelor of Computer Science</h4>
//                                     <p className="text-gray-500">Continue</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="bg-gray-900 p-6 rounded-lg">
//                             <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
//                             <div className="space-y-4">
//                                 <div>
//                                     <h4 className="text-[#FFD700]">Full Stack Developer</h4>
//                                     <p className="text-gray-400">Freelancer</p>
//                                     <p className="text-gray-500">2024 - Present</p>
//                                     <ul className="text-gray-400 list-disc list-inside mt-2">
//                                         <li>Developed responsive web applications</li>
//                                         <li>Worked with MERN stack technologies</li>
//                                         <li>Implemented modern UI/UX designs</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </main>
//     )
// }




"use client"

import { motion } from "framer-motion"

export default function About() {
    const stats = [
        { label: "Years Experience", value: "2+" },
        { label: "Projects Completed", value: "20+" },
        { label: "Technologies", value: "10+" },
        { label: "Satisfied Clients", value: "15+" },
    ]

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    }

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    return (
        <main className="min-h-screen bg-black overflow-hidden">
            {/* Animated background elements */}
            <div className="fixed inset-0 opacity-30">
                <motion.div
                    className="absolute h-[20px] w-[20px] rounded-full bg-[#FFD700] left-[10%] top-[20%]"
                    animate={{
                        y: [0, 100, 0],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute h-[30px] w-[30px] rounded-full bg-[#FFD700] right-[15%] top-[30%]"
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FFD700] to-yellow-500 bg-clip-text text-transparent mb-6"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                        About Me
                    </motion.h1>
                    <motion.div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300" variants={staggerChildren}>
                        <motion.p variants={fadeInUp}>
                            I am Muhammad Hamiz Asghar, a passionate Full Stack Developer with a BSCS degree from UCP. At 21, I've
                            already built numerous web applications using the MERN stack and Next.js.
                        </motion.p>
                        <motion.p variants={fadeInUp}>
                            My journey in web development started with a curiosity for creating interactive user experiences, and has
                            evolved into a professional career building robust, scalable applications.
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Stats Grid with Hover Effects */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                >
                    {stats.map((stat, index) => (
                        <motion.div key={stat.label} className="relative group" variants={fadeInUp}>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-yellow-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <motion.div
                                className="relative p-6 bg-gray-900 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-2"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="text-3xl font-bold text-[#FFD700] mb-2">{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Education & Experience Section with Enhanced Animations */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {/* Education */}
                    <motion.div
                        className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.h3
                            className="text-2xl font-bold text-[#FFD700] mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Education Journey
                        </motion.h3>
                        <motion.div className="space-y-6" variants={staggerChildren}>
                            {[
                                { title: "Matriculation", year: "2020" },
                                { title: "Intermediate", year: "2022" },
                                { title: "Bachelor of Computer Science", year: "Continue" },
                            ].map((edu, index) => (
                                <motion.div
                                    key={edu.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-[#FFD700] before:to-transparent"
                                >
                                    <h4 className="text-xl font-semibold text-white">{edu.title}</h4>
                                    <p className="text-gray-400 mt-1">{edu.year}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.h3
                            className="text-2xl font-bold text-[#FFD700] mb-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Professional Journey
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-[#FFD700] before:to-transparent"
                        >
                            <h4 className="text-xl font-semibold text-white">Full Stack Developer</h4>
                            <p className="text-[#FFD700] mt-1">Freelancer</p>
                            <p className="text-gray-400 mb-4">2024 - Present</p>
                            <motion.ul className="space-y-3 text-gray-300" variants={staggerChildren}>
                                {[
                                    "Developed responsive web applications",
                                    "Worked with MERN stack technologies",
                                    "Implemented modern UI/UX designs",
                                    "Delivered high-quality solutions to clients",
                                    "Managed end-to-end project lifecycles",
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center space-x-2"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]" />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}

