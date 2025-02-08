/**
 * add type to event target for easier access to target
 */
export type EventTypeWithTarget<TEvent,TTarget> = TEvent & {
  target: TTarget;
};