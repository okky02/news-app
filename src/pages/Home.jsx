import { useEffect, useState } from "react";
import { getNews } from "../services/newsApi";
import Navbar from "../components/Navbar";
import CategoryFilter from "../components/home/CategoryFilter";
import NewsCard from "../components/home/NewsCard";
import Pagination from "../components/home/Pagination";
import HeroSlider from "../components/home/HeroSlider";
import Footer from "../components/Footer";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const highlightNews = articles.slice(0, 5);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    setLoading(true);
    getNews(category)
      .then((data) => {
        setArticles(data);
        setCurrentPage(1);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [category]);

  const filteredArticles = articles.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] transition-colors duration-300">
      <Navbar search={search} setSearch={setSearch} />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-2 w-full">

        {!category &&
          (loading ? (
            <div className="w-full max-w-7xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl relative bg-gray-300 dark:bg-gray-700">
              <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600"></div>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
          ) : (
            <HeroSlider highlightNews={highlightNews} />
          ))}

        <CategoryFilter
          category={category}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
        />

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-md"
              >
                <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/4 mt-4"></div>
                </div>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            ))}
          </div>
        ) : currentArticles.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentArticles.map((item, i) => (
                <NewsCard key={i} item={item} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <p className="text-center text-[var(--text-light)]/60 dark:text-[var(--text-dark)]/60 mt-10">
            Tidak ada berita ditemukan.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
