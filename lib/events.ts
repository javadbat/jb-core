/**
 * add type to event target for easier access to target
 */
export type EventTypeWithTarget<TEvent,TTarget> = TEvent & {
  target: TTarget;
};
/**
 * create a keyboardEvent based on `e` value and replace them with initObj
 */
export function createKeyboardEvent(eventName:string,e:KeyboardEvent,initObj:KeyboardEventInit){
  const initialObject: KeyboardEventInit = {
    altKey:e.altKey,
    bubbles:e.bubbles,
    cancelable:e.cancelable,
    code:e.code,
    composed:e.composed,
    ctrlKey:e.ctrlKey,
    detail:e.detail,
    isComposing:e.isComposing,
    key:e.key,
    location:e.location,
    metaKey:e.metaKey,
    repeat:e.repeat,
    shiftKey:e.shiftKey,
    view:e.view,
    charCode:e.charCode,
    keyCode:e.keyCode,
    which:e.which,
    ...initObj   
  };
  const event = new KeyboardEvent(eventName, initialObject);
  return event;
}
/**
 * create a InputEvent based on `e` value and replace them with initObj
 */
export function createInputEvent(eventName:string,e:InputEvent,initObj:InputEventInit){
  const initialObject: InputEventInit = {
    bubbles:e.bubbles,
    cancelable:e.cancelable,
    composed:e.composed,
    detail:e.detail,
    isComposing:e.isComposing,
    view:e.view,
    which:e.which,
    data:e.data,
    dataTransfer:e.dataTransfer,
    inputType:e.inputType,
    targetRanges: typeof e.getTargetRanges() == "function"?e.getTargetRanges():[],
    ...initObj   
  };
  const event = new InputEvent(eventName, initialObject);
  return event;
}

/**
 * create a InputEvent based on `e` value and replace them with initObj
 */
export function createFocusEvent(eventName:string,e:FocusEvent,initObj:FocusEventInit){
  const initialObject: FocusEventInit = {
    bubbles:e.bubbles,
    cancelable:e.cancelable,
    composed:e.composed,
    detail:e.detail,
    view:e.view,
    which:e.which,
    relatedTarget:e.relatedTarget,
    ...initObj   
  };
  const event = new FocusEvent(eventName, initialObject);
  return event;
}