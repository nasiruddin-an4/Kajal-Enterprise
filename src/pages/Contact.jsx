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
    setSubmitStatus(null);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx0DSDd9840QjfU9efFoFx2zQ47FuiEKva64Eh-3sHsoNRsU0hxsrQ-DwJHun4unMbpew/exec', {
        method: 'POST',
        body: new URLSearchParams({
          'Name': formData.name,
          'Email': formData.email,
          'Phone': formData.phone,
          'Company': formData.company,
          'Subject': formData.subject,
          'Message': formData.message,
        }),
      });

      const result = await response.json();

      if (result.result === 'success') {
        setSubmitStatus('success');
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
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
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
      content: ["info@kajalenterprise.com.bd"],
      color: "bg-green-500",
      link: "mailto:info@kajalenterprise.com.bd",
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">❌</span>
                    <span>
                      Something went wrong. Please try again or contact us directly.
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

              <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.4961116947943!2d90.36753159999999!3d23.8365108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1001d1ca385%3A0xd3ef37c79802f308!2sKajal%20Enterprise!5e0!3m2!1sen!2sbd!4v1753354247446!5m2!1sen!2sbd"
                  className="w-full h-[600px]"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;