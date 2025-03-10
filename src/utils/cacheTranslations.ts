const DB_NAME = "translationCache";
const STORE_NAME = "translations";

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

export const getCachedTranslation = async (lang: string): Promise<Record<string, string> | null> => {
  const db = await openDB();
  return new Promise((resolve) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(lang);

    request.onsuccess = () => {
      const result = request.result as Record<string, string> | null;
      resolve(result);
    };
    request.onerror = () => resolve(null);
  });
};

export const cacheTranslation = async (lang: string, data: Record<string, string>): Promise<void> => {
  const db = await openDB();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  store.put(data, lang);
};



export const fetchTranslation = async (lang: string): Promise<Record<string, string>> => {
    const cachedTranslation = await getCachedTranslation(lang);
    if (cachedTranslation) {
      console.log(`✅ Get translation from cache: ${lang}`);
      return cachedTranslation;
    }
  
    try {
      const response = await fetch(`/locales/${lang}.json`);
      if (!response.ok) throw new Error("error get translation");
  
      const data = await response.json();
      await cacheTranslation(lang, data); // Кешуємо
  
      return data;
    } catch (error) {
      console.error(error);
      return {}; 
    }
  };