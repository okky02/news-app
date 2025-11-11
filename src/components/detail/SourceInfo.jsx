export default function SourceInfo({ link }) {
  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500 rounded-r-xl p-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg
            className="w-6 h-6 text-red-500 dark:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-bold text-red-600 dark:text-red-200">
            Sumber & Informasi Terbatas
          </h3>
          <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed mt-2">
            Sumber berita ini tidak menyediakan data detail lengkap dari
            artikel. Untuk membaca versi lengkapnya, silakan kunjungi tautan
            asli berikut:
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 ml-1 font-medium underline hover:text-red-700 dark:hover:text-red-500 hover:no-underline transition-all duration-200"
            >
              Baca Selengkapnya di Situs Asli
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
