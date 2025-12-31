export function renderAd(container) {
  const ad = document.createElement('ins');
  ad.className = 'adsbygoogle';
  ad.style.display = 'block';
  ad.dataset.adClient = 'ca-pub-XXXX';
  ad.dataset.adSlot = 'YYYY';
  ad.dataset.adFormat = 'auto';

  container.appendChild(ad);

  (window.adsbygoogle = window.adsbygoogle || []).push({});
}
