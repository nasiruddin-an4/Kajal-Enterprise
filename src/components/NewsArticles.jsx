import { useState } from "react";

const NewsArticles = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const articles = [
    {
      title:
        "Kajal Enterprise Wins Major DAE Contract for Smart Irrigation Systems",
      excerpt:
        "Our company has been awarded a significant contract by the Department of Agriculture Extension to implement IoT-based irrigation systems across 20 districts, marking a milestone in sustainable agriculture technology.",
      image:
        "https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Company News",
      date: "January 15, 2025",
      readTime: "3 min read",
      author: "Md Saiful Islam Khan",
      tags: ["Government Contract", "IoT", "Irrigation", "DAE"],
    },
    {
      title:
        "Revolutionary Zero-Energy Cooling Chambers Reduce Post-Harvest Losses by 40%",
      excerpt:
        "Our innovative cold storage solutions have demonstrated remarkable success in preserving agricultural produce, significantly reducing waste and improving farmer incomes across rural Bangladesh.",
      image:
        "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Technology",
      date: "January 10, 2025",
      readTime: "4 min read",
      author: "Dr. Fatima Khatun",
      tags: ["Cold Storage", "Innovation", "Post-Harvest", "Technology"],
    },
    {
      title: "Solar-Powered Agriculture: Transforming Rural Farming Practices",
      excerpt:
        "Explore how our solar irrigation systems are revolutionizing farming practices, providing sustainable energy solutions that reduce costs and environmental impact while increasing agricultural productivity.",
      image:
        "https://images.pexels.com/photos/2132086/pexels-photo-2132086.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Sustainability",
      date: "January 5, 2025",
      readTime: "5 min read",
      author: "Eng. Nasir Uddin",
      tags: [
        "Solar Energy",
        "Sustainability",
        "Rural Development",
        "Green Technology",
      ],
    },
    {
      title:
        "Partnership with International Tech Companies Strengthens Innovation Capacity",
      excerpt:
        "Strategic partnerships with Sensometer, Radiant Technologies, and Rite Solutions enhance our technological capabilities and expand our service offerings in precision agriculture.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Partnerships",
      date: "December 28, 2024",
      readTime: "3 min read",
      author: "Eng. Rahman Ahmed",
      tags: ["Partnerships", "Technology", "Innovation", "Collaboration"],
    },
    {
      title:
        "Greenhouse Automation: The Future of Controlled Environment Agriculture",
      excerpt:
        "Discover how our advanced greenhouse systems with automated climate control and monitoring are helping farmers achieve optimal growing conditions and maximize crop yields year-round.",
      image:
        "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Technology",
      date: "December 20, 2024",
      readTime: "6 min read",
      author: "Eng. Karim Hassan",
      tags: ["Greenhouse", "Automation", "Climate Control", "Agriculture"],
    },
    {
      title: "Training 10,000+ Farmers in Digital Agriculture Technologies",
      excerpt:
        "Our comprehensive training programs have successfully educated thousands of farmers in modern agricultural techniques, IoT systems, and sustainable farming practices across Bangladesh.",
      image:
        "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Education",
      date: "December 15, 2024",
      readTime: "4 min read",
      author: "Rashida Begum",
      tags: [
        "Training",
        "Education",
        "Digital Agriculture",
        "Capacity Building",
      ],
    },
  ];

  const categories = [
    "all",
    ...new Set(articles.map((article) => article.category)),
  ];

  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  const getCategoryColor = (category) => {
    const colors = {
      "Company News": "bg-blue-100 text-blue-800 border-blue-200",
      Technology: "bg-green-100 text-green-800 border-green-200",
      Sustainability: "bg-emerald-100 text-emerald-800 border-emerald-200",
      Partnerships: "bg-purple-100 text-purple-800 border-purple-200",
      Education: "bg-orange-100 text-orange-800 border-orange-200",
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-green bg-opacity-5 rounded-full -translate-y-36 -translate-x-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 bg-opacity-5 rounded-full translate-y-48 translate-x-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest News & Articles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-brand-green-dark mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest innovations, project achievements, and
            insights into the future of agricultural technology and sustainable
            farming practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-brand-green text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
              }`}
            >
              {category === "all" ? "All Articles" : category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto">
                <img
                  src={filteredArticles[0]?.image}
                  alt={filteredArticles[0]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`px-3 py-1 text-sm rounded-full border ${getCategoryColor(
                      filteredArticles[0]?.category
                    )}`}
                  >
                    {filteredArticles[0]?.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {filteredArticles[0]?.readTime}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {filteredArticles[0]?.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {filteredArticles[0]?.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">
                        {filteredArticles[0]?.author
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {filteredArticles[0]?.author}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {filteredArticles[0]?.date}
                      </p>
                    </div>
                  </div>

                  <button className="bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map((article, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Article Image */}
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

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-green transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-semibold text-xs">
                        {article.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      {article.author}
                    </span>
                  </div>

                  <button className="text-brand-green hover:text-brand-green-dark font-semibold text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-brand-green to-brand-green-dark rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest updates on
              agricultural technology, project announcements, and industry
              insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-brand-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsArticles;
