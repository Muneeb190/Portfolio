import React from 'react'
import Hero from './components/sections/Hero'
import Navbar from './components/Navbar'
import ShowcaseSection from './components/sections/ShowcaseSection'
import FeatureCards from './components/sections/FeatureCards'
import TechStack from './components/sections/TechStack'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

const App = () => {
  return (
    <main>
      <div>
        <Navbar/>
        <Hero/>
        <ShowcaseSection/>
        <FeatureCards/>
        <TechStack/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  )
}

export default App