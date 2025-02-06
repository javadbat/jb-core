# jb-core

core modules of jb-design system

## React modules:

### useEvent

used to bind web-component events to react component event prop

```jsx
import {useEvent} from 'jb-core/react';

useEvent(ref,'event',props.onEvent);
//for example
useEvent(ref,'change',props.onChange);
```
