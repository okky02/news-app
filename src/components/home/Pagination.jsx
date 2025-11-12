import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

function getVisiblePages(current, total) {
  const delta = 1;
  const pages = [];
  pages.push(1);
  const start = Math.max(2, current - delta);
  const end = Math.min(total - 1, current + delta);
  for (let i = start; i <= end; i++) pages.push(i);
  if (total > 1) pages.push(total);

  const finalPages = [];
  let last = null;
  for (const p of pages) {
    if (last !== null && p - last > 1) finalPages.push("...");
    finalPages.push(p);
    last = p;
  }
  return finalPages;
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-12">
      <div className="hidden sm:flex items-center gap-2">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600
          text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500
          disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-sm  cursor-pointer"
        >
          <ChevronsLeft size={18} />
        </button>

        {/* Previous Page */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600
          text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500
          disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-sm cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page Numbers */}
        <div className="flex gap-1 mx-2">
          {pages.map((page, i) =>
            page === "..." ? (
              <span
                key={i}
                className="flex items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400 font-medium"
              >
                ...
              </span>
            ) : (
              <button
                key={i}
                onClick={() => onPageChange(page)}
                className={`flex items-center justify-center w-10 h-10 rounded-lg border text-sm font-medium transition-all duration-200  cursor-pointer
                ${
                  currentPage === page
                    ? "bg-blue-900 text-white border-blue-600 shadow-md shadow-blue-500/25"
                    : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-sm"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        {/* Next Page */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600
          text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500
          disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-sm  cursor-pointer" 
        >
          <ChevronRight size={18} />
        </button>

        {/* Last Page */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600
          text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500
          disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-sm cursor-pointer"
        >
          <ChevronsRight size={18} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="flex sm:hidden items-center justify-between w-full max-w-xs bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-3 shadow-sm">
        <div className="flex items-center gap-1">
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 
            hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronsLeft size={16} />
          </button>

          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 
            hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed "
          >
            <ChevronLeft size={16} />
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg border border-blue-200 dark:border-blue-800">
            {currentPage}
          </span>
          <span className="text-gray-500 dark:text-gray-400">dari</span>
          <span className="text-gray-700 dark:text-gray-300">{totalPages}</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 
            hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed "
          >
            <ChevronRight size={16} />
          </button>

          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 
            hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed "
          >
            <ChevronsRight size={16} />
          </button>
        </div>
      </div>

      {/* Page Info for Desktop */}
      <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 ml-4">
        <span>Halaman</span>
        <span className="font-semibold text-gray-700 dark:text-gray-300">
          {currentPage}
        </span>
        <span>dari</span>
        <span className="font-semibold text-gray-700 dark:text-gray-300">
          {totalPages}
        </span>
      </div>
    </div>
  );
}
