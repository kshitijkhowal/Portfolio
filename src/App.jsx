import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import BackGround from "./components/BackGround"


const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300  antialiased selection:bg-cyan-300 selection:text-cyan-900">
        
            <BackGround />
          <div className="container mx-auto px-8">
            <Navbar />
            <Hero/>
            <About/>
            <Technologies/>
            <Experience/>
            <Projects/>
            <Contact/>
          </div>

      </div>
    </div>
  )
}

export default App
