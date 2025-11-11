import axios from "axios";

export const getNews = async (category = "", query = "") => {
  try {
    let endpoint = "https://berita-indo-api-next.vercel.app/api/cnn-news";

    if (category && category !== "all") {
      endpoint += `/${category}`;
    }

    const response = await axios.get(endpoint);
    let news = response.data.data;

    // Filter by search keyword (client-side)
    if (query) {
      const q = query.toLowerCase();
      news = news.filter((item) =>
        item.title.toLowerCase().includes(q)
      );
    }

    return news;
  } catch (error) {
    console.error("Gagal mengambil berita:", error);
    throw error;
  }
};
