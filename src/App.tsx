import Hero from './components/Hero'
import logo from './artwork/logo.jpg'
import Services from './components/Services'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <>
      <Hero
        title={'Daly Radiance Aesthetics'}
        description={'Aesthetic treatments designed to refresh, not replace.'}
        logo={logo}
      />


      <Hero title={'Daly Radiance Aesthetics'} description={'Aesthetic treatments designed to refresh, not replace.'} logo={logo}/>

      <Services />

        <Contact />

    </>
  )
}

export default App
