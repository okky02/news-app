import {
  Globe,
  Landmark,
  DollarSign,
  Trophy,
  Cpu,
  Film,
  Newspaper,
} from "lucide-react";

export default function CategoryFilter({ category, setCategory }) {
  const categories = [
    { label: "Semua", value: "", icon: Newspaper },
    { label: "Nasional", value: "nasional", icon: Landmark },
    { label: "Internasional", value: "internasional", icon: Globe },
    { label: "Ekonomi", value: "ekonomi", icon: DollarSign },
    { label: "Olahraga", value: "olahraga", icon: Trophy },
    { label: "Teknologi", value: "teknologi", icon: Cpu },
    { label: "Hiburan", value: "hiburan", icon: Film },
  ];

  return (
    <div className="w-full overflow-x-auto pb-4 mb-8">
      <div className="flex gap-2 whitespace-nowrap">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <button
              key={c.value}
              onClick={() => setCategory(c.value)}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300
                text-sm font-medium min-w-max cursor-pointer
                ${
                  category === c.value
                    ? "bg-blue-900 text-white border-blue-600 shadow-md"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                }
              `}
            >
              <Icon
                size={18}
                strokeWidth={category === c.value ? 2.5 : 2}
                className="transition-all duration-300"
              />
              {c.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
