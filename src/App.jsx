import Hero from './components/sections/Hero'
import Navbar from './components/Navbar'
import ShowcaseSection from './components/sections/ShowcaseSection'
import FeatureCards from './components/sections/FeatureCards'
import TechStack from './components/sections/TechStack'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import { useEffect, useState } from 'react'
import { RiseLoader } from 'react-spinners'








const App = () => {
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 2000)
  }, [])

  return (
    <>
      {
        loading ? (
          <div id='main'>
            <RiseLoader 
            color = {"#169976"}
            size={20}
            />
          </div>
        ) : (
          <div>
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