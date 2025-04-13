export default function Hero({ title, description, logo }) {
    return (
        <div className="flex flex-col-reverse md:flex-row h-screen bg-[#f4f3ef]">
            {/* Left Side: Text Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:pl-16 text-center md:text-left">
                <h1 className="font-bold text-[#ee9964] text-4xl mb-4">{title}</h1>
                <p className="text-[#ee9964] text-lg mb-6">{description}</p>

                <button
                    type="button"
                    onClick={() => {
                        console.log("Booking button clicked");
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
    );
}

