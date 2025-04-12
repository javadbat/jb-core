import { setCssProperty } from "./utils";

export const colors = {
  single:{
    black:"oklch(0.14 0 0)",
    white:"oklch(1 0 0)",
  }
}
export function defineColors() {
  defineColorCodes();
  defineTextColors();
}
function defineColorCodes(){
  setCssProperty({
    name: "--jb-primary",
    syntax: "<color>",
    inherits: true,
    initialValue: "oklch(0.6 0.26 256)",
  });
  setCssProperty({
    name: "--jb-neutral",
    syntax: "<color>",
    inherits: true,
    initialValue: "oklch(0.18 0.014 258.36)",
  });
  setCssProperty({
    name: "--jb-black",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.black,
  });
  setCssProperty({
    name: "--jb-white",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.white ,
  });
  setCssProperty({
    name: "--jb-green",
    syntax: "<color>",
    inherits: true,
    initialValue: "oklch(0.68 0.1484 162.1)",
  });
  setCssProperty({
    name: "--jb-red",
    syntax: "<color>",
    inherits: true,
    initialValue: "oklch(0.6 0.22 23.21)",
  });
  setCssProperty({
    name: `--jb-neutral`,
    syntax: "<color>",
    inherits: true,
    initialValue: getNeutralColor(0),
  });
  for(let i=1;i<=10;i++){
    setCssProperty({
      name: `--jb-neutral-${i}`,
      syntax: "<color>",
      inherits: true,
      initialValue: getNeutralColor(i),
    });
  }
}
function defineTextColors() {
  setCssProperty({
    name: "--jb-text-primary",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.black,
  });
  setCssProperty({
    name: "--jb-text-secondary",
    syntax: "<color>",
    inherits: true,
    initialValue: getNeutralColor(7),
  });
}

//
export function getNeutralColor(index: number) {
  return `oklch(${(6 * (3+index*1.3))*0.01} ${(14+(index*0.09))*0.001} 258.36)`;
}