import { setCssProperty } from "../utils";
import { defaultColors } from "./constants";
import type { JBColor } from "./jb-color";

export function defineSemanticColors() {
  defineContentColors();
  defineSurfaceColors();
}
function defineSurfaceColors() {
  defineSemanticColor("--jb-surface-primary", defaultColors.single.white);
  defineSemanticColor("--jb-surface-secondary", defaultColors.neutral[10]);
  defineSemanticColor("--jb-surface-inverse", defaultColors.single.black);
}
function defineContentColors() {
  defineSemanticColor("--jb-content-primary", defaultColors.single.black);
  defineSemanticColor("--jb-content-secondary", defaultColors.neutral[7]);
  defineSemanticColor("--jb-content-inverse", defaultColors.single.white);
}

function defineSemanticColor(semanticVariableName: `--${string}`, color: JBColor) {
  if (!color.variableName) {
    console.error("Semantic colors must reference a named primitive",color);
  }else{
      setCssProperty(semanticVariableName, `var(${color.variableName})`);
  }
}
