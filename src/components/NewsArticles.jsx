import { Link } from "react-router-dom";
import homeData from "../data/homePage.json";

const NewsArticles = () => {
  const { newsArticles } = homeData;

  const latestArticles = newsArticles.articles.slice(0, 3);

  const getCategoryColor = (category) => {
    return (
      newsArticles.categories[category]?.color ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-green bg-opacity-5 rounded-full -translate-y-36 -translate-x-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue bg-opacity-5 rounded-full translate-y-48 translate-x-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-green mb-5">
            {newsArticles.heading}
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            {newsArticles.subheading}
          </p>
        </div>
        {/* Latest Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <Link
              key={article.id}
              to={`/news/${article.id}`}
              className="group bg-white rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full border ${getCategoryColor(
                      article.category
                    )}`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-green transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-2">
                  {article.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-50 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-semibold text-xs">
                        {article.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <span className="text-gray-900 text-sm font-medium">
                      {article.author}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            to="/news"
            className="inline-flex items-center bg-brand-green hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 gap-2"
          >
            View All Articles
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

export default NewsArticles;
