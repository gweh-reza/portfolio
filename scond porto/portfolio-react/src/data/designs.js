/* ================================================================
   DATA DESAIN PORTFOLIO — Edit file ini untuk menambah/mengubah desain
   ================================================================

   Setiap item adalah objek dengan format:
   {
     image:       "images/nama-file.jpg",  ← WAJIB diisi agar card muncul
     title:       "Nama Project",
     tag:         "Kategori · Sub · Label",
     label:       "Label kecil di pojok",
     type:        "featured",  ← 'featured'(3 kolom) | 'wide'(2 kolom) | 'portrait' | 'square' (1 kolom)
     gradClass:   "grad-1",    ← grad-1 s/d grad-5 (warna background)
     aspectRatio: "16/9",      ← OPSIONAL: paksa rasio tertentu
   }

   ⚠️  Selama image: "" (kosong), card TIDAK akan muncul di website.
   ✅  Isi image dengan path foto / URL → card otomatis tampil.

================================================================ */

const MY_DESIGNS = [
  {
    image:     "/images/pocari 1.png",
    title:     "pocari poster",
    tag:       "poster · visual identity · typography",
    label:     "Brand Identity",
    type:      "square",
    gradClass: "grad-1",
  },
  {
    image:     "/images/lays.png",
    title:     "lays poster",
    tag:       "poster · layout · composition",
    label:     "Poster Design",
    type:      "square",
    gradClass: "grad-2",
  },
  {
    image:     "/images/chitato.png",
    title:     "Social Media Kit",
    tag:       "Digital · Social · Content",
    label:     "Social Media",
    type:      "square",
    gradClass: "grad-3",
  },
  {
    image:     "/images/style.jpg",
    title:     "outfit style",
    tag:       "Fashion · Editorial · Life Style",
    label:     "Fashion Style",
    type:      "square",
    gradClass: "grad-5",
  },
  {
    image:     "",
    title:     "Product Packaging Design",
    tag:       "Packaging · 3D Mockup · Print",
    label:     "Product Packaging",
    type:      "wide",
    gradClass: "grad-4",
  },
];

export default MY_DESIGNS;
