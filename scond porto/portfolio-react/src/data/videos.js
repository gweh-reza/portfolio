/* ================================================================
   DATA VIDEO PORTFOLIO — Edit file ini untuk menambah/mengubah video
   ================================================================

   Setiap video adalah objek dengan format:
   {
     url:       "URL YouTube atau TikTok kamu",
     platform:  "youtube" | "tiktok" | "local",
     title:     "Judul Project",
     category:  "Kategori · Durasi",
     featured:  true,              ← opsional, card jadi LEBAR
     thumbnail: "images/...",     ← opsional, thumbnail MANUAL
   }

   FORMAT URL:
     YouTube: https://www.youtube.com/watch?v=XXX
              https://youtu.be/XXX
              https://www.youtube.com/shorts/XXX

     TikTok:  https://www.tiktok.com/@username/video/123...

   THUMBNAIL:
     YouTube → otomatis dari YouTube API
     TikTok  → wajib isi manual (CORS-blocked)
     Semua   → bisa override dengan field thumbnail

================================================================ */

const MY_VIDEOS = [
  {
    url:       "https://www.tiktok.com/@rezxec/video/7554055334327831816?is_from_webapp=1&sender_device=pc&web_id=7572885932237096469",
    platform:  "tiktok",
    title:     "1.6M Views — Viral Social Campaign",
    category:  "Social Media · Biggest Milestone",
    featured:  true,
    thumbnail: "/images/mved.png",
  },
  {
    url:       "https://www.tiktok.com/@rezxec/video/7389276493534203141?is_from_webapp=1&sender_device=pc&web_id=7572885932237096469",
    platform:  "tiktok",
    title:     "Max Verstappen",
    category:  "F1 · 770K Views",
    featured:  false,
    thumbnail: "/images/tumb-mx.jpg",
  },
  {
    url:       "https://youtu.be/E5VZ9czBHdE",
    platform:  "youtube",
    title:     "Only Will to Survive",
    category:  "24h Le Mans WEC and Nurburging",
    featured:  false,
    thumbnail: "",
  },
  {
    url:       "https://youtube.com/shorts/mwhH8oYvIs8?feature=share",
    platform:  "youtube",
    title:     "School Project Motion Graphics",
    category:  "Motion Graphics",
    featured:  false,
    thumbnail: "",
  },
  {
    url:       "https://youtu.be/xIl_Vv9FvEg",
    platform:  "youtube",
    title:     "Formula 1 Movie",
    category:  "Race Car",
    featured:  false,
    thumbnail: "",
  },
  {
    url:       "https://youtube.com/shorts/BtctCj7QOus?feature=share",
    platform:  "youtube",
    title:     "Property Cinematic Video",
    category:  "Cinematic Video",
    featured:  false,
    thumbnail: "",
  },

  /* ── TAMBAH SLOT BARU DI SINI ──────────────────────────────
  {
    url:       "",
    platform:  "youtube",
    title:     "Nama Project",
    category:  "Kategori",
    featured:  false,
    thumbnail: "",
  },
  ─────────────────────────────────────────────────────────── */
];

export default MY_VIDEOS;
