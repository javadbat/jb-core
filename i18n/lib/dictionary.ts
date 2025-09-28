import type { JBI18N } from "./i18n";

export function getRequiredMessage(context:JBI18N,label?:string){
  switch(context.locale.language){
    case 'fa':
      return label?`لطفاً ${label} خود را وارد نمایید`:'لطفاً این قسمت را پر کنید';
    case 'en':
    default:
      return label?`Please enter your ${label}`:'Please complete this field';
  }
}
export class JBDictionary<T extends object> { 
  dictionary: Record<string,T> = {}
  constructor(initialDictionary:Record<string,T>){
    this.dictionary = initialDictionary;
  }
  /**
   * add new or replace existing language with given dictionary
   * @param languageKey language standard key like "fa" or "en"
   * @param dictionary key value object of strings and messages
   */
  setLanguage(languageKey:string,dictionary:T){
    this.dictionary[languageKey] = dictionary;
  }
  //TODO: add support for nested path
  /**
   * get value of given key in dictionary with fallback to english dictionary
   * @param i18n instance of i18n config
   * @param key key of dictionary object
   * @returns value of the dictionary with "en" fallback
   */
  get<K extends keyof T>(i18n:JBI18N,key:K):T[K]{
    const obj = this.dictionary[i18n.locale.language]?this.dictionary[i18n.locale.language]:this.dictionary["en"];
    return obj[key]?obj[key]:this.dictionary["en"][key];
  }
}