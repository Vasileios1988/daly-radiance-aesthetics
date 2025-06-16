import React from 'react';

export default function Services() {
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

          {[
            {
              title: "Anti-Wrinkle Treatment",
              treatments: [
                ["1 Area of Botox", "£100.00", "30 mins"],
                ["2 Areas Botox", "£150.00", "30 mins"],
                ["3 Areas Botox", "£200.00", "30 mins"],
                ["Bunny Lines", "£60.00", "30 mins"],
                ["Brow Lift", "£250.00", "30 mins"],
                ["Pebble Chin Botox", "£120.00", "30 mins"],
                ["Lip Flip", "£120.00", "30 mins"],
                ["Masseter Botox", "£180.00", "30 mins"],
                ["Botox Review", "£0.00", "30 mins"],
              ],
            },
            {
              title: "Dermal Filler",
              treatments: [
                ["3ml Jaw Filler", "£330.00", "1 hr"],
                ["Cheek Filler 2ml", "£250.00", "45 mins"],
                ["Cheek Filler 1.1ml", "£160.00", "1 hr"],
                ["Nasal Labial 1ML", "£140.00", "45 mins"],
                ["Tear Trough", "£170.00", "45 mins"],
                ["Marionette Lines", "£140.00", "45 mins"],
                ["Filler Dissolve", "£150.00", "1 hr"],
                ["Filler Review", "£0.00", "30 mins"],
                ["Signature Lips 0.5ml", "£85.00", "45 mins"],
                ["Signature Lip 1.1ml", "£170.00", "45 mins"],
                ["1.1ml Classic Lip", "£149.00", "45 mins"],
                ["Russian Lip", "£179.00", "1 hr"],
              ],
            },
            {
              title: "Polynucleotides",
              treatments: [
                ["Polynucleotides Under Eye (3 treatments)", "£300.00", "30 mins"],
                ["Polynucleotide Three Sessions", "£400.00", "1 hr"],
              ],
            },
            {
              title: "Skin Booster",
              treatments: [
                ["Skin Booster", "£200.00", "1 hr"],
                ["Nasal Labial 1ML", "£140.00", "45 mins"],
              ],
            },
            {
              title: "Microneedling",
              treatments: [
                ["Microneedling", "£40.00", "45 mins"],
                ["Meso-microneedling", "£80.00", "45 mins"],
              ],
            },
          ].map((section, idx) => (
              <div key={idx} className="mb-10">
                <h3 className="text-2xl font-semibold text-brandPink mb-3">{section.title}</h3>
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
          ))}

          <div className="text-center mt-10">
              <button
                  onClick={() => window.open('https://facesconsent.com/bookings/dalyaestheticandskinrejuvenation', '_blank')}
                  className="bg-brandPink text-white px-4 py-2 rounded-full text-sm hover:bg-[#d15d2e] transition"
              >
                  Book Now
              </button>
          </div>
        </div>
      </section>
  );
}
