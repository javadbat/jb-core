import { parseNumberAttribute } from "./utils.ts";

Deno.test("parseNumberAttribute parses finite numeric attribute values", () => {
  if (parseNumberAttribute("12.5") !== 12.5) throw new Error("Expected a decimal value");
  if (parseNumberAttribute("-4") !== -4) throw new Error("Expected a negative value");
});

Deno.test("parseNumberAttribute uses its fallback for absent or invalid values", () => {
  if (parseNumberAttribute(null, 10) !== 10) throw new Error("Expected fallback for null");
  if (parseNumberAttribute("", 10) !== 10) throw new Error("Expected fallback for an empty string");
  if (parseNumberAttribute("not-a-number", 10) !== 10) throw new Error("Expected fallback for invalid input");
  if (parseNumberAttribute("Infinity", 10) !== 10) throw new Error("Expected fallback for a non-finite value");
});
