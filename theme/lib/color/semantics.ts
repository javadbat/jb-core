import { setCssProperty } from "../utils";
import { defaultColors } from "./constants";
import type { JBColor } from "./jb-color";

export function defineSemanticColors() {
  defineTextColors();
  defineSurfaceColors();
}
function defineSurfaceColors() {
  defineSemanticColor("--jb-surface-primary", defaultColors.single.white);
  defineSemanticColor("--jb-surface-secondary", defaultColors.neutral[10]);
  defineSemanticColor("--jb-surface-inverse", defaultColors.single.black);
}
function defineTextColors() {
  defineSemanticColor("--jb-text-primary", defaultColors.single.black);
  defineSemanticColor("--jb-text-secondary", defaultColors.neutral[7]);
  defineSemanticColor("--jb-text-inverse", defaultColors.single.white);
}

function defineSemanticColor(semanticVariableName: `--${string}`, color: JBColor) {
  if (!color.variableName) {
    console.error("Semantic colors must reference a named primitive",color);
  }else{
      setCssProperty(semanticVariableName, `var(${color.variableName})`);
  }
}
