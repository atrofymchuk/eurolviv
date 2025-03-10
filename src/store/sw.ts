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

const getCachedImage = async (url: string): Promise<Blob | null> => {
  const db = await openDB();
  return new Promise((resolve) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(url);

    request.onsuccess = () => resolve(request.result as Blob | null);
    request.onerror = () => resolve(null);
  });
};

const cacheImage = async (url: string, blob: Blob): Promise<void> => {
  const db = await openDB();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  store.put(blob, url);
};


self.addEventListener("fetch", (event: Event) => {
  const fetchEvent = event as FetchEvent;
  const { request } = fetchEvent;

  if (request.destination === "image") {
    fetchEvent.respondWith(
      (async () => {
        const cachedBlob = await getCachedImage(request.url);
        if (cachedBlob) {
          return new Response(cachedBlob);
        }

        const response = await fetch(request);
        const blob = await response.blob();
        await cacheImage(request.url, blob);

        return response;
      })()
    );
  }
});
