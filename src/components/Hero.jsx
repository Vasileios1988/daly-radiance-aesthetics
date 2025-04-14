import logo from '../artwork/logo.jpg';
export default function Hero(){
    const title = "Beauty with Compassion";
    const description = "At Daly Radiance Aesthetics, your well-being is at the heart of every treatment. Shelley combines medical expertise with a caring touch to help you feel confident, radiant, and truly yourself.";
    return (
        <div className="flex h-screen bg-[#f4f3ef]">
            <div className="w-1/2 flex items-center justify-start pl-16">
                <div>
                    <h1 className="font-bold text-[#ee9964] text-4xl mb-4">{title}</h1>
                    <p className="text-[#ee9964] text-lg">{description}</p>
                </div>
            </div  >




            <div className="w-1/2">
                <img src={logo} alt="logo" className="h-full w-full object-cover" />
            </div>
        </div>

    )
}