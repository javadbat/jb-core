import type { JBI18N } from "./i18n.js";

export function getRequiredMessage(context: JBI18N, label?: string | null) {
  switch (context.locale.language) {
    case "fa":
      return label ? `لطفاً ${label} خود را وارد نمایید` : "لطفاً این قسمت را پر کنید";
    default:
      return label ? `Please enter your ${label}` : "Please complete this field";
  }
}

export type JBDictionaryOptions = {
  fallbackLanguage?: string;
};

export class JBDictionary<T extends object> {
  dictionary: Record<string, Partial<T>> = {};
  fallbackLanguage: string;
  constructor(initialDictionary: Record<string, Partial<T>>, options: JBDictionaryOptions = {}) {
    this.dictionary = initialDictionary;
    this.fallbackLanguage = options.fallbackLanguage ?? "en";
  }
  /**
   * add new or replace existing language with given dictionary
   * @param languageKey language standard key like "fa" or "en"
   * @param dictionary key value object of strings and messages
   */
  setLanguage(languageKey: string, dictionary: Partial<T>) {
    this.dictionary[languageKey] = dictionary;
  }
  /**
   * Get a value using regional locale, base language, configured fallback, then English.
   * @param i18n instance of i18n config
   * @param key key of dictionary object
   * @returns value of the dictionary with "en" fallback
   */
  get<K extends keyof T>(i18n: JBI18N, key: K): T[K] {
    const languageKeys = [i18n.locale.baseName, i18n.locale.language, this.fallbackLanguage, "en"];
    const checkedLanguages = new Set<string>();
    for (const languageKey of languageKeys) {
      if (checkedLanguages.has(languageKey)) {
        continue;
      }
      checkedLanguages.add(languageKey);
      const languageDictionary = this.dictionary[languageKey];
      if (languageDictionary && Object.getOwnPropertyDescriptor(languageDictionary, key)) {
        return languageDictionary[key] as T[K];
      }
    }
    console.error(`Missing i18n message "${String(key)}" for locale "${i18n.locale.toString()}"`);
    return "" as T[K];
  }
}
