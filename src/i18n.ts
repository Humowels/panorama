export const defaultLocale = "ru";
export const locales = ["ru", "uz", "en"] as const;
export type ValidLocale = (typeof locales)[number];

export type Locales = "ru" | "uz";

const dictionaries: Record<ValidLocale, any> = {
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
  uz: () => import("./dictionaries/uz.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
} as const;

export const getTranslator = async (locale: ValidLocale) => {
  const dictionary = await dictionaries[locale]();
  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = key
      .split(".")
      .reduce((obj, key) => obj && obj[key], dictionary);
    if (!translation) {
      return key;
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value));
      });
    }
    return translation;
  };
};
