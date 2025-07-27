import { useState } from "react";
import contactData from "../data/contact.json";

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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFAQ, setOpenFAQ] = useState(null);

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
      content: ["info@kajalenterprise.com.bd "],
      color: "bg-green-500",
      link: "mailto:info@kajalenterprise.com.bd ",
    },
    {
      title: "Phone",
      icon: "📞",
      content: ["+880 1795 075 025", "+880 1686 283 657"],
      color: "bg-purple-500",
      links: ["tel:+8801795075025", "tel:+8801686283657"],
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

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-green to-green-900 text-white py-20">
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
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
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
                        <p className="text-gray-500 text-sm">{item}</p>
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
                <p className="text-gray-500">
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
                <p className="text-gray-500">
                  We welcome you to visit our office for face-to-face
                  consultations. Please schedule an appointment in advance.
                </p>
              </div>

              {/* Map with Office Location */}
              <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.4961116947943!2d90.36753159999999!3d23.8365108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1001d1ca385%3A0xd3ef37c79802f308!2sKajal%20Enterprise!5e0!3m2!1sen!2sbd!4v1753354247446!5m2!1sen!2sbd"
                  className="w-full h-[400px]"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
                      href="mailto:info@kajalenterprise.com.bd "
                      className="text-brand-green hover:underline"
                    >
                      info@kajalenterprise.com.bd
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

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-green mb-4">
              {contactData.faq.heading}
            </h2>
            <p className="text-xl text-gray-600">
              {contactData.faq.subheading}
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(contactData.faq.categories).map(([key, value]) => (
              <button
                key={key}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${
              selectedCategory === key
                ? "bg-brand-green text-white shadow-lg transform -translate-y-0.5"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
                onClick={() => setSelectedCategory(key)}
              >
                {value}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="grid gap-6">
            {contactData.faq.questions
              .filter(
                (q) =>
                  selectedCategory === "all" || q.category === selectedCategory
              )
              .map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <button
                    className="w-full text-left px-6 py-4 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{faq.icon}</span>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {faq.question}
                        </h3>
                      </div>
                      <span
                        className={`transform transition-transform duration-300
                  ${openFAQ === index ? "rotate-180" : "rotate-0"}`}
                      >
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>
                  <div
                    className={`px-6 pb-4 transition-all duration-300 ease-in-out
                ${
                  openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
                  >
                    <div className="pl-12">
                      <div className="border-l-2 border-brand-green/20 pl-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
