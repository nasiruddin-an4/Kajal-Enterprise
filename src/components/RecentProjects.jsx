import { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/recentProjects.json";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const projects = projectsData.projects;

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
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green bg-opacity-5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 bg-opacity-5 rounded-full translate-y-32 -translate-x-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recent Completed Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-brand-green-dark mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing our latest successful implementations that have
            transformed agricultural practices and improved farmer livelihoods
            across Bangladesh.
          </p>
        </div>

        {/* Projects Grid - Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white text-base font-bold mb-1 truncate">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-xs truncate">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Project Content - Compact */}
              <div className="p-4">
                <p className="text-gray-600 mb-2 text-sm truncate">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-medium text-gray-900">
                    {project.client}
                  </span>
                  <span className="text-brand-green font-bold">
                    {project.budget}
                  </span>
                </div>
                <button
                  className="text-brand-green hover:text-brand-green-dark font-semibold text-xs transition-colors"
                  onClick={() => openModal(project)}
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {modalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 pt-14 flex items-center justify-center p-4 bg-black bg-opacity-40 overflow-y-auto">
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-4 md:p-6 lg:p-8 relative animate-fade-in-up my-8"
              onClick={(e) => e.stopPropagation()}
            >
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
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Client", value: selectedProject.client },
                      { label: "Duration", value: selectedProject.duration },
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
                    <p className="text-gray-600">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-brand-green bg-opacity-10 text-brand-green px-3 py-1.5 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Key Results
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
                        to={`/projects/${selectedProject.title
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="inline-flex items-center text-brand-green hover:text-brand-green-dark font-semibold text-sm"
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

        {/* View All Projects CTA */}
        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Projects
            <svg
              className="w-5 h-5 ml-2"
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
      </div>
    </section>
  );
};

export default RecentProjects;
