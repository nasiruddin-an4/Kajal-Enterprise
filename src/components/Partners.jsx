import { useState } from "react";
import homeData from "../data/homePage.json";

const Partners = () => {
  const { partners } = homeData;
  const [hoveredPartner, setHoveredPartner] = useState(null);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-green mb-4">
            {partners.heading}
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            {partners.subheading}
          </p>
        </div>

        {/* Enhanced Partners Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Our Strategic Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.strategicPartners.map((partner) => (
              <div
                key={partner.id}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
                onMouseEnter={() => setHoveredPartner(partner.id)}
                onMouseLeave={() => setHoveredPartner(null)}
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-brand-green to-brand-blue text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {partner.logoText}
                  </div>
                  <div className="absolute top-0 right-0">
                    <span className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-sm">
                      Since {partner.since}
                    </span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-gray-600">{partner.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl text-center">
                    <span className="text-sm text-gray-500 block">
                      Projects
                    </span>
                    <span className="font-bold text-brand-green">
                      {partner.projects}+
                    </span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl text-center">
                    <span className="text-sm text-gray-500 block">
                      Category
                    </span>
                    <span className="font-bold text-brand-blue">
                      {partner.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Major Client Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-brand-green/5 to-brand-blue/5 p-12 rounded-3xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Major Client
              </h3>
              <div className="w-16 h-1 bg-brand-green mx-auto"></div>
            </div>

            <div className=" p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-2xl font-bold text-brand-green mb-2">
                    {partners.majorClient.name}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {partners.majorClient.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {partners.majorClient.achievements.map(
                      (achievement, index) => (
                        <span
                          key={index}
                          className="bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {achievement}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <img
                  src={partners.majorClient.logo}
                  alt={partners.majorClient.name}
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced DAE Projects Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key DAE Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.daeProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border-l-4 border-brand-green p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {project.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{project.fullName}</p>
                  </div>
                  <span
                    className={`px-4 py-1.5 text-sm rounded-full font-medium ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-brand-blue"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-500 block">
                      Duration
                    </span>
                    <span className="font-semibold text-gray-900">
                      {project.duration}
                    </span>
                  </div>
                  {/* <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-500 block">Budget</span>
                    <span className="font-semibold text-brand-green">
                      {project.budget}
                    </span>
                  </div> */}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-500 block">Impact</span>
                    <span className="font-semibold text-brand-blue">
                      {project.impact}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
