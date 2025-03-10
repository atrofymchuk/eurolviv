var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DB_NAME = "imageCache";
const STORE_NAME = "images";
const openDB = () => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
});
const getCachedImage = (url) => __awaiter(this, void 0, void 0, function* () {
    const db = yield openDB();
    return new Promise((resolve) => {
        const transaction = db.transaction(STORE_NAME, "readonly");
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(url);
        request.onsuccess = () => {
            const result = request.result;
            resolve(result);
        };
        request.onerror = () => resolve(null);
    });
});
const cacheImage = (url, blob, type) => __awaiter(this, void 0, void 0, function* () {
    const db = yield openDB();
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    store.put({ blob, type }, url);
});
self.addEventListener("fetch", (event) => {
    const fetchEvent = event;
    const { request } = fetchEvent;
    if (request.destination === "image" || request.url.endsWith(".svg")) {
        fetchEvent.respondWith((() => __awaiter(this, void 0, void 0, function* () {
            const cachedData = yield getCachedImage(request.url);
            if (cachedData) {
                return new Response(cachedData.blob, { headers: { "Content-Type": cachedData.type } });
            }
            const response = yield fetch(request);
            if (!response.ok)
                return response;
            const responseClone1 = response.clone();
            const responseClone2 = response.clone();
            (() => __awaiter(this, void 0, void 0, function* () {
                try {
                    const blob = yield responseClone1.blob();
                    const type = response.headers.get("Content-Type") || "image/webp"; // Автоматичне визначення MIME-типу
                    yield cacheImage(request.url, blob, type);
                }
                catch (error) {
                    console.error("Error caching image:", error);
                }
            }))();
            return responseClone2;
        }))());
    }
});
