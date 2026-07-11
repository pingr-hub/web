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

// Locale prefixes for the non-default languages (e.g. "/es", "/de", "/tr").
const localePrefixes = (Object.keys(languages) as Lang[])
  .filter((l) => l !== defaultLang)
  .map((l) => `/${l}`);

/**
 * Strip any locale prefix from a pathname, returning the locale-agnostic path.
 * Used to keep a user on the same page when switching language.
 *   "/de/privacy" → "/privacy",  "/de" → "/",  "/privacy" → "/"
 * The `pf + "/"` guard prevents false matches like "/details" on "/de".
 */
export function stripLocalePath(path: string): string {
  const p = path === "/" ? "/" : path.replace(/\/$/, "");
  for (const pf of localePrefixes) {
    if (p === pf) return "/";
    if (p.startsWith(pf + "/")) return p.slice(pf.length) || "/";
  }
  return p;
}

/**
 * Localized equivalent of the current page for the target language, with a
 * consistent trailing slash (Astro's directory build emits /x/index.html, so
 * the slashed form resolves on strict static hosts too).
 *   currentPath "/privacy", code "de" → "/de/privacy/"
 *   currentPath "/",       code "de" → "/de/"
 *   currentPath "/",       code "en" → "/"
 */
export function localizedHrefFor(currentPath: string, code: Lang): string {
  const prefix = code === defaultLang ? "" : `/${code}`;
  return currentPath === "/" ? `${prefix}/` : `${prefix}${currentPath}/`;
}
