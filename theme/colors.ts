export function defineColors() {
  setColorProperty({
    name: "--jb-primary",
    syntax: "<color>",
    inherits: true,
    initialValue: "oklch(0.6 0.26 256)",
  });
  setColorProperty({
    name: "--jb-neutral",
    syntax: "<color>",
    inherits: true,
    initialValue: "oklch(0.18 0.014 258.36)",
  });
  setColorProperty({
    name: "--jb-black",
    syntax: "<color>",
    inherits: true,
    initialValue: "oklch(0.14 0 0)",
  });
  setColorProperty({
    name: "--jb-white",
    syntax: "<color>",
    inherits: true,
    initialValue: "oklch(1 0 0)",
  });
}
function setColorProperty(value: PropertyDefinition) {
  try {
    window.CSS.registerProperty({
      ...value
    });
  } catch (e) {
    // if property is already defined
  }
}
//
export function getNeutralColor(index: number) {
  return `oklch(${(6 * (3+index*1.3))*0.01} ${(14+(index*0.09))*0.001} 258.36)`;
}