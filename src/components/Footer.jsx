export default function Footer() {
  return (
    <footer className="mt-8 py-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section - Logo and Description */}
        <div className="flex flex-row lg:flex-row justify-between mb-8">
          {/* Logo and Brand - Left Side */}
          <div className="flex flex-col lg:flex-row items-center lg:gap-3 lg:mb-0">
            <div className="relative">
              <img
                src="/logo.png"
                alt="O-News Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 dark:text-gray-300 text-nowrap">
                O-News
              </span>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium text-nowrap">
                Stay Informed
              </span>
            </div>
          </div>

          {/* Description and Source - Right Side */}
          <div className="max-w-md text-right md:text-right lg:text-right">
            <div className="mb-4">
              <h3 className="sm:text-sm md:text-base lg:text-lg font-bold text-gray-800 dark:text-white mb-2">
                Berita Terkini & Terupdate
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Dapatkan informasi terbaru dan terpercaya
              </p>
            </div>

            <div className="flex justify-end">
              <a
                href="https://berita-indo-api-next.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="inline-flex items-center bg-red-500 px-2 py-2 rounded-full border border-red-600 shadow-lg hover:bg-red-600 hover:shadow-xl transition-all duration-200">
                  <span className="w-2 h-2 mr-2 bg-white rounded-full animate-pulse"></span>
                  <p className="text-white text-xs sm:text-sm font-semibold">
                    Source API:{" "}
                    <span className="text-white font-bold">
                      CNN News Indonesia
                    </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
          <div className="flex justify-center">
            <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
              © 2025{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Okky Dhelfilano
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
