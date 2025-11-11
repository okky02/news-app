import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const getNews = async (category = "", query = "") => {
  try {
    let endpoint = "/cnn-news";

    if (category && category !== "all") {
      endpoint += `/${category}`;
    }

    const response = await api.get(endpoint);
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
