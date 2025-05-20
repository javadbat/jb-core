import { JBColor } from "./jb-color";
import type { JBColorGroup } from "./types";

//TODO: add DarkMode and LightMode to all the utils functions.


export function getNeutralColor(index: number) {
  return new JBColor({ lightness: (6 * (3 + index * 1.3)) * 0.01, chroma: (14 + (index * 0.09)) * 0.001, hue: 258.36 }, `--jb-neutral-${index}`);
}
export function getHoverColor(color: JBColor) {
  return new JBColor({ lightness: color.lightness + 0.07, chroma: color.chroma + 0.07, hue: color.hue, }, `${color.variableName}-hover`);
}
export function getPressedColor(color: JBColor) {
  return new JBColor({ lightness: color.lightness - 0.1, chroma: color.chroma - 0.05, hue: color.hue, }, `${color.variableName}-pressed`);
}

export function getLighterColor(color: JBColor) {
  // Perceptual lightness increase (curved adjustment)
  const newL = Math.min(color.lightness + 0.12 * (1 - color.lightness), 0.985);

  // Chroma preservation with gamut safety
  const newC = color.chroma * (1 - 0.15 * (newL - color.lightness));

  return new JBColor({ lightness: newL, chroma: Number(newC.toFixed(3)), hue: color.hue }, `${color.variableName}-l`);
}

export function getDarkerColor(color: JBColor) {
  // Perceptual lightness decrease (curved adjustment)
  const newL = Math.max(color.lightness - 0.12 * color.lightness, 0.02);

  // Chroma preservation with gamut safety (slightly increased chroma as we darken)
  const newC = color.chroma * (1 - 0.15 * (newL - color.lightness));

  return new JBColor({ lightness: newL, chroma: newC, hue: color.hue }, `${color.variableName}-d`);
}
export function getSubtleColor(color: JBColor) {
  // High lightness while maintaining color presence
  const newL = Math.min(color.lightness + 0.65 * (1 - color.lightness), 0.93);

  // Keep substantial chroma but adjusted for lighter tones
  const newC = color.chroma * 0.55 * (1 - 0.08 * (newL - color.lightness));

  // Optional slight hue tuning for pastel aesthetics
  const hueShift = color.hue >= 70 && color.hue <= 162 ? 5 : -3;
  const newHue = color.hue + hueShift;

  return new JBColor(
    { lightness: newL, chroma: Number(newC.toFixed(3)), hue: newHue },
    `${color.variableName}-subtle`
  );
}
/**
 * contrast is the color mostly used for text on top of the background. in light mode it is really dark and in dark mode it is really light.
 * It is not the same as the text color, and can be used elsewhere too.
 */
export function getContrastColor(color: JBColor) {
  // Fixed contrast parameters
  const LIGHTNESS_DEPTH = 0.35; // How much darker we make the color
  const CHROMA_BOOST = 1.6; // Color intensity multiplier
  const MIN_LIGHTNESS = 0.22; // Darkest allowed value
  const MAX_CHROMA = 0.28;// Prevent over-saturation

  // Calculate new values
  const newLightness = Math.max(color.lightness - LIGHTNESS_DEPTH, MIN_LIGHTNESS);
  const newChroma = Math.min(color.chroma * CHROMA_BOOST, MAX_CHROMA);

  // Maintain original hue for color harmony
  return new JBColor(
    {
      lightness: Number(newLightness.toFixed(3)),
      chroma: Number(newChroma.toFixed(3)),
      hue: color.hue
    },
    `${color.variableName}-contrast`
  );
}

export function createColorGroup(color: JBColor): JBColorGroup {
  return {
    main: color,
    hover: getHoverColor(color),
    pressed: getPressedColor(color),
    light: getLighterColor(color),
    dark: getDarkerColor(color),
    subtle: getSubtleColor(color),
    contrast: getContrastColor(color)
  }
}