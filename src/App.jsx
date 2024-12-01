import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Projects from './sections/Projects.jsx'
// import Clients from './sections/Clients.jsx'
import Footer from './sections/Footer.jsx'
import Skills from './sections/Skills.jsx'


const App = () => {
const name = ()=>{
  
}
  return (
    <main className='max-w-full my-width mx-auto  ' >
      <Navbar/>
      <Hero/>
      <About />
      <Skills />
      <Projects />
      {/* <Clients /> */}
      <Contact />
      <Footer />
    </main>
  )
}

export default App
