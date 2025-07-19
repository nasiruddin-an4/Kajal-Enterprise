const Partners = () => {
  const partners = [
    {
      name: "Sensometer",
      description: "Advanced sensor technology for precision agriculture",
      logo: "S",
    },
    {
      name: "Radiant Technologies",
      description:
        "Innovative technology solutions for agricultural applications",
      logo: "R",
    },
    {
      name: "Rite Solutions",
      description: "Comprehensive solutions for agricultural infrastructure",
      logo: "RS",
    },
  ];

  const daeProjects = [
    {
      name: "CSAWM",
      fullName: "Climate Smart Agriculture Water Management",
      status: "Completed",
    },
    {
      name: "SADDRP",
      fullName:
        "Sustainable Agricultural Development and Disaster Recovery Project",
      status: "Ongoing",
    },
    {
      name: "AIGA",
      fullName: "Agricultural Infrastructure Growth and Advancement",
      status: "Completed",
    },
    {
      name: "SMART",
      fullName: "Sustainable Modern Agriculture and Rural Technology",
      status: "Ongoing",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partners & Clients
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto"></div>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Our Strategic Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {partner.logo}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h4>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Major Client */}
        <div className="mb-16">
          <div className="bg-brand-green bg-opacity-5 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Major Client
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-sm inline-block">
              <h4 className="text-xl font-bold text-brand-green mb-2">
                Department of Agriculture Extension (DAE)
              </h4>
              <p className="text-gray-600">
                Under Ministry of Agriculture, Government of Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* DAE Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Key DAE Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {daeProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-brand-green p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {project.name}
                  </h4>
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-brand-blue"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{project.fullName}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16">
          <div className="bg-gray-900 text-white p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="text-3xl font-bold text-brand-green-light mb-2">
                  50+
                </h4>
                <p className="text-sm">Successful Projects</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-brand-green-light mb-2">
                  3
                </h4>
                <p className="text-sm">Strategic Partners</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-brand-green-light mb-2">
                  7
                </h4>
                <p className="text-sm">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-brand-green-light mb-2">
                  100%
                </h4>
                <p className="text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
