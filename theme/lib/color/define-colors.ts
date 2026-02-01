import { registerCssProperty } from "../utils";
import type { JBColor } from "./jb-color";
import type { JBColorGroup, JBThemeColors } from "./types";

function defineColor(color:JBColor , name?:string){
registerCssProperty({
    name: name??color.variableName,
    syntax: "<color>",
    inherits: true,
    initialValue: color.value,
  });
}
function defineColorGroup(group:JBColorGroup){
  defineColor(group.main);
  defineColor(group.dark);
  defineColor(group.light);
  defineColor(group.contrast);
  defineColor(group.hover);
  defineColor(group.pressed);
  defineColor(group.subtle);
}
export function defineColorCodes(colors:JBThemeColors){
  defineColor(colors.neutral[0],'--jb-neutral');
  defineColorGroup(colors.primary);
  defineColorGroup(colors.secondary);
  defineColorGroup(colors.red);
  defineColorGroup(colors.red);
  defineColorGroup(colors.green);
  defineColorGroup(colors.yellow);
  defineColor(colors.single.black);
  defineColor(colors.single.white);
  defineColor(colors.single.highlight);
  for(let i=1;i<=10;i++){
    defineColor(colors.neutral[i])
  }
}

export function defineTextColors(colors:JBThemeColors) {
  defineColor(colors.single.black, "--jb-text-primary");
  defineColor(colors.neutral[7], "--jb-text-secondary");
  defineColor(colors.single.white, "--jb-text-contrast");
}
