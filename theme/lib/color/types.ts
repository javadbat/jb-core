import type { JBColor } from "./jb-color"

export type OklchParams = {lightness: number, chroma: number, hue: number};
export type JBColorGroup = {
    main: JBColor,
    hover:JBColor,
    pressed:JBColor,
    light:JBColor,
    dark:JBColor,
    subtle:JBColor,
    contrast:JBColor
}
export type ColorGroupsKey = 'primary' | 'secondary' | 'yellow' | 'green' | 'red';
export type JBThemeColors = {[key in ColorGroupsKey]:JBColorGroup} & {
  single:{
    black:JBColor,
    white:JBColor,
    highlight:JBColor
  },
  neutral: JBColor[],
}