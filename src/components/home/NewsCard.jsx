import { timeAgo } from "../../utils/timeAgo";
import { Link } from "react-router-dom";

export default function NewsCard({ item }) {
  return (
    <Link
      to="/detail"
      state={{ item }}
      className="group block bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 relative"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

      <div className="relative z-10">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={item.image?.small || "/placeholder.jpg"}
            alt={item.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />

          {/* Time Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
              {timeAgo(item.isoDate)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between min-h-[200px]">
          <div>
            <h2 className="font-bold text-xl mb-3 text-gray-900 dark:text-white line-clamp-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {item.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-1 ">
              {item.contentSnippet}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
            {/* "Baca Selengkapnya" hanya teks */}
            <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
              Baca Selengkapnya
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>

            {/* Source */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                CNN Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
