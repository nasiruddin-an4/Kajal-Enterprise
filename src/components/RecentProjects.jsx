import { Link } from "react-router-dom";
import projectsData from "../data/recentProjects.json";

const RecentProjects = () => {
  // Get only first 4 projects for mobile view
  const projects = projectsData.completedProjects.slice(0, 4);

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
            <Link
              to={`/projects/${project.id}`}
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
              <div className="px-4 py-4">
                {/* Quick Stats */}
                <div className="mb-4">
                  <span className="text-sm text-gray-500 block">Client</span>
                  <h2 className="font-semibold text-gray-900 truncate">
                    {project.client}
                  </h2>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <i className="ri-calendar-line text-brand-green"></i>
                    <span className="text-sm text-gray-600">
                      {project.completedDate}
                    </span>
                  </div>
                  <span className="text-brand-green group-hover:translate-x-1 transition-transform duration-300">
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </div>
            </Link>
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
      </div>
    </section>
  );
};

export default RecentProjects;
