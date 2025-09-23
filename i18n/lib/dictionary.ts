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