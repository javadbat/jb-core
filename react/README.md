# jb-core react modules

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-core)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-core/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-core-react)](https://www.npmjs.com/package/jb-core-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-core)

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

```jsx
import {useInstance} from 'jb-core/react';

//create your class in js 
class YourClass{
  prop1 = null;
  prop2 = null;
  constructor(arg1,arg2){
    this.prop1 = arg1;
    this.prop2 = arg2;
  }
}

//use your class in react component

function YourComponent(){
  //pass args as array in second parameter
  const instance = useInstance(YourClass,[arg1,arg2]);

  return <div>{instance.prop1}</div>

}
```

## Shared Documentation

For web-component behavior, events, slots, and CSS variables, see [`jb-core`](https://github.com/javadbat/jb-core).
