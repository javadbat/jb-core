export function uniqueId(prefix = '') {
  if (crypto?.randomUUID) return `${prefix}-${crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
/**
 * to convert string attribute value to boolean in web-component.
 */
export function parseBooleanAttribute(value: string | null, defaultValue = false): boolean {
  if (value === null) {
    return defaultValue;
  }
  if (value === "" || value.toLowerCase() === "true") {
    return true;
  }
  if (value.toLowerCase() === "false") {
    return false;
  }
  return Boolean(value);
}
