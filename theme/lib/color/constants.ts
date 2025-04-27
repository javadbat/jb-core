import { JBColor } from "./jb-color";
import { getHoverColor, getLighterColor, getNeutralColor, getPressedColor } from "./utils";

const primary = new JBColor({lightness:0.6,chroma:0.26,hue:256},'--jb-primary');
const secondary = new JBColor({lightness:0.6,chroma:0.26,hue:286},'--jb-secondary');
const yellow = new JBColor({lightness:0.75,chroma:0.18,hue:70},'--jb-yellow');
const green = new JBColor({lightness:0.68,chroma:0.1484,hue:162.1},'--jb-green');
const red = new JBColor({lightness:0.6,chroma:0.22,hue:23.21},'--jb-red');
export const defaultColors = {
  single:{
    black: new JBColor({lightness:0.14,chroma:0,hue:0},'--jb-black'),
    white: new JBColor({lightness:1,chroma:0,hue:0},'--jb-white'),
    highlight:new JBColor({lightness:0.93,chroma:0.2302,hue:125.18},'--jb-highlight'),
  },
  primary:{
    main: primary,
    hover:getHoverColor(primary),
    pressed:getPressedColor(primary),
    light:getLighterColor(primary),
  },
  secondary:{
    main:secondary,
    hover:getHoverColor(secondary),
    pressed:getPressedColor(secondary),
    light:getLighterColor(secondary),
  },
  neutral: [getNeutralColor(0),getNeutralColor(1),getNeutralColor(2),getNeutralColor(3),getNeutralColor(4),getNeutralColor(5),getNeutralColor(6),getNeutralColor(7),getNeutralColor(8),getNeutralColor(9),getNeutralColor(10)],
  yellow:{
    main:yellow,
    hover:getHoverColor(yellow),
    pressed:getPressedColor(yellow),
    light:getLighterColor(yellow),
  },
  green:{
    main:green,
    hover:getHoverColor(green),
    pressed:getPressedColor(green),
    light:getLighterColor(green),
  },
  red:{
    main:red,
    hover:getHoverColor(red),
    pressed:getPressedColor(red),
    light:getLighterColor(red),
  },
} as const;