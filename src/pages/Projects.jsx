import { useState, useEffect } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const upcomingProjects = [
    {
      title: "Data Centre",
      description:
        "Modern data processing facility for agricultural information management and analysis with cloud integration and real-time monitoring capabilities.",
      timeline: "Q2 2025",
      category: "Infrastructure",
      icon: "💾",
      status: "Planning",
      budget: "$500K",
      features: [
        "Cloud Integration",
        "Real-time Analytics",
        "Data Security",
        "Scalable Architecture",
      ],
    },
    {
      title: "IT Infrastructure for Processing Fruits & Vegetables",
      description:
        "Automated systems for quality control and processing optimization using AI and machine learning technologies.",
      timeline: "Q3 2025",
      category: "Technology",
      icon: "🖥️",
      status: "Design Phase",
      budget: "$750K",
      features: [
        "AI Quality Control",
        "Automated Sorting",
        "Process Optimization",
        "Traceability System",
      ],
    },
    {
      title: "VHT Centre",
      description:
        "Village Health and Technology center for rural community support with telemedicine and digital literacy programs.",
      timeline: "Q4 2025",
      category: "Community",
      icon: "🏥",
      status: "Proposal",
      budget: "$300K",
      features: [
        "Telemedicine",
        "Digital Literacy",
        "Community Support",
        "Health Monitoring",
      ],
    },
    {
      title: "Vertical Farming",
      description:
        "Multi-level farming systems for maximized agricultural production in limited space using hydroponic technology.",
      timeline: "Q1 2026",
      category: "Innovation",
      icon: "🌱",
      status: "Research",
      budget: "$1.2M",
      features: [
        "Hydroponic Systems",
        "LED Lighting",
        "Climate Control",
        "Automated Harvesting",
      ],
    },
    {
      title: "Automated Packaging Belts",
      description:
        "Smart packaging systems for efficient product handling and distribution with IoT integration and quality assurance.",
      timeline: "Q2 2026",
      category: "Automation",
      icon: "📦",
      status: "Concept",
      budget: "$400K",
      features: [
        "IoT Integration",
        "Quality Assurance",
        "Automated Sorting",
        "Real-time Tracking",
      ],
    },
    {
      title: "Smart Greenhouse Network",
      description:
        "Interconnected greenhouse systems with centralized monitoring and control for optimal crop production.",
      timeline: "Q3 2026",
      category: "Infrastructure",
      icon: "🏠",
      status: "Planning",
      budget: "$800K",
      features: [
        "Centralized Control",
        "Climate Monitoring",
        "Automated Irrigation",
        "Crop Analytics",
      ],
    },
  ];

  const completedProjects = [
    {
      title: "CSAWM Implementation",
      description:
        "Climate Smart Agriculture Water Management system deployed across 15 districts with IoT sensors and automated irrigation.",
      completedDate: "December 2023",
      category: "Government",
      icon: "💧",
      client: "Department of Agriculture Extension",
      impact: "15 Districts Covered",
      features: [
        "IoT Sensors",
        "Water Management",
        "Climate Monitoring",
        "Farmer Training",
      ],
    },
    {
      title: "Solar Irrigation Systems",
      description:
        "Installation of 50+ solar-powered irrigation systems promoting sustainable farming practices across rural Bangladesh.",
      completedDate: "August 2024",
      category: "Sustainability",
      icon: "☀️",
      client: "Multiple Farmers",
      impact: "50+ Installations",
      features: [
        "Solar Power",
        "Water Efficiency",
        "Remote Monitoring",
        "Maintenance Support",
      ],
    },
    {
      title: "Cold Storage Facilities",
      description:
        "Zero energy cooling chambers for agricultural produce preservation reducing post-harvest losses by 40%.",
      completedDate: "June 2024",
      category: "Infrastructure",
      icon: "❄️",
      client: "Agricultural Cooperatives",
      impact: "40% Loss Reduction",
      features: [
        "Zero Energy",
        "Temperature Control",
        "Humidity Management",
        "Quality Preservation",
      ],
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Infrastructure: "bg-blue-100 text-blue-800 border-blue-200",
      Technology: "bg-green-100 text-green-800 border-green-200",
      Community: "bg-purple-100 text-purple-800 border-purple-200",
      Innovation: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Automation: "bg-red-100 text-red-800 border-red-200",
      Government: "bg-indigo-100 text-indigo-800 border-indigo-200",
      Sustainability: "bg-emerald-100 text-emerald-800 border-emerald-200",
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getStatusColor = (status) => {
    const colors = {
      Planning: "bg-blue-500",
      "Design Phase": "bg-yellow-500",
      Proposal: "bg-purple-500",
      Research: "bg-green-500",
      Concept: "bg-gray-500",
    };
    return colors[status] || "bg-gray-500";
  };

  const filteredProjects = upcomingProjects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    "all",
    ...new Set(upcomingProjects.map((p) => p.category)),
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".observe-animation");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in">
              Innovative solutions shaping the future of agriculture and
              technology integration
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
              <div className="bg-brand-green bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">6 Upcoming Projects</span>
              </div>
              <div className="bg-brand-green bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">3 Completed Projects</span>
              </div>
              <div className="bg-brand-green bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">$4M+ Investment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Completed Projects
            </h2>
            <div className="w-20 h-1 bg-brand-green mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Successful implementations that have made a real impact on
              agricultural productivity and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 observe-animation opacity-0"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{project.icon}</div>
                    <span
                      className={`px-3 py-1 text-xs rounded-full border ${getCategoryColor(
                        project.category
                      )}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Client:</span>
                      <span className="font-medium text-gray-900">
                        {project.client}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Impact:</span>
                      <span className="font-medium text-brand-green">
                        {project.impact}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Completed:</span>
                      <span className="font-medium text-gray-900">
                        {project.completedDate}
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Projects
            </h2>
            <div className="w-20 h-1 bg-brand-green mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative pipeline of projects that will shape the future of
              agriculture and technology integration
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-brand-green text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                    }`}
                  >
                    {category === "all" ? "All Projects" : category}
                  </button>
                ))}
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 observe-animation opacity-0"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{project.icon}</div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`px-3 py-1 text-xs rounded-full border ${getCategoryColor(
                          project.category
                        )}`}
                      >
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <div
                          className={`w-2 h-2 rounded-full ${getStatusColor(
                            project.status
                          )}`}
                        ></div>
                        <span className="text-xs text-gray-500">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Timeline:</span>
                      <span className="font-medium text-gray-900">
                        {project.timeline}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Budget:</span>
                      <span className="font-medium text-brand-green">
                        {project.budget}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Status:</span>
                      <span className="font-medium text-gray-900">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Innovation Statement */}
      <section className="py-16 bg-gradient-to-r from-brand-green to-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Innovation at the Core</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            These projects represent our commitment to bringing cutting-edge
            technology to Bangladesh's agricultural sector, creating sustainable
            solutions for farmers and contributing to national food security.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Sustainability",
              "Technology",
              "Innovation",
              "Growth",
              "Impact",
              "Future",
            ].map((tag) => (
              <div
                key={tag}
                className="bg-white bg-opacity-20 px-6 py-3 rounded-full"
              >
                <span className="font-medium">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Project Timeline
            </h3>
            <p className="text-gray-600">
              Roadmap for our upcoming innovations
            </p>
          </div>
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
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-semibold text-gray-900">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {project.timeline}
                      </p>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded ${getCategoryColor(
                          project.category
                        )}`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-brand-green rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
