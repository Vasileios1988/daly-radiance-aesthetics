import { ChevronDownIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
export default function Hero({ title, description, logo }) {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row h-screen bg-[#f4f3ef]">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:pl-16 text-center md:text-left">
          <h1 className="font-bold text-[#ee9964] text-4xl mb-4">{title}</h1>
          <p className="text-[#ee9964] text-lg mb-6">{description}</p>

          <button
            type="button"
            onClick={() => {
              console.log('Booking button clicked')
            }}
            className="bg-[#ee9964] text-white px-6 py-3 rounded-full text-lg font-medium transition transform hover:scale-105 hover:bg-[#e98549] focus:outline-none focus:ring-2 focus:ring-[#ee9964] focus:ring-offset-2"
          >
            Book Now
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <img
            src={logo}
            alt="Shelley Aesthetics"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Scroll Down Icon (Outside Hero Section) */}
      <div className="flex justify-center mt-4 md:mt-6">
        <ChevronDownIcon className="w-6 h-6 text-[#ee9964] animate-bounce" />
      </div>
    </>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string,
}
