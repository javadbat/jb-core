import { defaultColors } from "./constants";
import { setCssProperty } from "../utils";

export type JBThemeColors = typeof defaultColors;
export {defaultColors};
export function defineColors() {
  defineColorCodes(defaultColors);
  defineTextColors(defaultColors);
}
function defineColorCodes(colors:JBThemeColors){
  setCssProperty({
    name: colors.primary.main.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.primary.main.value,
  });
  setCssProperty({
    name: colors.secondary.main.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.secondary.main.value,
  });
  setCssProperty({
    name: "--jb-neutral",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.neutral[0].value,
  });
  setCssProperty({
    name: colors.single.black.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.black.value,
  });
  setCssProperty({
    name: colors.single.white.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.white.value,
  });
  setCssProperty({
    name: colors.single.highlight.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.highlight.value,
  });
  setCssProperty({
    name: colors.yellow.main.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.yellow.main.value,
  });
  setCssProperty({
    name: colors.green.main.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.green.main.value,
  });
  setCssProperty({
    name: colors.red.main.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.red.main.value,
  });
  setCssProperty({
    name: `--jb-neutral`,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.neutral[0].value,
  });
  for(let i=1;i<=10;i++){
    setCssProperty({
      name: colors.neutral[i].variableName,
      syntax: "<color>",
      inherits: true,
      initialValue: colors.neutral[i].value,
    });
  }
}
function defineTextColors(colors:JBThemeColors) {
  setCssProperty({
    name: "--jb-text-primary",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.black.value,
  });
  setCssProperty({
    name: "--jb-text-secondary",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.neutral[7].value,
  });
  setCssProperty({
    name: "--jb-text-contrast",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.white.value,
  });
}
