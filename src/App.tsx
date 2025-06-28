import Hero from './components/Hero'
import logo from './artwork/logo.jpg'
import Services from './components/Services'
import About from './components/About'
import shelley from './artwork/Shelley-work.png';

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
            description={'The aim is to enhance your natural beauty!'}
            logo={logo}
        />

        <Services />

        <About photoUrl={shelley} />

        <Contact />

        <Footer />
    </>
  )
}

export default App
