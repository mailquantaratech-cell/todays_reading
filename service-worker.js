self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("reading-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json"
      ]);
    })
  );
});
