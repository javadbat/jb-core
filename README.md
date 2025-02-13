# jb-core

core modules of jb-design system mostly contain functions that help you manage your web-components & tools to connect them to ReactJS components.

## js modules

### listenAndSilentEvent

this function listen to event in the capture phase and stop it's propagation and call your handler so you will be the only one who capture this event used for event forwarding (transformation) in web-components.

```js
  listenAndSilentEvent(inputDom, 'keyup', yourOnKeyUpHandler);
  listenAndSilentEvent(inputDom, 'keyup', yourOnKeyUpHandler,{passive:true});
```

### create events

these functions will create events base on existing event objects used mostly for event forwarding.

```ts
  #onInputInput(e:InputEvent){
    const event = createInputEvent('input', e, { cancelable: false });
    this.dispatchEvent(event);
  }
    
```
we also have `createKeyboardEvent`, `createInputEvent`, `createFocusEvent`.

## React modules:

### useEvent

used to bind web-component events to react component event prop

```jsx
import {useEvent} from 'jb-core/react';

useEvent(ref,'event',props.onEvent);
//for example
useEvent(ref,'change',props.onChange);
```