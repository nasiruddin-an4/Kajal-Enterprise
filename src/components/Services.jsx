const Services = () => {
  const governmentServices = [
    {
      title: "Greenhouse and Polynet Houses",
      description:
        "Advanced controlled environment agriculture solutions for optimal crop production",
      icon: "🏠",
    },
    {
      title: "Cold Rooms & Zero Energy Cooling Chambers",
      description:
        "Energy-efficient storage solutions for agricultural produce preservation",
      icon: "❄️",
    },
    {
      title: "Garlic & Onion Storage",
      description:
        "Specialized storage systems designed for bulb vegetables with optimal ventilation",
      icon: "🧄",
    },
    {
      title: "Precision Agriculture (IoT based irrigation)",
      description:
        "Smart irrigation systems with sensors and automated controls for water efficiency",
      icon: "💧",
    },
    {
      title: "Solar Powered Irrigation System",
      description:
        "Sustainable irrigation solutions powered by renewable solar energy",
      icon: "☀️",
    },
  ];

  const importExportServices = [
    {
      title: "Agriculture Equipment",
      description: "Import and supply of modern farming machinery and tools",
      icon: "🚜",
    },
    {
      title: "Electronics",
      description:
        "Electronic components and devices for agricultural and industrial use",
      icon: "📱",
    },
    {
      title: "Construction Materials",
      description:
        "Quality building materials for agricultural infrastructure projects",
      icon: "🏗️",
    },
    {
      title: "Garment Accessories",
      description:
        "Supply of garment accessories through SNT Corporation partnership",
      icon: "👔",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Products & Services
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-400 mx-auto rounded-full"></div>
        </div>

        {/* Government Tenders */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
            Government Tenders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governmentServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-brand-green transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Import & Export */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
            Import & Export
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importExportServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-4xl mb-5 text-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-brand-green/10 to-emerald-500/10 p-12 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Agriculture?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Contact us today to learn more about our innovative solutions
                and how we can help your agricultural projects succeed.
              </p>
              <button className="bg-brand-green hover:bg-brand-green text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
