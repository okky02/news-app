import axios from "axios";

export const getNews = async (category = "", query = "") => {
  try {
    let targetUrl = "https://berita-indo-api-next.vercel.app/api/cnn-news";
    if (category && category !== "all") targetUrl += `/${category}`;

    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
    const { data } = await axios.get(proxyUrl);

    const parsed = JSON.parse(data.contents);
    let news = parsed.data;

    if (query) {
      const q = query.toLowerCase();
      news = news.filter((item) => item.title.toLowerCase().includes(q));
    }

    return news;
  } catch (error) {
    console.error("Gagal mengambil berita:", error);
    throw error;
  }
};
