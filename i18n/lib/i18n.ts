/**
  this is the core module of i18n in jb design system its is just a main store for keeping data and change config.
  every helper method will implement as an independent functions and class, so modules only use instance of an this class as a input to each used function
*/
export class JBI18N {
  locale: Intl.Locale
  constructor() {
    const lang = document?.documentElement?.lang || "en"
    switch (lang) {
      case "fa":
        this.locale = new Intl.Locale("fa", {
          calendar: "persian",
          region: "US",
        })
        break;
      case "en":
      default:
        this.locale = new Intl.Locale("en", {
          calendar: "gregory",
          region: "US",
        });
        break;

    }
  }
  setLocale(locale: Intl.Locale) {
    this.locale = locale;
  }
}

export const i18n = new JBI18N();
