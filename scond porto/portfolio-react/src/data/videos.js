/* ================================================================
   DATA VIDEO PORTFOLIO — Edit file ini untuk menambah/mengubah video
   ================================================================

   Setiap video adalah objek dengan format:
   {
     url:       "URL YouTube atau TikTok kamu",
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
  /* ── YOUTUBE ─────────────────────────────────────────────── */
  {
    url:       "",   // ← paste URL YouTube kamu
    title:     "Brand Campaign — Product Launch",
    category:  "Commercial · 2 min 30 sec",
    featured:  false,
    thumbnail: "",
  },
  {
    url:       "",   // ← paste URL YouTube kamu
    title:     "Short Film — Cinematic Cut",
    category:  "Narrative · 6 min 14 sec",
    featured:  false,
    thumbnail: "",
  },

  /* ── TIKTOK ────────────────────────────────────────────────
     ⚠️  TikTok tidak auto-fetch thumbnail, isi manual!
  ─────────────────────────────────────────────────────────── */
  {
    url:       "https://www.tiktok.com/@rezxec/video/7554055334327831816?is_from_webapp=1&sender_device=pc&web_id=7572885932237096469",
    title:     "1.6M Views — Viral Social Campaign",
    category:  "Social Media · Biggest Milestone",
    featured:  true,
    thumbnail: "/images/mved.png",   // ← thumbnail manual
  },
  {
    url:       "https://www.tiktok.com/@rezxec/video/7389276493534203141?is_from_webapp=1&sender_device=pc&web_id=7572885932237096469",
    title:     "Event Highlight Reel",
    category:  "Event · 3 min 45 sec",
    featured:  false,
    thumbnail: "",
  },
  {
    url:       "",   // ← paste URL TikTok kamu
    title:     "Reel — Social Content",
    category:  "Short Form",
    featured:  false,
    thumbnail: "",
  },
  {
    url:       "",   // ← paste URL TikTok kamu
    title:     "Motion Reel — Transition Edit",
    category:  "Cinematic",
    featured:  false,
    thumbnail: "",
  },

  /* ── TAMBAH SLOT BARU DI SINI ──────────────────────────────
  {
    url:       "",
    title:     "Nama Project",
    category:  "Kategori",
    featured:  false,
    thumbnail: "",
  },
  ─────────────────────────────────────────────────────────── */
];

export default MY_VIDEOS;
