import Hero from './components/Hero'
import logo from './artworkç/logo.jpg'
import Services from './components/Services'

import './index.css'

function App() {
  return (
    <>

      <Hero title={'Daly Radiance Aesthetics'} description={'Aesthetic treatments designed to refresh, not replace.'} logo={logo}/>

     
      <Services />

    </>
  )
}

export default App
