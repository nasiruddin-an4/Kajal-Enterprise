import { useState } from "react";
import { Link } from "react-router-dom";
import homeData from "../data/homePage.json";

const News = () => {
  const { newsArticles } = homeData;
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "all",
    ...new Set(newsArticles.articles.map((article) => article.category)),
  ];

  const filteredArticles = newsArticles.articles.filter((article) => {
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category) => {
    return (
      newsArticles.categories[category]?.color ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green mb-6">
            Latest News & Articles
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Stay updated with our latest agricultural innovations, success
            stories, and industry insights
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-brand-green text-white shadow-md transform -translate-y-0.5"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow"
                  }`}
                >
                  {category === "all" ? "All Articles" : category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-300"
              />
              <svg
                className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
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

        {/* No Results Message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No articles found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
