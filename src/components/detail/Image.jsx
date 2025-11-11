export default function Image({ src, alt }) {
  return (
    <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl mb-6 sm:mb-8 relative group">
      <img
        src={src || "/placeholder.jpg"}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
