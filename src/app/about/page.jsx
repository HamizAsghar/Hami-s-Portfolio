'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
    const stats = [
        { label: 'Years Experience', value: '2+' },
        { label: 'Projects Completed', value: '20+' },
        { label: 'Technologies', value: '10+' },
        { label: 'Satisfied Clients', value: '15+' },
    ]

    return (
        <main className="bg-black min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/2"
                    >
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/about.png"
                                alt="Muhammad Hamiz Asghar"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>


                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:w-1/2"
                    >
                        <h1 className="text-4xl font-bold text-[#FFD700] mb-6">About Me</h1>
                        <p className="text-gray-300 mb-6">
                            I am Muhammad Hamiz Asghar, a passionate Full Stack Developer with a BSCS degree from UCP.
                            At 21, I've already built numerous web applications using the MERN stack and Next.js.
                            My journey in web development started with a curiosity for creating interactive user experiences,
                            and has evolved into a professional career building robust, scalable applications.
                        </p>
                        <p className="text-gray-300 mb-6">
                            I specialize in modern web technologies including React.js, Node.js, and MongoDB,
                            with a strong foundation in HTML, CSS, and JavaScript. My approach combines technical
                            expertise with creative problem-solving to deliver exceptional digital solutions.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                    className="text-center p-4 bg-gray-900 rounded-lg"
                                >
                                    <div className="text-[#FFD700] text-2xl font-bold mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Education & Experience Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-24"
                >
                    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 text-center">
                        Education & Experience
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-white mb-4">Education</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-[#FFD700]">Matriculation</h4>
                                    <p className="text-gray-500">2020</p>
                                </div>
                                <div>
                                    <h4 className="text-[#FFD700]">Intermediate</h4>
                                    <p className="text-gray-500">2022</p>
                                </div>
                                <div>
                                    <h4 className="text-[#FFD700]">Bachelor of Computer Science</h4>
                                    <p className="text-gray-500">Continue</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-[#FFD700]">Full Stack Developer</h4>
                                    <p className="text-gray-400">Freelancer</p>
                                    <p className="text-gray-500">2024 - Present</p>
                                    <ul className="text-gray-400 list-disc list-inside mt-2">
                                        <li>Developed responsive web applications</li>
                                        <li>Worked with MERN stack technologies</li>
                                        <li>Implemented modern UI/UX designs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}

