import { translations, type Language } from '../data/translations';

const storageKey = 'lumma-language';
const sharedTranslations: Record<Language, Record<string, string>> = {
  en: {
    Home: 'Home', About: 'About', Studio: 'Studio', Aya: 'Aya', 'Aya universe': 'Aya universe',
    'Aya The Little Muslim': 'Aya The Little Muslim', 'Aya Fun Lingua': 'Aya Fun Lingua',
    'Aya Books': 'Aya Books', Products: 'Products', 'All products': 'All products',
    Team: 'Team', Collaborate: 'Collaborate', Contact: 'Contact',
    'About Lumma': 'About Lumma', 'Our Team': 'Our Team', Resources: 'Resources',
    'Creative learning experiences for Muslim families.': 'Creative learning experiences for Muslim families.'
  },
  id: {
    Home: 'Beranda', About: 'Tentang', Studio: 'Studio', Aya: 'Aya', 'Aya universe': 'Dunia Aya',
    'Aya The Little Muslim': 'Aya The Little Muslim', 'Aya Fun Lingua': 'Aya Fun Lingua',
    'Aya Books': 'Aya Books', Products: 'Produk', 'All products': 'Semua produk',
    Team: 'Tim', Collaborate: 'Kolaborasi', Contact: 'Kontak',
    'About Lumma': 'Tentang Lumma', 'Our Team': 'Tim Kami', Resources: 'Sumber Belajar',
    'Creative learning experiences for Muslim families.': 'Pengalaman belajar kreatif untuk keluarga Muslim.'
  }
};

/**
 * Updates an element's visible label without removing nested icons, SVGs,
 * arrows, or other child elements.
 */
function setTranslatedText(element: HTMLElement, value: string): void {
  const meaningfulTextNode = Array.from(element.childNodes).find(
    (node): node is Text => node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim())
  );

  if (meaningfulTextNode) {
    meaningfulTextNode.textContent = value;
    return;
  }

  if (element.childElementCount > 0) {
    element.insertBefore(document.createTextNode(value), element.firstChild);
    return;
  }

  element.textContent = value;
}

/** Returns the label text while ignoring nested icons and other child elements. */
function getTranslatableText(element: HTMLElement): string {
  const meaningfulTextNode = Array.from(element.childNodes).find(
    (node): node is Text => node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim())
  );

  return meaningfulTextNode?.textContent?.trim() ?? element.textContent?.trim() ?? '';
}

function applyLanguage(lang: string | null): void {
  const selected: Language = lang === 'id' ? 'id' : 'en';

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translation = key ? sharedTranslations[selected][key] : undefined;
    if (translation) setTranslatedText(element, translation);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-key]').forEach((element) => {
    const key = element.getAttribute('data-i18n-key');
    if (!key) return;

    const original = element.getAttribute('data-i18n-en') ?? getTranslatableText(element);
    if (!element.hasAttribute('data-i18n-en')) element.setAttribute('data-i18n-en', original);

    const translation = selected === 'id' ? (translations.id[key] ?? original) : original;
    setTranslatedText(element, translation);
  });

  document.querySelectorAll<HTMLElement>('[data-lumma-en][data-lumma-id]').forEach((element) => {
    const value = element.getAttribute(selected === 'id' ? 'data-lumma-id' : 'data-lumma-en');
    if (value !== null) setTranslatedText(element, value);
  });

  document.querySelectorAll<HTMLButtonElement>('.language-button').forEach((button) => {
    const active = button.getAttribute('data-lang') === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  document.documentElement.lang = selected;
  localStorage.setItem(storageKey, selected);
}

function initLanguageSwitcher(): void {
  const saved = localStorage.getItem(storageKey);
  applyLanguage(saved);

  document.querySelectorAll<HTMLButtonElement>('.language-button').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.getAttribute('data-lang')));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSwitcher, { once: true });
} else {
  initLanguageSwitcher();
}
