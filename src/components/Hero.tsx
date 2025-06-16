import { ChevronDownIcon } from '@heroicons/react/24/solid'

type HeroProps = {
  title: string
  description: string
  logo: string
}

export default function Hero({ title, description, logo }: HeroProps) {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row h-screen bg-[#f4f3ef]">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:pl-16 text-center md:text-left">
          <h1 className="font-bold text-[#ee9964] text-4xl mb-4">{title}</h1>
          <p className="text-[#ee9964] text-lg mb-6">{description}</p>


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
