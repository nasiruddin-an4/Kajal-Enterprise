import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import homeData from "../data/homePage.json";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentArticle = homeData.newsArticles.articles.find(
      (a) => a.id === id
    );
    setArticle(currentArticle);

    // Get related articles from the same category
    if (currentArticle) {
      const related = homeData.newsArticles.articles
        .filter((a) => a.category === currentArticle.category && a.id !== id)
        .slice(0, 3);
      setRelatedArticles(related);
    }

    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h2>
          <Link to="/news" className="text-brand-green hover:underline">
            Return to News
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
              <Link to="/news" className="text-gray-500 hover:text-brand-green">
                News
              </Link>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-brand-green">{article.title}</span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Header */}
            <div className="mb-8">
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full border ${
                  homeData.newsArticles.categories[article.category]?.color ||
                  "bg-gray-100 text-gray-800 border-gray-200"
                }`}
              >
                {article.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {article.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {article.author}
                  </h3>
                  <p className="text-gray-500 text-sm">{article.authorRole}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Articles */}
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Related Articles
              </h3>
              <div className="space-y-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/news/${related.id}`}
                    className="group block"
                  >
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-brand-green transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <span className="text-xs text-gray-500 mt-1 block">
                          {related.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
