import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { timeAgo } from "../../utils/timeAgo";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider({ highlightNews }) {
  if (!highlightNews || highlightNews.length === 0) return null;

  return (
    <div className="w-full max-w-7xl mx-auto mb-12 rounded-4xl overflow-hidden shadow-2xl relative group">
      {/* Gradient Overlay Container */}
      <div className="absolute inset-0 z-10 pointer-events-none" />

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/80 !w-3 !h-3 !mx-1",
          bulletActiveClass:
            "swiper-pagination-bullet-active !bg-white !w-8 !transition-all",
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop={true}
        className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {highlightNews.map((news, index) => (
          <SwiperSlide key={index}>
            <Link
              to= "/detail"
              state={{ item: news }}
              className="block relative w-full h-full group"
            >
              <div className="absolute inset-0">
                <img
                  src={
                    news.image?.large || news.image?.small || "/placeholder.jpg"
                  }
                  alt={news.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              </div>
              <div className="relative z-20 h-full flex flex-col justify-end p-6 sm:p-8 md:p-12">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      🚀 BERITA TERBARU
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30">
                      {timeAgo(news.isoDate)}
                    </span>
                  </div>
                  <h2 className="text-2xl text-gray-300 group-hover:text-white  sm:text-3xl md:text-4xl lg:text-5xl font-bold  mb-4 leading-tight drop-shadow-2xl">
                    {news.title}
                  </h2>
                </div>
              </div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVaIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-10 z-10" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
    </div>
  );
}
