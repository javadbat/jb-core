import { JBColor } from "./jb-color";

export function getNeutralColor(index: number) {
  return new JBColor({lightness: (6 * (3+index*1.3))*0.01, chroma: (14+(index*0.09))*0.001, hue:258.36}, `--jb-neutral-${index}`);
}
export function getHoverColor(color:JBColor){
  return new JBColor({lightness: color.lightness + 0.07,chroma: color.chroma + 0.07,hue: color.hue,},`${color.variableName}-hover`);
}
export function getPressedColor(color:JBColor){
  return new JBColor({lightness: color.lightness - 0.1,chroma: color.chroma - 0.05,hue: color.hue,},`${color.variableName}-pressed`);
}

export function getLighterColor(color:JBColor) {
  // Perceptual lightness increase (curved adjustment)
  const newL = Math.min(color.lightness + 0.12 * (1 - color.lightness), 0.985);
  
  // Chroma preservation with gamut safety
  const newC = color.chroma * (1 - 0.15 * (newL - color.lightness));
  
  return new JBColor({lightness: newL, chroma: newC, hue: color.hue}, `${color.variableName}-l`);
}