import { registerCssProperty } from "../utils.js";

export function defineSizes() {
  defineBreakpointVariables();
  defineRadiusVariables();
  defineControlHeightVariables();
}
function defineRadiusVariables() {
  // we use px instead of rem because css variables are not support rem as default value and we need to set rem value in a root element
  registerCssProperty({
    name: "--jb-radius",
    inherits: true,
    value: "1rem",
    // it define in @property so it should remain px not rem
    initialValue: "16px",
    syntax: "<length-percentage>",
  });
  registerCssProperty({
    name: "--jb-radius-xs",
    inherits: true,
    value: `0.5rem`,
    initialValue: "8px",
    syntax: "<length-percentage>",
  });
  registerCssProperty({
    name: "--jb-radius-sm",
    inherits: true,
    value: `0.75rem`,
    initialValue: "12px",
    syntax: "<length-percentage>",
  });
  registerCssProperty({
    name: "--jb-radius-lg",
    inherits: true,
    value: `1.25rem`,
    initialValue: "20px",
    syntax: "<length-percentage>",
  });
  registerCssProperty({
    name: "--jb-radius-xl",
    inherits: true,
    value: `1.5rem`,
    initialValue: "24px",
    syntax: "<length-percentage>",
  });
}

function defineControlHeightVariables() {
  registerCssProperty({
    name: "--jb-control-height-xs",
    inherits: true,
    value: "1.5rem",
    initialValue: "24px",
    syntax: "<length-percentage>",
  });
  registerCssProperty({
    name: "--jb-control-height-sm",
    inherits: true,
    value: "2rem",
    initialValue: "32px",
    syntax: "<length-percentage>",
  });
  registerCssProperty({
    name: "--jb-control-height-md",
    inherits: true,
    value: "2.5rem",
    initialValue: "40px",
    syntax: "<length-percentage>",
  });
  registerCssProperty({
    name: "--jb-control-height-lg",
    inherits: true,
    value: "3rem",
    initialValue: "48px",
    syntax: "<length-percentage>",
  });
  registerCssProperty({
    name: "--jb-control-height-xl",
    inherits: true,
    value: "4rem",
    initialValue: "64px",
    syntax: "<length-percentage>",
  });
}

// Currently we just define this and we knew that using var in @custom-media not worked. but when it get supported in lightning css we will update styles to use it. 
export type JBBreakpointsSizes = 'sm' | 'md' | 'lg' | 'xl'
export const breakPoints: Record<JBBreakpointsSizes, number> = {
  sm: 640, 
  md: 768,
  lg: 1024,
  xl: 1280,
};
function defineBreakpointVariables() {
  Object.keys(breakPoints).forEach((key) => {
    registerCssProperty({
      name: `--jb-breakpoint-${key}`,
      inherits: true,
      value: `${breakPoints[key as JBBreakpointsSizes]/16}rem`,
      initialValue: `${breakPoints[key as JBBreakpointsSizes]}px`,
      syntax: "<length-percentage>",
    });
  });
}
