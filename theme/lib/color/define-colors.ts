import { registerCssProperty } from "../utils";
import type { JBColor } from "./jb-color";
import type { JBThemeColors } from "./types";

function defineColor(color:JBColor , name?:string){
registerCssProperty({
    name: name??color.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: color.value,
  });
}

export function defineColorCodes(colors:JBThemeColors){
  defineColor(colors.neutral[0],'--jb-neutral');
  defineColor(colors.primary.main);
  defineColor(colors.secondary.main);
  defineColor(colors.single.black);
  defineColor(colors.single.white);
  defineColor(colors.single.highlight);
  defineColor(colors.yellow.main);
  defineColor(colors.green.main);
  defineColor(colors.red.main);
  defineColor(colors.red.main);
  for(let i=1;i<=10;i++){
    defineColor(colors.neutral[i])
  }
}

export function defineTextColors(colors:JBThemeColors) {
  defineColor(colors.single.black, "--jb-text-primary");
  defineColor(colors.neutral[7], "--jb-text-secondary");
  defineColor(colors.single.white, "--jb-text-contrast");
}
