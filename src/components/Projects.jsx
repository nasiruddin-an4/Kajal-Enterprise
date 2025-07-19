const Projects = () => {
  const upcomingProjects = [
    {
      title: "Data Centre",
      description:
        "Modern data processing facility for agricultural information management and analysis",
      timeline: "Q2 2025",
      category: "Infrastructure",
      icon: "💾",
    },
    {
      title: "IT infrastructure for processing fruits & vegetables",
      description:
        "Automated systems for quality control and processing optimization",
      timeline: "Q3 2025",
      category: "Technology",
      icon: "🖥️",
    },
    {
      title: "VHT Centre",
      description:
        "Village Health and Technology center for rural community support",
      timeline: "Q4 2025",
      category: "Community",
      icon: "🏥",
    },
    {
      title: "Vertical Farming",
      description:
        "Multi-level farming systems for maximized agricultural production in limited space",
      timeline: "Q1 2026",
      category: "Innovation",
      icon: "🌱",
    },
    {
      title: "Automated Packaging Belts",
      description:
        "Smart packaging systems for efficient product handling and distribution",
      timeline: "Q2 2026",
      category: "Automation",
      icon: "📦",
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Infrastructure: "bg-blue-100 text-brand-blue",
      Technology: "bg-green-100 text-green-800",
      Community: "bg-gray-50 text-brand-blue",
      Innovation: "bg-gray-50 text-yellow-800",
      Automation: "bg-red-100 text-red-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Projects
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-4"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover our innovative pipeline of projects that will shape the
            future of agriculture and technology integration in Bangladesh.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{project.icon}</div>
                <div className="flex flex-col items-end">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${getCategoryColor(
                      project.category
                    )}`}
                  >
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500 mt-1">
                    {project.timeline}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-brand-green">
                    Expected Launch
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {project.timeline}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Innovation Statement */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-brand-green to-brand-green-dark p-8 rounded-lg text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Innovation at the Core
            </h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              These upcoming projects represent our commitment to bringing
              cutting-edge technology to Bangladesh's agricultural sector,
              creating sustainable solutions for farmers and contributing to
              national food security.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Sustainability</span>
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Technology</span>
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Innovation</span>
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Project Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-green"></div>
            <div className="space-y-8">
              {upcomingProjects.map((project, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-900">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {project.timeline}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-brand-green rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
