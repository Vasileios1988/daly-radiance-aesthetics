import Hero from './components/Hero'
import logo from './artwork/logo.jpg'
import Services from './components/Services'
import About from './components/About'
import botox from './artwork/botox.jpg';

import './index.css'
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Navbar />
        <Hero
            title={'Daly Radiance Aesthetics'}
            description={'Aesthetic treatments designed to refresh, not replace.'}
            logo={logo}
        />

        <Services />

        <About photoUrl={''} />

        <Contact />

        <Footer />
    </>
  )
}

export default App
