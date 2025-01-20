'use client'
import { motion } from 'framer-motion'

const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'MongoDB', level: 75 },
    { name: 'Express.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'SCSS', level: 80 },
    { name: 'Bootstrap', level: 85 },
    { name: 'jQuery', level: 75 },
    {name: 'Wordpress', level: 80}
]

const Skills = () => {
    return (
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-gray-400">
                        Technologies and tools I've been working with
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-900 p-4 rounded-lg"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-white">{skill.name}</span>
                                <span className="text-[#FFD700]">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-[#FFD700] h-2.5 rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills

