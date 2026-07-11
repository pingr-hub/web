// Build-time i18n helper. Each locale is a dictionary keyed identically to `en`.
// EN is the source of truth for the key set; other locales are typed against it.
import en from "./en";
import es from "./es";
import de from "./de";
import tr from "./tr";

export const languages = {
  en: "EN",
  es: "ES",
  de: "DE",
  tr: "TR",
} as const;

// Full display names for the nav language dropdown.
export const languageNames = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  tr: "Türkçe",
} as const;

export const defaultLang = "en";

export type Lang = keyof typeof languages;
export type TranslationKey = keyof typeof en;

const ui: Record<Lang, Record<TranslationKey, string>> = { en, es, de, tr };

/** Returns a `t(key)` function bound to the given language, falling back to EN.
 *  An empty string counts as "not translated yet" and falls back to English,
 *  so a partially-translated locale renders EN for its missing keys. */
export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    const value = ui[lang][key];
    return value ? value : ui[defaultLang][key];
  };
}

/** Path prefix for a language: "" for the default (root), "/xx" otherwise. */
export function langPath(lang: Lang): string {
  return lang === defaultLang ? "" : `/${lang}`;
}
