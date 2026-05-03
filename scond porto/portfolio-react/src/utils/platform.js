/* ================================================================
   PLATFORM UTILITIES — Helper functions untuk deteksi platform,
   ekstrak ID, dan generate thumbnail URL.
   File ini bisa diedit jika ingin menambah platform baru.
================================================================ */

/**
 * Deteksi platform dari URL video.
 * @param {string} url
 * @returns {'youtube' | 'tiktok' | 'unknown'}
 */
export function detectPlatform(url) {
  if (/tiktok\.com/i.test(url))            return 'tiktok';
  if (/youtube\.com|youtu\.be/i.test(url)) return 'youtube';
  return 'unknown';
}

/**
 * Ekstrak YouTube video ID dari berbagai format URL YouTube.
 * @param {string} url
 * @returns {string|null}
 */
export function extractYouTubeId(url) {
  const patterns = [
    /[?&]v=([A-Za-z0-9_-]{11})/,
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /\/shorts\/([A-Za-z0-9_-]{11})/,
    /\/embed\/([A-Za-z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

/**
 * Ekstrak TikTok video ID dari URL.
 * @param {string} url
 * @returns {string|null}
 */
export function extractTikTokId(url) {
  const m = url.match(/video\/(\d+)/);
  return m ? m[1] : null;
}

/**
 * Generate URL thumbnail YouTube berdasarkan kualitas.
 * @param {string} id - YouTube video ID
 * @param {'maxresdefault'|'hqdefault'|'mqdefault'|'default'} quality
 * @returns {string}
 */
export function getYouTubeThumbnail(id, quality = 'maxresdefault') {
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`;
}

/**
 * Cek apakah entry video valid (URL tidak kosong).
 * @param {object} video
 * @returns {boolean}
 */
export function isValidEntry(video) {
  return typeof video.url === 'string' && video.url.trim().length > 0;
}

/**
 * Resolve kategori label — fallback ke nama platform jika kosong.
 * @param {object} video
 * @returns {string}
 */
export function resolveCategory(video) {
  if (video.category && video.category.trim()) return video.category;
  const p = detectPlatform(video.url);
  if (p === 'youtube') return 'YouTube';
  if (p === 'tiktok')  return 'TikTok · Short Form';
  return 'Video';
}
