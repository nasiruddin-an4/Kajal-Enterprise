import { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/recentProjects.json";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Get only first 4 projects for mobile view
  const projects = projectsData.completedProjects.slice(0, 4);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-green mb-6">
            Recent Completed Projects
          </h2>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Showcasing our latest successful implementations that have
            transformed agricultural practices and improved farmer livelihoods
            across Bangladesh.
          </p>
        </div>

        {/* Improved Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-brand-green px-3 py-1.5 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-xl">
                  {project.icon}
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-md font-semibold truncate">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm truncate">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="px-4 py-2">
                {/* Quick Stats */}
                <span className="text-sm text-gray-500 block">Client</span>
                <h2 className="font-semibold text-gray-900 truncate block mb-4">
                  {project.client}
                </h2>

                <div className="mb-5 flex gap-2 justify-content-center align-items-center">
                  <span className="text-sm text-gray-500">Budget:</span>
                  <h2 className="font-bold text-brand-green truncate">
                    {project.budget}
                  </h2>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => openModal(project)}
                  className="w-full bg-brand-green hover:bg-opacity-90 text-white px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center justify-center group"
                >
                  <span>View Details</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA - Updated */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="inline-flex items-center bg-brand-green hover:opacity-90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl gap-2"
          >
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Modal - update to use new data structure */}
        {modalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 pt-14 flex items-center justify-center p-4 bg-black bg-opacity-40 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-4 md:p-6 lg:p-8 relative animate-fade-in-up my-8">
              {/* Close Button */}
              <button
                className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-500 hover:text-brand-green transition-colors z-10"
                onClick={closeModal}
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column - Image & Basic Info */}
                <div>
                  <div className="relative rounded-xl overflow-hidden mb-4 aspect-video">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Client", value: selectedProject.client },
                      { label: "Location", value: selectedProject.location },
                      {
                        label: "Budget",
                        value: selectedProject.budget,
                        highlight: true,
                      },
                      {
                        label: "Impact",
                        value: selectedProject.impact,
                        highlight: true,
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-xs text-gray-500 block mb-1">
                          {item.label}
                        </span>
                        <p
                          className={`font-semibold ${
                            item.highlight
                              ? "text-brand-green"
                              : "text-gray-900"
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {selectedProject.title}
                    </h3>
                    <p className="text-brand-green font-semibold mb-3">
                      {selectedProject.subtitle}
                    </p>
                    <p className="text-gray-500">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-brand-green bg-opacity-10 text-brand-green px-3 py-1.5 rounded-lg text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-700 bg-gray-50 p-2 rounded-lg"
                        >
                          <svg
                            className="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500 block">
                          Completed:
                        </span>
                        <p className="font-semibold text-gray-900">
                          {selectedProject.completedDate}
                        </p>
                      </div>
                      <Link
                        to={`/projects/${selectedProject.id}`}
                        className="inline-flex items-center text-brand-green hover:text-brand-green font-semibold text-sm"
                      >
                        View Full Case Study
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
