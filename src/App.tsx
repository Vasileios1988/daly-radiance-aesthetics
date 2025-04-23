import Hero from './components/Hero'
import logo from './artwork/logo.jpg'
import Services from './components/Services'
import About from './components/About'

import './index.css'

function App() {
  return (
    <>

      <Hero title={'Daly Radiance Aesthetics'} description={'Aesthetic treatments designed to refresh, not replace.'} logo={logo}/>

     
      <Services />

        <About />

    </>
  )
}

export default App
