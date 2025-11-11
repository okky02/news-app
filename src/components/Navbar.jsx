import DarkModeToggle from "./home/DarkModeToggle";
import SearchNews from "./home/SearchNews";

export default function Navbar({ search, setSearch }) {
  const isDetailPage = location.pathname.includes("/detail");

  return (
    <nav className="sticky top-0 z-50 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/60 dark:border-gray-700/60 shadow-sm mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-3 group">
            <a
              href="/"
              className="flex items-center gap-3 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="O-News Logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-lg"
                />
                {/* Animated Ring */}
                <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-gray-300">
                  O-News
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium hidden sm:block">
                  Stay Informed
                </span>
              </div>
            </a>
          </div>

          {/* Right Section - Search & Dark Mode */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Component */}
            <div className="relative">
            {!isDetailPage && (
              <SearchNews search={search} setSearch={setSearch} />
            )}
            </div>

            {/* Dark Mode Toggle */}
            <div className="relative">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
