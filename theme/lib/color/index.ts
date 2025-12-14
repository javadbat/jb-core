import { defaultColors } from "./constants";
import { defineColorCodes, defineTextColors } from "./define-colors";
import { JBColor } from "./jb-color";
import type { ColorGroupsKey, JBColorGroup, JBThemeColors, OklchParams } from "./types";
import { createColorGroup } from "./utils";
export * from './utils';
export * from "./jb-color";
export * from "./types";


export { defaultColors };

export function defineColors() {
  defineColorCodes(defaultColors);
  defineTextColors(defaultColors);
}


export type SetThemeColorParameter = {[key in ColorGroupsKey]?:JBColorGroup}
export function setColors(colors: SetThemeColorParameter) {
  function setColor(color: JBColor) {
    document.documentElement.style.setProperty(color.variableName, color.value);
  }
  function setColorGroup(group:JBColorGroup){
    setColor(group.main);
    setColor(group.light);
    setColor(group.dark);
    setColor(group.contrast);
    setColor(group.subtle);
    setColor(group.hover);
    setColor(group.pressed);
  }
  colors.primary && setColorGroup(colors.primary);
  colors.secondary && setColorGroup(colors.secondary);
  colors.green && setColorGroup(colors.green);
  colors.red && setColorGroup(colors.red);
  colors.yellow && setColorGroup(colors.yellow);
}

export type CreateThemeColorParameter = {[key in ColorGroupsKey]?:OklchParams}

export function createThemeColor(parameter: CreateThemeColorParameter): Partial<JBThemeColors> {
  const themeColors: Partial<JBThemeColors> = {};
  Object.keys(parameter).forEach((key: keyof CreateThemeColorParameter) => {
    const baseColor = new JBColor(parameter[key], `---jb-${key}`);
    const colorGroup = createColorGroup(baseColor);
    themeColors[key] = colorGroup;
  });
  return themeColors;
}