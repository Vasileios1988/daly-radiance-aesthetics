type AboutProps = {
    photoUrl?: string; // optional for now
};

export default function About({ photoUrl }: AboutProps) {
    return (
        <section id="about" className="bg-[#f4f3ef] py-16 px-6 md:px-20 text-gray-800">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Photo placeholder or image */}
                <div className="w-full md:w-1/3">
                    {photoUrl ? (
                        <img
                            src={photoUrl}
                            alt="Shelley – Owner of Daly Radiance Aesthetics"
                            className="rounded-lg shadow-md w-full h-auto object-cover"
                        />
                    ) : (
                        <div className="bg-gray-300 rounded-lg w-full h-64 flex items-center justify-center text-gray-500 text-sm">
                            Photo of Shelley will go here
                        </div>
                    )}
                </div>

                {/* About Text */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-bold text-[#ee9964] mb-4">About Shelley</h2>
                    <p className="text-lg leading-relaxed">
                        Shelley is the heart behind Daly Radiance Aesthetics. With over 16 years in healthcare —
                        including 5 years as a mental health nurse — she brings deep empathy and understanding to her work.
                        Her unique background helps her support not only the beauty but also the emotional well-being of her clients.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        Through a range of personalised aesthetic treatments, Shelley prioritises care, safety, and confidence.
                        Her commitment to continuous learning and industry best practices ensures that each client receives
                        thoughtful, high-quality results rooted in both compassion and expertise.
                    </p>
                </div>
            </div>
        </section>
    );
}
