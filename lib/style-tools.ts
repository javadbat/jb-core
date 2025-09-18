export function injectCss (css: string, mainDom: ShadowRoot|Document = document) {
  const stylesheet = new CSSStyleSheet();
  stylesheet.replaceSync(css);
  mainDom.adoptedStyleSheets.push(stylesheet);
  return stylesheet;
}