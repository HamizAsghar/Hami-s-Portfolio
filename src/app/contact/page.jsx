'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, Phone, Mail, MapPin } from 'lucide-react'
import { sendEmail } from '@/app/actions/send-email'
import Swal from 'sweetalert2'

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (formData) => {
        setIsSubmitting(true)
        try {
            const result = await sendEmail(formData)

            if (result.success) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully!',
                    icon: 'success',
                    confirmButtonColor: '#FFD700',
                    background: '#1a1a1a',
                    color: '#fff'
                })
                // Reset the form
                const form = document.getElementById('contact-form')
                form.reset()
            } else {
                throw new Error(result.error)
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to send message. Please try again.',
                icon: 'error',
                confirmButtonColor: '#FFD700',
                background: '#1a1a1a',
                color: '#fff'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Phone",
            content: "0322-6389316",
            href: "tel:+923226389316"
        },
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            content: "hamizasghar@gmail.com",
            href: "mailto:hamizasghar@gmail.com"
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Location",
            content: "Faisalabad, Pakistan",
            href: "https://maps.google.com/?q=Lahore,Pakistan"
        }
    ]

    return (
        <main className="bg-black min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-[#FFD700] mb-4">Get in Touch</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Feel free to reach out to me for any questions or opportunities.
                        I'll get back to you as soon as possible.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <form
                            id="contact-form"
                            action={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white resize-none"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 px-6 bg-[#FFD700] text-black rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#E5C100] transition-colors disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="h-5 w-5" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-8"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={info.title}
                                href={info.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                                className="flex items-start gap-4 p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                <div className="text-[#FFD700]">{info.icon}</div>
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-1">{info.title}</h3>
                                    <p className="text-gray-400">{info.content}</p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </main>
    )
}

