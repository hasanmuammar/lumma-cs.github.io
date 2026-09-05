export type Language = 'en' | 'id';

export const translations: Record<Language, Record<string, string>> = {
  en: {},
  id: {
    'home.hero.title': 'Pembelajaran kreatif yang hadir dalam kehidupan keluarga sehari-hari.',
    'home.hero.lead': 'Kami mengembangkan pengalaman belajar yang bermakna untuk keluarga Muslim melalui cerita, pendidikan Islam, pembelajaran bahasa, buku, kegiatan, dan produk digital.',
    'home.hero.meetAya': 'Kenali Aya',
    'home.hero.explore': 'Jelajahi karya kami',
    'home.intro.title': 'Sebuah ekosistem pembelajaran yang saling terhubung, bukan sekadar kumpulan konten.',
    'home.intro.lead': 'Lumma menghubungkan berbagai format melalui satu arah pendidikan yang sama. Sebuah cerita dapat berlanjut menjadi buku, kegiatan, percakapan, pelajaran bahasa, atau pengalaman belajar digital yang baru.',
    'home.create': 'Apa yang kami kembangkan',
    'home.create.title': 'Beragam format. Satu arah pendidikan.',
    'home.aya': 'Kenali Aya',
    'home.aya.title': 'Seorang karakter yang akrab di tengah dunia pembelajaran yang terus berkembang.',
    'home.aya.lead': 'Aya adalah pusat kreatif dan pendidikan dalam Lumma. Melalui karakter yang akrab dan pengalaman sehari-hari, berbagai bentuk pembelajaran yang bermanfaat dapat terhubung secara alami.',
    'home.discoverAya': 'Temukan dunia Aya',
    'aya.eyebrow': 'Dunia Aya',
    'aya.title': 'Kenali Aya.',
    'aya.lead': 'Aya adalah seorang pembelajar Muslim yang tumbuh melalui iman, bahasa, kehidupan keluarga, rasa ingin tahu, cerita, dan pengalaman sehari-hari.',
    'aya.exploreWorld': 'Jelajahi dunia Aya',
    'aya.exploreProducts': 'Jelajahi produk',
    'aya.ecosystem': 'Di pusat ekosistem',
    'aya.learn': 'Belajar · menjelajah · bertumbuh',
    'aya.intro': 'Lebih dari sekadar maskot',
    'aya.intro.title': 'Sebuah dunia yang akrab untuk pembelajaran yang bermakna.',
    'aya.intro.lead': 'Aya menciptakan kesinambungan di berbagai format pembelajaran. Sebuah cerita dapat mengarah kepada buku, kegiatan, pelajaran bahasa, percakapan keluarga, atau pengalaman belajar lainnya. Keakraban membantu berbagai gagasan terasa saling terhubung, bukan terpisah.',
    'aya.pathways': 'Apa yang Aya pelajari',
    'aya.pathways.title': 'Pembelajaran yang bergerak bersama kehidupan sehari-hari.',
    'aya.ecosystem.title': 'Saluran, platform, dan produk dengan peran yang berbeda.',
    'aya.family': 'Belajar bersama keluarga',
    'aya.family.title': 'Sebuah cerita tidak harus berakhir ketika halaman berakhir.',
    'about.eyebrow': 'Tentang Lumma',
    'about.title': 'Membangun pengalaman belajar yang bermakna untuk keluarga Muslim.',
    'about.lead': 'Lumma Creative Studio menghubungkan pendidikan, penceritaan, bahasa, penerbitan, teknologi, dan pengembangan kreatif untuk menciptakan pengalaman belajar yang bermanfaat.',
    'about.direction': 'Arah kami',
    'about.direction.title': 'Pembelajaran seharusnya terasa terhubung dengan kehidupan keluarga yang nyata.',
    'about.what': 'Apa yang Lumma lakukan',
    'about.what.title': 'Sebuah studio yang bekerja di bidang pendidikan dan teknologi kreatif.',
    'about.relationship': 'Lumma & Aya',
    'about.relationship.title': 'Lumma membangun. Aya menghubungkan.',
    'about.values': 'Cara kami berpikir',
    'about.values.title': 'Utamakan manfaat. Tetap berpikir secara mendalam.',
    'common.explore': 'Jelajahi',
    'common.resources': 'Jelajahi sumber belajar',
    'common.collaborate': 'Berkolaborasi dengan Lumma'
  }
};

const storageKey = 'lumma-language';

function applyLanguage(lang: string | null): void {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;

  const selected: Language = lang === 'id' ? 'id' : 'en';
  const root = document.documentElement;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (!key) return;
    const shared = selected === 'id'
      ? ({
          Home: 'Beranda', About: 'Tentang', Aya: 'Aya', 'Aya universe': 'Dunia Aya',
          'Aya The Little Muslim': 'Aya The Little Muslim', 'Aya Fun Lingua': 'Aya Fun Lingua',
          'Aya Books': 'Aya Books', Products: 'Produk', 'All products': 'Semua produk',
          Team: 'Tim', Collaborate: 'Kolaborasi', Contact: 'Kontak',
          'About Lumma': 'Tentang Lumma', 'Our Team': 'Tim Kami', Resources: 'Sumber Belajar',
          'Creative learning experiences for Muslim families.': 'Pengalaman belajar kreatif untuk keluarga Muslim.'
        } as Record<string, string>)[key]
      : key;
    if (shared) element.textContent = shared;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-key]').forEach((element) => {
    const key = element.getAttribute('data-i18n-key');
    if (!key) return;
    const original = element.getAttribute('data-i18n-en') ?? element.textContent ?? '';
    if (!element.hasAttribute('data-i18n-en')) element.setAttribute('data-i18n-en', original);
    element.textContent = selected === 'id' ? (translations.id[key] ?? original) : original;
  });

  document.querySelectorAll<HTMLButtonElement>('.language-button').forEach((button) => {
    const active = button.getAttribute('data-lang') === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  root.lang = selected;
  window.localStorage.setItem(storageKey, selected);
}

function initLanguageSwitcher(): void {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;

  applyLanguage(window.localStorage.getItem(storageKey));
  document.querySelectorAll<HTMLButtonElement>('.language-button').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.getAttribute('data-lang')));
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher, { once: true });
  } else {
    initLanguageSwitcher();
  }
}
