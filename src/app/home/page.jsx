"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Hero = () => {
    const [text, setText] = useState("")
    const fullText = "Hamiz Asghar"
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index])
                setIndex(index + 1)
            }, 150)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setText("")
                setIndex(0)
            }, 2000)
            return () => clearTimeout(timeout)
        }
    }, [index])

    const imageAnimations = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    const glowAnimation = {
        animate: {
            boxShadow: [
                "0 0 20px rgba(255, 215, 0, 0.3)",
                "0 0 60px rgba(255, 215, 0, 0.3)",
                "0 0 20px rgba(255, 215, 0, 0.3)",
            ],
            transition: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 pt-24 bg-black">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 space-y-4 text-center md:text-left"
            >
                <h2 className="text-[#FFD700] text-xl">Hello, I'm</h2>
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                    {text}
                    <span className="animate-blink">|</span>
                </h1>
                <motion.h3
                    className="text-2xl md:text-3xl text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Full Stack Developer
                </motion.h3>
                <motion.p
                    className="text-gray-400 max-w-md mx-auto md:mx-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    MERN Stack & Next.js Developer with expertise in building responsive and dynamic web applications. BSCS
                    graduate from UCP.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FFD700] text-black px-6 py-3 rounded-full font-medium hover-3d"
                >
                    <Link href="/contact">Get In Touch</Link>
                </motion.button>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={imageAnimations}
                className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center"
            >
                <motion.div
                    className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
                    animate="animate"
                    variants={glowAnimation}
                >
                    <div className="absolute inset-0 rounded-full bg-[#FFD700] opacity-10 blur-2xl" />
                    <motion.div
                        className="relative w-full h-full flex justify-center items-center overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/images/mine.png"
                            alt="Muhammad Hamiz Asghar"
                            width={300}
                            height={300}
                            className="object-contain w-full h-full"
                        />
                    </motion.div>

                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-4 h-4 bg-[#FFD700] rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero

