export default async function handler(req, res) {
  try {
    const url = "https://berita-indo-api-next.vercel.app/api/cnn-news";

    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Gagal mengambil berita" });
  }
}
