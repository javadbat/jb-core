import { registerCssProperty } from "../utils";

export function defineShadows() {
  defineVariants();
  defineControlShadow();
}
function defineVariants() {
  registerCssProperty({
    name: "--jb-shadow-sm",
    inherits: true,
    value: "none",
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
