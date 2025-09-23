# JB I18N Module

## config file
JB Design System use html tag `lang` attribute to set the default language of it's components.
```html
<html lang="fa">
  <!-- or -->
<html lang="en">
```

if you want to set your locale manually in javascript you just have to import `i18n` and set your default locale:
```ts
import {i18n} from 'jb-core/i18n';
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale for more setting detail
i18n.setLocale(new Intl.Locale("fa"))
```

## internal methods

this methods are internal methods and intended to be used inside jb design system modules but you can also use them if you are creating modules

### getRequiredMessage
used to get error message of required filed base on their label

```ts
getRequiredMessage(context:JBI18N,label?:string)
//example
import {i18n,getRequiredMessage} from 'jb-core/i18n';
getRequiredMessage(i18n,"your label");
```