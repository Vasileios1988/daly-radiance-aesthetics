const services = [
  {
    title: 'Botox',
    description:
      'Smooth fine lines and reduce wrinkles with professional Botox treatments.',
    price: '£150',
  },
  {
    title: 'Dermal Fillers',
    description: 'Add volume and contour with expertly applied dermal fillers.',
    price: '£180',
  },
  {
    title: 'Skincare Consultation',
    description: 'Personalised skincare advice and treatment planning.',
    price: '£60',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-[#ee9964] text-center mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f4f3ef] p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-[#ee9964] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <p className="text-sm font-medium text-gray-800">
              From {service.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
