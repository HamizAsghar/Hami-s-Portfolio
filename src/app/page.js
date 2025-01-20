
import Skills from './skills/page'
import Projects from './projects/page'
import About from './about/page'
import Contact from './contact/page'
import Hero from './home/page'


export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
    </main>
  )
}