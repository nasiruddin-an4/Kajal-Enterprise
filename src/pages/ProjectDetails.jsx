import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import projectsData from "../data/recentProjects.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findProject = () => {
      const completed = projectsData.completedProjects.find((p) => p.id === id);
      const upcoming = projectsData.upcomingProjects.find((p) => p.id === id);
      setProject(completed || upcoming);
      setLoading(false);
    };

    findProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h2>
          <Link to="/projects" className="text-brand-green hover:underline">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-brand-green">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
              <Link
                to="/projects"
                className="text-gray-500 hover:text-brand-green"
              >
                Projects
              </Link>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-brand-green">{project.title}</span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-3xl">
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                  project.status
                    ? "bg-brand-green text-white"
                    : "bg-white text-brand-green"
                }`}
              >
                {project.category}
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90">{project.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1">
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
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results/Impact */}
              {project.results && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Project Results
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <ul className="space-y-4">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1">
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
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Project Details
              </h3>

              <div className="space-y-4">
                {/* <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-500 block mb-1">
                    Budget
                  </span>
                  <span className="font-semibold text-brand-green">
                    {project.budget}
                  </span>
                </div> */}

                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-500 block mb-1">
                    Timeline
                  </span>
                  <span className="font-semibold text-gray-900">
                    {project.timeline || project.completedDate}
                  </span>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-500 block mb-1">
                    Location
                  </span>
                  <span className="font-semibold text-gray-900">
                    {project.location}
                  </span>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-500 block mb-1">
                    Impact
                  </span>
                  <span className="font-semibold text-gray-900">
                    {project.impact}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t">
                <Link
                  to="/contact"
                  className="block w-full bg-brand-green hover:bg-opacity-90 text-white text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Discuss Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
