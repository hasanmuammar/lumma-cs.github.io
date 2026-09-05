function applyLummaPageLanguage(): void {
  const isIndonesian = document.documentElement.lang === 'id';

  document.querySelectorAll<HTMLElement>('[data-lumma-en][data-lumma-id]').forEach((element) => {
    const value = element.getAttribute(isIndonesian ? 'data-lumma-id' : 'data-lumma-en');
    if (value !== null) element.textContent = value;
  });
}

function initLummaPageLanguage(): void {
  applyLummaPageLanguage();

  const observer = new MutationObserver(applyLummaPageLanguage);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang']
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLummaPageLanguage, { once: true });
} else {
  initLummaPageLanguage();
}
