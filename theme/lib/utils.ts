export type PropertyDefinitionParameter = PropertyDefinition & {
  value?: string,
}

export function registerCssProperty(parameter: PropertyDefinitionParameter) {
  try {
    const { value, ...rest } = parameter;
    if (typeof window.CSS.registerProperty == "function") {
      window.CSS.registerProperty({
        ...rest
      });
    }
    setCssProperty(parameter.name, value);
  } catch (e) {
    // if property is already defined or any other type of error
  }
}

export function setCssProperty(name: string, value?: string) {
  try {
    if (value) {
      if (!document.documentElement.style.getPropertyValue(name)) {
        document.documentElement.style.setProperty(name, value);
      }
    }
  } catch (e) {
    //
  }
}