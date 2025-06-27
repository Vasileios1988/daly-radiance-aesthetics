import React, { useState } from 'react';

const serviceSections = [
    {
        title: "Anti-Wrinkle Treatment",
        treatments: [
            ["1 Area", "£100.00", "30 mins"],
            ["2 Areas", "£150.00", "30 mins"],
            ["3 Areas", "£200.00", "30 mins"],
            ["Bunny Lines", "£60.00", "30 mins"],
            ["Brow Lift", "£250.00", "30 mins"],
            ["Pebble Chin", "£120.00", "30 mins"],
            ["Lip Flip", "£120.00", "30 mins"],
            ["Masseter", "£180.00", "30 mins"],
            ["Review", "£0.00", "30 mins"],
        ],
    },
    {
        title: "Dermal Filler",
        treatments: [
            ["3ml Jaw Filler", "£330.00", "1 hr"],
            ["Cheek Filler 2ml", "£250.00", "45 mins"],
            ["Cheek Filler 1.1ml", "£160.00", "1 hr"],
            ["Nasal Labial 1ml", "£140.00", "45 mins"],
            ["Tear Trough", "£170.00", "45 mins"],
            ["Marionette Lines", "£140.00", "45 mins"],
            ["Filler Dissolve", "£150.00", "1 hr"],
            ["Filler Review", "£0.00", "30 mins"],
            ["Signature Lips 0.5ml", "£85.00", "45 mins"],
            ["Signature Lip 1.1ml", "£170.00", "45 mins"],
            ["1.1ml Classic Lip", "£149.00", "45 mins"],
            ["Russian Lip", "£190.00", "1 hr"],
        ],
    },
    {
        title: "Polynucleotides",
        treatments: [
            ["Polynucleotides Under Eye (3 treatments)", "£200.00", "30 mins"],
            ["Polynucleotide Three Sessions", "£400.00", "1 hr"],
        ],
    },
    {
        title: "Skin Booster",
        treatments: [
            ["Skin Booster", "£150.00", "1 hr"],
        ],
    },
    {
        title: "Microneedling",
        treatments: [
            ["Microneedling", "£40.00", "45 mins"],
            ["Meso-microneedling", "£80.00", "45 mins"],
        ],
    },
];

export default function Services() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section id="services" className="bg-white py-16 px-6 md:px-20 text-gray-800">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-brandPink mb-6">Aesthetic Treatment Menu</h2>

                <p className="mb-2 font-medium">
                    <strong>Note:</strong> A consultation is provided for all treatments.
                </p>
                <p className="mb-8 font-medium">
                    <strong>Duration:</strong> 1 hour | <strong>Price:</strong> £50
                </p>

                {serviceSections.map((section, index) => (
                    <div key={index} className="mb-6 border rounded overflow-hidden">
                        <button
                            onClick={() => toggleSection(index)}
                            className="w-full text-left px-4 py-3 bg-brandBeige text-brandPink font-semibold hover:bg-brandPink hover:text-white transition"
                        >
                            {section.title}
                        </button>

                        {openIndex === index && (
                            <div className="px-4 py-4 bg-gray-50">
                                <table className="w-full text-left border-t border-gray-200">
                                    <thead>
                                    <tr className="text-sm text-gray-600">
                                        <th className="py-2 pr-4 font-medium">Treatment</th>
                                        <th className="py-2 pr-4 font-medium">Cost</th>
                                        <th className="py-2 font-medium">Time</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {section.treatments.map(([name, price, time], i) => (
                                        <tr key={i} className="text-sm border-t border-gray-100">
                                            <td className="py-2 pr-4">{name}</td>
                                            <td className="py-2 pr-4">{price}</td>
                                            <td className="py-2">{time}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ))}

                <div className="text-center mt-10">
                    <button
                        onClick={() =>
                            window.open(
                                'https://facesconsent.com/bookings/dalyaestheticandskinrejuvenation',
                                '_blank'
                            )
                        }
                        className="bg-brandPink text-white px-6 py-3 rounded-full hover:bg-[#d15d2e] transition"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </section>
    );
}
