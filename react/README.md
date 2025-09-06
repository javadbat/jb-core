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