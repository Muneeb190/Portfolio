import Hero from './components/sections/Hero'
import Navbar from './components/Navbar'
import ShowcaseSection from './components/sections/ShowcaseSection'
import FeatureCards from './components/sections/FeatureCards'
import TechStack from './components/sections/TechStack'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'








const App = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    if(!document.getElementById('main2')) {
      setloading(false)
    }
  }, [])

  return (
    <>
      {loading ? (
        <div id='main'>
          <Preloader />
        </div>
      ) : (
        <div id='main2'>
          <Navbar />
          <Hero />
          <ShowcaseSection />
          <FeatureCards />
          <TechStack />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )
      }
    </>
  )
}

export default App