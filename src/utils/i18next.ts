import i18next from "i18next";

import { localizations } from "constants/index";

i18next.init({
  lng: typeof document !== "undefined" ? document.documentElement.lang : "en",
  resources: {
    en: {
      translation: localizations.en,
    },
    nl: {
      translation: localizations.nl,
    },
  },
});

export default i18next;
