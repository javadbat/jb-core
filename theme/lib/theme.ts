import { defineColors } from "./color/index.js";
import { defineSizes } from "./sizes/index.js";

export function registerDefaultVariables() {
  defineSizes();
  defineColors();
}