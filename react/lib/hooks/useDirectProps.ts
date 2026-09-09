import { type ForwardedRef, type RefObject, useCallback, useImperativeHandle, useRef, useState } from "react";

export type UseDirectPropsReturn<TElement, TProps> = {
  directProps: Partial<Omit<TProps, "ref" | "onInit" | "oninit">> & { oninit: (event: unknown) => void };
  element: RefObject<TElement | null>;
};

type DirectBaseProps<TElement> = {
  ref?: ForwardedRef<TElement | null | undefined>;
  onInit?: (e: unknown) => unknown;
};
/**
 * will handle essential need of jb design system react wrappers
 */
export function useDirectProps<TElement, TProps extends DirectBaseProps<TElement>>(props: TProps): UseDirectPropsReturn<TElement, TProps> {
  const element = useRef<TElement>(null);
  const [isConnected, setIsConnected] = useState(false);
  const { ref, onInit, ...otherProps } = props;
  const handleInit = useCallback(
    (e: unknown) => {
      onInit?.(e);
      queueMicrotask(() => {
        if (element.current) setIsConnected(true);
      });
    },
    [onInit],
  );
  useImperativeHandle(ref, () => element.current ?? undefined, []);
  const directProps = { ...(isConnected ? otherProps : {}), oninit: handleInit } as UseDirectPropsReturn<TElement, TProps>["directProps"];
  return { directProps, element };
}
