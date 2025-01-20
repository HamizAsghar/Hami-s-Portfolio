'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    };

    return (
        <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                    >
                        <Link href="/" className="text-2xl font-bold text-[#FFD700]">
                            H <span className=' text-white'>A</span>
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    className="text-gray-300 hover:text-[#FFD700] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`absolute top-16 right-0 w-3/4 h-screen bg-black/95 shadow-lg md:hidden ${isOpen ? 'block' : 'hidden'
                    }`}
                animate={isOpen ? 'open' : 'closed'}
                variants={menuVariants}
                initial="closed"
                transition={{ duration: 0.3 }}
            >
                <div className="px-6 py-4 space-y-4">
                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="block text-gray-300 hover:text-[#FFD700] text-lg font-medium transition-colors"
                            onClick={() => setIsOpen(false)} // Close the menu on link click
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;


