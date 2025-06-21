# jb-core react modules

## useEvent

used to bind web-component events to react component event prop

```jsx
import {useEvent} from 'jb-core/react';

useEvent(ref,'event',props.onEvent);
//for example
useEvent(ref,'change',props.onChange);
```

### useInstance

create a instance of an class inside a react component.

```js
useInstance(YourClass,[arg1,arg2]);
//for 
class YourClass{
  constructor(arg1,arg2){

  }
}

```