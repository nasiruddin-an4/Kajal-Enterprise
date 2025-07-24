import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import projectsData from "../data/recentProjects.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProject = projectsData.completedProjects.find(
      (p) => p.id === id
    );
    setProject(foundProject);
    setLoading(false);
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
          <Link to="/" className="text-brand-green hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
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

        {/* Project Hero */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="relative h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="bg-white/90 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="text-4xl font-bold text-white mb-2">
                {project.title}
              </h1>
              <p className="text-white/90 text-xl">{project.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Project Description */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Features */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-brand-green text-sm"></i>
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Results */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Project Results
              </h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-4">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-arrow-right-line text-brand-green"></i>
                      </div>
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Project Details
              </h3>

              {/* Project Stats */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-500 block mb-1">
                    Client
                  </span>
                  <p className="font-semibold text-gray-900">
                    {project.client}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-500 block mb-1">
                    Location
                  </span>
                  <p className="font-semibold text-gray-900">
                    {project.location}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-500 block mb-1">
                    Budget
                  </span>
                  <p className="font-semibold text-brand-green">
                    {project.budget}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-500 block mb-1">
                    Impact
                  </span>
                  <p className="font-semibold text-brand-green">
                    {project.impact}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-500 block mb-1">
                    Completed Date
                  </span>
                  <p className="font-semibold text-gray-900">
                    {project.completedDate}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t">
                <Link
                  to="/contact"
                  className="block w-full bg-brand-green hover:bg-opacity-90 text-white text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Start Similar Project
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
