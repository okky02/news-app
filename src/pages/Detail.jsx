import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Header from "../components/detail/Header";
import Meta from "../components/detail/Meta";
import Image from "../components/detail/Image";
import Content from "../components/detail/Content";
import SourceInfo from "../components/detail/SourceInfo";

export default function Detail() {
  const location = useLocation();
  const item = location.state?.item;

  const author = "CNN Indonesia";

  const category =
    item.category ||
    (item.link?.includes("ekonomi")
      ? "Ekonomi"
      : item.link?.includes("nasional")
      ? "Nasional"
      : item.link?.includes("internasional")
      ? "Internasional"
      : item.link?.includes("olahraga")
      ? "Olahraga"
      : item.link?.includes("teknologi")
      ? "Teknologi"
      : item.link?.includes("hiburan")
      ? "Hiburan"
      : "Umum");

  const date = new Date(item.isoDate);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = item.isoDate
    ? `${date.toLocaleDateString("id-ID", options)}, ${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")} WIB`
    : "Tanggal tidak tersedia";

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600 dark:text-gray-300">
        <p>Artikel tidak ditemukan.</p>
        <Link
          to="/"
          className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] transition-colors duration-300">
      
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Header title={item.title} />

        {/* Meta */}
        <Meta category={category} author={author} formattedDate={formattedDate} />

        <hr className="border-gray-200 dark:border-gray-700 mb-4"/>

        {/*  Image */}
        <Image src={item.image?.small} alt={item.title} />

        {/*  Content */}
        <Content contentSnippet={item.contentSnippet} />

        <hr className="border-gray-200 dark:border-gray-700 mb-6 sm:mb-8" />

        {/* Source Info */}
        <SourceInfo link={item.link} />

      </main>

      <Footer />
    </div>
  );
}
