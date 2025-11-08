import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const getNews = async (category = "", query = "") => {
  try {
    let endpoint = `/api/cnn-news`;
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
