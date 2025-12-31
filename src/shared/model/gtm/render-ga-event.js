export function sendGAPageView(path) {
  window.dataLayer.push({
    event: 'pageview',
    page_path: path,
    page_location: location.origin + path,
    page_title: document.title,
  });
}
