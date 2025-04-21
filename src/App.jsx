import Hero from './components/Hero.jsx'
import logo from './artwork/logo.jpg'
import Services from './components/Services.jsx'

import './index.css'

function App() {

  return (
    <>

      <Hero title={"Shelley Aesthetics"} logo={logo}
      description={"A modern aesthetic clinic specializing in Botox, dermal fillers, and non-surgical facial rejuvenation treatments to help clients look and feel their best."}/>

     
      <Services />

    </>
  )
}

export default App
