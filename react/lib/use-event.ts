import { useCallback, useEffect } from "react";

export function useEvent<TRef extends React.MutableRefObject<any|null>,TEvent>(ref:TRef, event:string, handler?:(e:TEvent)=>void, passive = false) {
  const internalHandler = useCallback((e:TEvent)=>{
    if(ref.current && typeof handler == "function"){
      handler(e);
    }
  },[ref,handler]);
  useEffect(() => {
    const dom = ref.current;
    if (dom) {
      // initiate the event handler
      dom.addEventListener(event, internalHandler, passive); 
    }
    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      if(dom){
        dom.removeEventListener(event, internalHandler, passive);
      }
    };
  },[ref,event,handler,passive]);
}