import { defineColors } from "./color/index.js";
import { defineShadows } from "./shadow/index.js";
import { defineSizes } from "./sizes/index.js";

export function registerDefaultVariables() {
  defineSizes();
  defineColors();
  defineShadows();
}