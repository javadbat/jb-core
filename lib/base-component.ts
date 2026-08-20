// create this base component to make web-component SSR work in nodejs environment, because HTMLElement is not defined in nodejs
const HTMLElementBase = globalThis.HTMLElement ?? class {} as typeof HTMLElement;
export const JBBaseComponent = HTMLElementBase;

export function defineWebComponent(tagName: string, componentClass: typeof JBBaseComponent) {
  if (typeof customElements !== "undefined" && !customElements.get(tagName)) {
    customElements.define(tagName, componentClass);
  }
}
