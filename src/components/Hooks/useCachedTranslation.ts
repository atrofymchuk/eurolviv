import { useEffect, useState } from "react";
import { fetchTranslation } from "../../utils/cacheTranslations";
import i18n from "i18next";

const useCachedTranslation = (lang: string) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTranslation(lang)
      .then((data) => {
        i18n.addResourceBundle(lang, "translation", data, true, true);
      })
      .finally(() => setLoading(false));
  }, [lang]);

  return loading;
};

export default useCachedTranslation;
