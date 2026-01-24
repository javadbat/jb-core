import type { DetailedHTMLProps } from "react";

type ReactElementStandardProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
// Mandatory props that every JB Design System web component react wrapper should support
export type JBElementStandardProps = Omit<ReactElementStandardProps, 'ref' | 'key'>