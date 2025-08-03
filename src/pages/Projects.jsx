import { useEffect } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/recentProjects.json";

const Projects = () => {
  const categories = [
    "all",
    ...new Set([
      ...projectsData.upcomingProjects.map((p) => p.category),
      ...projectsData.completedProjects.map((p) => p.category),
    ]),
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Infrastructure: "bg-blue-100 text-brand-blue border-brand-blue",
      Technology: "bg-green-100 text-green-800 border-green-200",
      Community: "bg-gray-50 text-brand-blue border-purple-200",
      Innovation: "bg-gray-50 text-yellow-800 border-yellow-200",
      Automation: "bg-red-100 text-red-800 border-red-200",
      Government: "bg-indigo-100 text-indigo-800 border-indigo-200",
      Sustainability: "bg-gray-50 text-brand-green border-emerald-200",
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getStatusColor = (status) => {
    const colors = {
      Planning: "bg-brand-blue",
      "Design Phase": "bg-yellow-500",
      Proposal: "bg-purple-500",
      Research: "bg-green-500",
      Concept: "bg-gray-500",
    };
    return colors[status] || "bg-gray-500";
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "50px 0px", // Changed to trigger earlier
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("animate-fade-in-up");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".observe-animation");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('public/slide-1.jpg')",
              filter: "brightness(0.4)",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
              Transforming Agriculture
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto animate-slide-in leading-relaxed">
              Through innovative solutions and sustainable technology
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
              {[
                {
                  label: "Districts Impacted",
                  value: projectsData.statistics.districtsImpacted,
                  icon: "🗺️",
                },
                {
                  label: "Farmers Benefited",
                  value: projectsData.statistics.farmersBenefited,
                  icon: "👨‍🌾",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects - Enhanced */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-green mb-4">
              Completed Projects
            </h2>

            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Successfully delivered solutions that have transformed
              agricultural practices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {projectsData.completedProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-white/80">{project.subtitle}</p>
                  </div>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-2 gap-2 mb-1">
                    {[
                      // { label: "Budget", value: project.budget },
                      { label: "Impact", value: project.impact },
                      { label: "Location", value: project.location },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-50 p-2 rounded-lg">
                        <span className="text-sm text-gray-500 block ">
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <svg
                            className="w-5 h-5 text-brand-green"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="w-full bg-brand-green hover:bg-brand-green text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2 group"
                  >
                    <span>View Details</span>
                    <i className="ri-arrow-right-line transform group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-green mb-4">
              Upcoming Projects
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Emerging technologies that we plan to incorporate in the future
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.upcomingProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 observe-animation opacity-0 border"
              >
                {/* Project Image */}
                <div className="relative h-48 rounded-t-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-3xl">{project.icon}</span>
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${getCategoryColor(
                        project.category
                      )}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-xs text-gray-500 block mb-1">
                        Timeline
                      </span>
                      <span className="font-semibold text-gray-900">
                        {project.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Features Tags */}
                  <div className="border-t pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-brand-green/10 text-brand-green text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="mt-6 w-full bg-brand-green hover:bg-brand-green text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2 group"
                  >
                    <span>View Details</span>
                    <i className="ri-arrow-right-line transform group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Statement */}
      <section className="py-16 bg-gradient-to-r from-brand-green to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Innovation at the Core</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            These projects represent our commitment to bringing cutting-edge
            technology to Bangladeshs agricultural sector, creating sustainable
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
    </div>
  );
};

export default Projects;
