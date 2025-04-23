import { setCssProperty } from "./utils";

export const colors = {
  single:{
    black:"oklch(0.14 0 0)",
    white:"oklch(1 0 0)",
    highlight:"oklch(0.93 0.2302 125.18)"
  },
  primary:{
    main:'oklch(0.6 0.26 256)',
    hover:getHoverColor(0.6,0.26,256),
    pressed:getPressedColor(0.6,0.26,256),
    lighter:getLighterColor(0.6,0.26,256),
  },
  secondary:{
    main:'oklch(0.6 0.26 286)',
    hover:getHoverColor(0.6,0.26,286),
    pressed:getPressedColor(0.6,0.26,286),
    lighter:getLighterColor(0.6,0.26,286),
  },
  neutral: [getNeutralColor(0),getNeutralColor(1),getNeutralColor(2),getNeutralColor(3),getNeutralColor(4),getNeutralColor(5),getNeutralColor(6),getNeutralColor(7),getNeutralColor(8),getNeutralColor(9),getNeutralColor(10)],
  yellow:{
    main:'oklch(0.75 0.18 70)',
    hover:getHoverColor(0.75, 0.18, 70),
    pressed:getPressedColor(0.75, 0.18, 70),
    lighter:getLighterColor(0.75, 0.18, 70),
  },
  green:{
    main:"oklch(0.68 0.1484 162.1)",
    hover:getHoverColor(0.68,0.1484,162.1),
    pressed:getPressedColor(0.68,0.1484,162.1),
    lighter:getLighterColor(0.68,0.1484,162.1),
  },
  red:{
    main:"oklch(0.6 0.22 23.21)",
    hover:getHoverColor(0.6,0.22,23.21),
    pressed:getPressedColor(0.6,0.22,23.21),
    lighter:getLighterColor(0.6,0.22,23.21),
  },
} as const;
export type JBThemeColors = typeof colors;

export function defineColors() {
  defineColorCodes();
  defineTextColors();
}
function defineColorCodes(){
  setCssProperty({
    name: "--jb-primary",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.primary.main,
  });
  setCssProperty({
    name: "--jb-secondary",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.secondary.main,
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
    name: "--jb-highlight",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.highlight ,
  });
  setCssProperty({
    name: "--jb-yellow",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.yellow.main,
  });
  setCssProperty({
    name: "--jb-green",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.green.main,
  });
  setCssProperty({
    name: "--jb-red",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.red.main,
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
      initialValue: colors.neutral[i],
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
  setCssProperty({
    name: "--jb-text-contrast",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.white,
  });
}

//
export function getNeutralColor(index: number) {
  return `oklch(${(6 * (3+index*1.3))*0.01} ${(14+(index*0.09))*0.001} 258.36)`;
}
export function getHoverColor(lightness:number, chroma:number, hue:number){
  return `oklch(${lightness + 0.07} ${chroma + 0.07} ${hue})`;
}
export function getPressedColor(lightness:number, chroma:number, hue:number){
  return `oklch(${lightness - 0.1} ${chroma - 0.05} ${hue})`;
}

export function getLighterColor(lightness: number,chroma: number,hue: number) {
  // Perceptual lightness increase (curved adjustment)
  const newL = Math.min(lightness + 0.12 * (1 - lightness), 0.985);
  
  // Chroma preservation with gamut safety
  const newC = chroma * (1 - 0.15 * (newL - lightness));
  
  // Hue preservation (no shift)
  return `oklch(${newL.toFixed(3)} ${newC.toFixed(3)} ${hue})`;
}