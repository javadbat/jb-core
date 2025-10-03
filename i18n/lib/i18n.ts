/**
  this is the core module of i18n in jb design system its is just a main store for keeping data and change config.
  every helper method will implement as an independent functions and class, so modules only use instance of an this class as a input to each used function
*/
type I18nEventListeners = {
  localeChange:VoidFunction[]
}
export class JBI18N {
  locale: Intl.Locale
  #listeners:I18nEventListeners = {
    localeChange:[]
  }
  constructor() {
    this.#initLang();
    this.#listenForAttributeChange()
  }
  #initLang(){
    const lang = document?.documentElement?.lang || "en"
    switch (lang) {
      case "fa":
        this.locale = new Intl.Locale("fa", {
          calendar: "persian",
          numeric: false,
          region: "IR",
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
    this.callListeners("localeChange")
  }
  #listenForAttributeChange() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation)=>{
        if(mutation.attributeName == "lang"){
          this.#initLang();
          this.callListeners("localeChange")
        }
      })
    });
    observer.observe(document.documentElement,{attributeFilter:["lang"],childList:false,subtree:false,attributes:true})
  }
  addEventListener<K extends keyof I18nEventListeners>(key:K, callback:I18nEventListeners[K][0]){
    this.#listeners[key].push(callback)
  }
  callListeners(key:keyof I18nEventListeners){
    this.#listeners[key].forEach(x=>x());
  }
}

export const i18n = new JBI18N();
