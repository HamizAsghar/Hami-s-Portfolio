import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hamiz Asghar - Web Developer',
  description: 'Full Stack Developer specializing in MERN Stack and Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      </body>
    </html>
  )
}

