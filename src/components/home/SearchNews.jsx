/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchNews({ search, setSearch }) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setOpen(true)}
        className={`${
          open ? "hidden" : "block"
        }  p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition shadow-md cursor-pointer`}
      >
        <Search className="text-[var(--text-light)] dark:text-[var(--text-dark)]" size={24}/>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "14rem", opacity: 1 }} 
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2 overflow-hidden bg-[var(--card-light)] dark:bg-[var(--card-dark)]
                       px-3 py-2 rounded-lg border border-[var(--border-light)] dark:border-[var(--border-dark)]
                       shadow-sm"
          >
            <Search className="w-4 h-4 opacity-70" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Cari berita..."
              className="bg-transparent outline-none w-full text-[var(--text-light)] dark:text-[var(--text-dark)]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() => {
                setOpen(false);
                setSearch("");
              }}
            >
              <X className="w-4 h-4 opacity-70 hover:opacity-100 transition cursor-pointer" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
