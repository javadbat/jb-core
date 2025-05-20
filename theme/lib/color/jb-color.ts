import type { OklchParams } from "./types";

export class JBColor {
  lightness:number;
  chroma:number;
  hue:number;
  variableName?:`--${string}`;
  get value(){
    return `oklch(${this.lightness} ${this.chroma} ${this.hue})`;
  }
  constructor(colorParams:OklchParams, variableName?:`--${string}`) {
    this.variableName = variableName;
    this.lightness = colorParams.lightness;
    this.chroma = colorParams.chroma;
    this.hue = colorParams.hue;
  }
}
