export function setCssProperty(value: PropertyDefinition) {
  try {
    window.CSS.registerProperty({
      ...value
    });
  } catch (e) {
    // if property is already defined
  }
}