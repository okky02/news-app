import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "/api" // pakai proxy Vite saat dev
      : "https://berita-indo-api-next.vercel.app", // pakai URL asli saat production
});

export const getNews = async (category = "", query = "") => {
  try {
    let endpoint = `/cnn-news`;
    const params = [];

    if (category) params.push(category);
    if (query) params.push(`search?q=${encodeURIComponent(query)}`);

    if (params.length > 0) {
      endpoint += `/${params.join("/")}`;
    }

    const response = await api.get(endpoint);
    return response.data.data;
  } catch (error) {
    console.error("Gagal mengambil berita:", error);
    throw error;
  }
};

