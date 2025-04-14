import Hero from './components/Hero.jsx'
import logo from './artwork/logo.jpg'
import './index.css'

function App() {
  return (
    <>
      <Hero
        title="Daly Radiance Aesthetics"
        description="Mental Health Nurse & Aesthetic Practitioner"
        logo={logo}
      />
    </>
  )
}

export default App
