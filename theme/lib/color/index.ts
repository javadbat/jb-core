import { defaultColors } from "./constants";
import { registerCssProperty } from "../utils";

export type JBThemeColors = typeof defaultColors;
export {defaultColors};
export function defineColors() {
  defineColorCodes(defaultColors);
  defineTextColors(defaultColors);
}
function defineColorCodes(colors:JBThemeColors){
  registerCssProperty({
    name: colors.primary.main.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.primary.main.value,
  });
  registerCssProperty({
    name: colors.secondary.main.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.secondary.main.value,
  });
  registerCssProperty({
    name: "--jb-neutral",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.neutral[0].value,
  });
  registerCssProperty({
    name: colors.single.black.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.black.value,
  });
  registerCssProperty({
    name: colors.single.white.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.white.value,
  });
  registerCssProperty({
    name: colors.single.highlight.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.highlight.value,
  });
  registerCssProperty({
    name: colors.yellow.main.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.yellow.main.value,
  });
  registerCssProperty({
    name: colors.green.main.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.green.main.value,
  });
  registerCssProperty({
    name: colors.red.main.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.red.main.value,
  });
  registerCssProperty({
    name: `--jb-neutral`,
    syntax: "<color>",
    inherits: true,
    initialValue: colors.neutral[0].value,
  });
  for(let i=1;i<=10;i++){
    registerCssProperty({
      name: colors.neutral[i].variableName,
      syntax: "<color>",
      inherits: true,
      initialValue: colors.neutral[i].value,
    });
  }
}
function defineTextColors(colors:JBThemeColors) {
  registerCssProperty({
    name: "--jb-text-primary",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.black.value,
  });
  registerCssProperty({
    name: "--jb-text-secondary",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.neutral[7].value,
  });
  registerCssProperty({
    name: "--jb-text-contrast",
    syntax: "<color>",
    inherits: true,
    initialValue: colors.single.white.value,
  });
}
