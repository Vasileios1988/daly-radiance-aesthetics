export default function Contact() {
  return (
      <div id="contact" className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl font-bold text-brandPink mb-4">Contact Us</h2>

          {/* Description */}
          <p className="text-lg text-gray-700 mb-8">
            We’d love to hear from you. Fill in the form and we’ll get back to you shortly.
          </p>

          {/* Form connected to Formspree */}
          <form
              action="https://formspree.io/f/mvgrrbgk"
              method="POST"
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="p-3 border rounded"
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="p-3 border rounded"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-3 border rounded md:col-span-2"
            />
            <textarea
                name="message"
                placeholder="Write your message"
                required
                className="p-3 border rounded md:col-span-2 h-32"
            />
            <button
                type="submit"
                className="bg-[#ee9964] text-white py-3 px-6 rounded md:col-span-2 hover:bg-[#e98549] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
  )
}
