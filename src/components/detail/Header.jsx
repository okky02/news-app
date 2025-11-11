import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <div className="mb-2">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Kembali ke Beranda
      </Link>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4 sm:mb-6">
        {title}
      </h1>
    </div>
  );
}
