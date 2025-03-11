const DB_NAME = "imageCache";
const STORE_NAME = "images";

const openDB = async (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const getCachedImage = async (url: string): Promise<{ blob: Blob; type: string } | null> => {
  const db = await openDB();
  return new Promise((resolve) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(url);

    request.onsuccess = () => {
      const result = request.result as { blob: Blob; type: string } | null;
      resolve(result);
    };
    request.onerror = () => resolve(null);
  });
};

const cacheImage = async (url: string, blob: Blob, type: string): Promise<void> => {
  const db = await openDB();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  store.put({ blob, type }, url);
};

self.addEventListener("fetch", (event: Event) => {
  const fetchEvent = event as FetchEvent;
  const { request } = fetchEvent;

  if (request.destination === "image" || request.url.endsWith(".svg")) {
    fetchEvent.respondWith(
      (async () => {
        const cachedData = await getCachedImage(request.url);
        if (cachedData) {
          return new Response(cachedData.blob, { headers: { "Content-Type": cachedData.type } });
        }

        const response = await fetch(request);
        if (!response.ok) return response;

        const responseClone1 = response.clone();
        const responseClone2 = response.clone();

        (async () => {
          try {
            const blob = await responseClone1.blob();
            const type = response.headers.get("Content-Type") || "image/webp"; 
            await cacheImage(request.url, blob, type);
          } catch (error) {
            console.error("Error caching image:", error);
          }
        })();

        return responseClone2;
      })()
    );
  }
});
