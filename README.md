# jb-core

core modules of jb-design system mostly contain functions that help you manage your web-components & tools to connect them to ReactJS components.


## React Modules

to see react modules please see [`jb-core/react`](https://github.com/javadbat/jb-core/tree/main/react)

## listenAndSilentEvent

this function listen to event in the capture phase and stop it's propagation and call your handler so you will be the only one who capture this event used for event forwarding (transformation) in web-components.

```js
  listenAndSilentEvent(inputDom, 'keyup', yourOnKeyUpHandler);
  listenAndSilentEvent(inputDom, 'keyup', yourOnKeyUpHandler,{passive:true});
```

## create events

these functions will create events base on existing event objects used mostly for event forwarding.

```ts
  #onInputInput(e:InputEvent){
    const event = createInputEvent('input', e, { cancelable: false });
    this.dispatchEvent(event);
  }
    
```
we also have `createKeyboardEvent`, `createInputEvent`, `createFocusEvent`.

## Inject Style

when you have your styles in a string and you want to inject it in document or shadowroot you can use this function.

```ts
import CSS from './style.css';
import {injectCss} from 'jb-core';

injectCss(CSS);
// same as
injectCss(CSS, document);
// in web-components when you want inject your style inside shadow DOM
injectCss(CSS, this.shadowRoot);
```