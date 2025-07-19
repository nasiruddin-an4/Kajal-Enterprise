import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        projectType: "",
        budget: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      title: "Address",
      icon: "📍",
      content: [
        "H # 500, 3rd floor, R # 7, A # 4",
        "Mirpur DOHS, Dhaka - 1216",
        "Bangladesh",
      ],
      color: "bg-brand-blue",
    },
    {
      title: "Email",
      icon: "✉️",
      content: ["kajalenterprise@gmail.com"],
      color: "bg-green-500",
      link: "mailto:kajalenterprise@gmail.com",
    },
    {
      title: "Phone",
      icon: "📞",
      content: ["+880 1795 075 025", "+880 1686 283 657"],
      color: "bg-purple-500",
      links: ["tel:+8801795075025", "tel:+8801686283657"],
    },
    {
      title: "Business Hours",
      icon: "🕒",
      content: [
        "Sunday - Thursday: 9:00 AM - 6:00 PM",
        "Friday: Closed",
        "Saturday: 10:00 AM - 4:00 PM",
      ],
      color: "bg-orange-500",
    },
  ];

  const services = [
    "Greenhouse & Polynet Houses",
    "Cold Storage Solutions",
    "IoT Irrigation Systems",
    "Solar Power Systems",
    "Agricultural Equipment Import",
    "Garment Accessories Supply",
    "Consulting Services",
    "Other",
  ];

  const budgetRanges = [
    "Under $10K",
    "$10K - $50K",
    "$50K - $100K",
    "$100K - $500K",
    "$500K+",
    "To be discussed",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in">
              Ready to transform your agricultural projects? Let's discuss how
              we can help you succeed
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">24/7 Support</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">Free Consultation</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <span className="text-2xl">{info.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.content.map((item, idx) => (
                    <div key={idx}>
                      {info.links && info.links[idx] ? (
                        <a
                          href={info.links[idx]}
                          className="text-brand-green hover:underline block"
                        >
                          {item}
                        </a>
                      ) : info.link && idx === 0 ? (
                        <a
                          href={info.link}
                          className="text-brand-green hover:underline block"
                        >
                          {item}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm">{item}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours. For urgent matters, please call us directly.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">✅</span>
                    <span>
                      Thank you! Your message has been sent successfully. We'll
                      get back to you soon.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors"
                    placeholder="Enter the subject of your inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors"
                    placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-brand-green hover:bg-brand-green transform hover:scale-105"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Visit Our Office
                </h2>
                <p className="text-gray-600">
                  We welcome you to visit our office for face-to-face
                  consultations. Please schedule an appointment in advance.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Mirpur DOHS, Dhaka</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-brand-green mr-3">📧</span>
                    <a
                      href="mailto:kajalenterprise@gmail.com"
                      className="text-brand-green hover:underline"
                    >
                      kajalenterprise@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-brand-green mr-3">📱</span>
                    <div>
                      <a
                        href="tel:+8801795075025"
                        className="text-brand-green hover:underline block"
                      >
                        +880 1795 075 025
                      </a>
                      <a
                        href="tel:+8801686283657"
                        className="text-brand-green hover:underline block"
                      >
                        +880 1686 283 657
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand-green mr-3 mt-1">📍</span>
                    <div>
                      <p className="text-gray-700">
                        H # 500, 3rd floor, R # 7, A # 4
                      </p>
                      <p className="text-gray-700">Mirpur DOHS, Dhaka - 1216</p>
                      <p className="text-gray-700">Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 bg-red-50 border border-red-200 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">
                  Emergency Support
                </h4>
                <p className="text-red-700 text-sm mb-2">
                  For urgent technical support or emergency situations:
                </p>
                <a
                  href="tel:+8801795075025"
                  className="text-red-600 font-semibold hover:underline"
                >
                  +880 1795 075 025 (24/7)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our services and processes
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What types of agricultural projects do you handle?",
                answer:
                  "We specialize in greenhouse installations, cold storage solutions, IoT-based irrigation systems, solar power integration, and agricultural equipment import. We also provide consulting services for sustainable farming practices.",
              },
              {
                question: "How long does a typical project take to complete?",
                answer:
                  "Project timelines vary depending on scope and complexity. Small installations typically take 2-4 weeks, while larger government contracts may take 3-6 months. We provide detailed timelines during the consultation phase.",
              },
              {
                question: "Do you provide maintenance and support services?",
                answer:
                  "Yes, we offer comprehensive maintenance packages for all our installations. This includes regular inspections, technical support, spare parts supply, and emergency repair services.",
              },
              {
                question: "Can you work with international clients?",
                answer:
                  "Absolutely! We have experience with import/export operations and can work with international clients. We handle all necessary documentation and compliance requirements.",
              },
              {
                question: "What is your payment structure?",
                answer:
                  "We typically work with a milestone-based payment structure: 30% advance, 40% during installation, and 30% upon completion. Payment terms can be customized based on project requirements.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
