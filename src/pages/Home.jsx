import { useEffect, useState } from "react";
import { getNews } from "../services/newsApi";
import Navbar from "../components/Navbar";
import CategoryFilter from "../components/CategoryFilter";
import NewsCard from "../components/NewsCard";
import Pagination from "../components/Pagination";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const highlightNews = articles.slice(0, 5);

  // Pagination
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
    <div className="min-h-screen bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] transition-colors duration-300">
      <Navbar search={search} setSearch={setSearch} />

      <main className="max-w-6xl mx-auto px-4 py-2">
        {!category && <HeroSlider highlightNews={highlightNews} />}

        <CategoryFilter
          category={category}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
        />

        {loading ? (
          <p className="text-center text-[var(--text-light)]/60 dark:text-[var(--text-dark)]/60 mt-10">
            Memuat berita...
          </p>
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
