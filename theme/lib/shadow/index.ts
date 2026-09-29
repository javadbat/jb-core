import { registerCssProperty } from "../utils";

export function defineShadows() {
  defineVariants();
  defineControlShadow();
}
function defineVariants() {
  registerCssProperty({
    name: "--jb-shadow-sm",
    inherits: true,
    // we will add shadow style on our next major release that update ui ->initialValue: "0px 2px 16px -8px #d4d4d4",
    initialValue: "none",
    //currently there is no syntax for shadow value
    syntax: "*",
  });
}
function defineControlShadow() {
  registerCssProperty({
    name: "--jb-control-shadow",
    inherits: true,
    value: "var(--jb-shadow-sm)",
    initialValue: "none",
    //currently there is no syntax for shadow value
    syntax: "*",
  });
  registerCssProperty({
    name: "--jb-control-shadow-focus",
    inherits: true,
    value: "var(--jb-shadow-sm)",
    initialValue: "none",
    //currently there is no syntax for shadow value
    syntax: "*",
  });
}
