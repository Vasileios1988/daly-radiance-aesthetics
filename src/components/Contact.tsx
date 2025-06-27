import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mvgrrbgk', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' }); // clear fields
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting the form.');
    }
  };

  return (
      <div id="contact" className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brandPink mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            We’d love to hear from you. Fill in the form and we’ll get back to you shortly.
          </p>

          {submitted ? (
              <p className="text-green-600 font-semibold">Thank you! Your message has been sent.</p>
          ) : (
              <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="p-3 border rounded"
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="p-3 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-3 border rounded md:col-span-2"
                />
                <textarea
                    name="message"
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={handleChange}
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
          )}
        </div>
      </div>
  );
}
