import Hero from './components/Hero'
// @ts-ignore
import logo from './artwork/logo.jpg'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'

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
