/**
  this is the core module of i18n in jb design system its is just a main store for keeping data and change config.
  every helper method will implement as an independent functions and class, so modules only use instance of an this class as a input to each used function
*/
const localeDefaults: Partial<Record<string, Intl.LocaleOptions>> = {
  en: {
    calendar: "gregory",
    numberingSystem: "latn",
    region: "US",
  },
  fa: {
    calendar: "persian",
    numberingSystem: "latn",
    region: "IR",
  },
};

/** Resolve a locale while preserving explicit options and applying JB language defaults. */
export function resolveLocale(locale: string | Intl.Locale): Intl.Locale {
  const requestedLocale = new Intl.Locale(locale);
  const defaults = localeDefaults[requestedLocale.language];
  if (!defaults) {
    return requestedLocale;
  }

  return new Intl.Locale(requestedLocale, {
    calendar: requestedLocale.calendar ?? defaults.calendar,
    numberingSystem: requestedLocale.numberingSystem ?? defaults.numberingSystem,
    region: requestedLocale.region ?? defaults.region,
  });
}

export class JBI18N {
  #locale: Intl.Locale;
  #listeners = new Set<VoidFunction>();

  constructor(locale?: string | Intl.Locale) {
    const initialLocale = locale ?? (typeof document === "undefined" ? "en" : document.documentElement?.lang || "en");
    this.#locale = resolveLocale(initialLocale);
  }

  get locale(): Intl.Locale {
    return this.#locale;
  }

  #applyLocale(locale: string | Intl.Locale) {
    const resolvedLocale = resolveLocale(locale);
    if (this.#locale.toString() === resolvedLocale.toString()) {
      return false;
    }
    this.#locale = resolvedLocale;
    return true;
  }

  setLocale(locale: string | Intl.Locale) {
    if (this.#applyLocale(locale)) {
      this.#callListeners();
    }
  }

  /** Subscribe to locale changes. Returns a cleanup function. */
  subscribe(callback: VoidFunction): VoidFunction {
    this.#listeners.add(callback);
    return () => this.#listeners.delete(callback);
  }

  #callListeners() {
    [...this.#listeners].forEach(callback => {
      callback();
    });
  }
}

export const i18n = new JBI18N();
