import type { DetailedHTMLProps } from "react";

type ReactElementStandardProps<TElement=HTMLElement> = DetailedHTMLProps<React.HTMLAttributes<TElement>, TElement>;
// Mandatory props that every JB Design System web component react wrapper should support
export type JBElementStandardProps<TElement=HTMLElement, TOmit extends string = never> = Omit<ReactElementStandardProps<TElement>, 'ref' | 'key' | TOmit>