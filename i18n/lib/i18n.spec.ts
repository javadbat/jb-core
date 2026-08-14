import { JBDictionary } from "./dictionary.js";
import { JBI18N, resolveLocale } from "./i18n.js";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function assertEquals<T>(actual: T, expected: T, message: string) {
  if (!Object.is(actual, expected)) {
    throw new Error(`${message}: expected ${String(expected)}, received ${String(actual)}`);
  }
}

Deno.test("imports and initializes without DOM globals", () => {
  assertEquals(typeof document, "undefined", "Deno test environment should not expose document");
  const context = new JBI18N();
  assertEquals(context.locale.toString(), "en-US-u-ca-gregory-nu-latn", "SSR locale");
});

Deno.test("reads the document language once during initialization", () => {
  const originalDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  const documentElement = { lang: "fa-IR" };

  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: { documentElement },
  });

  try {
    const context = new JBI18N();
    assertEquals(context.locale.toString(), "fa-IR-u-ca-persian-nu-latn", "Document locale");
    documentElement.lang = "en-GB";
    assertEquals(context.locale.toString(), "fa-IR-u-ca-persian-nu-latn", "Document changes are not observed");
  } finally {
    if (originalDocument) {
      Object.defineProperty(globalThis, "document", originalDocument);
    } else {
      Reflect.deleteProperty(globalThis, "document");
    }
  }
});

Deno.test("resolves regional locales and preserves explicit options", () => {
  const persian = resolveLocale("fa-IR");
  assertEquals(persian.language, "fa", "Persian language");
  assertEquals(persian.region, "IR", "Persian region");
  assertEquals(persian.calendar, "persian", "Persian calendar default");
  assertEquals(persian.numberingSystem, "latn", "Persian numbering default");

  const britishEnglish = resolveLocale("en-GB");
  assertEquals(britishEnglish.region, "GB", "Explicit region");
  assertEquals(britishEnglish.calendar, "gregory", "English calendar default");

  const explicit = resolveLocale("fa-IR-u-ca-gregory-nu-arabext");
  assertEquals(explicit.calendar, "gregory", "Explicit calendar");
  assertEquals(explicit.numberingSystem, "arabext", "Explicit numbering system");

  assertEquals(resolveLocale("fr-FR").toString(), "fr-FR", "Unsupported locale preservation");
});

Deno.test("notifies listeners once and supports cleanup", () => {
  const context = new JBI18N();
  let calls = 0;
  const listener = () => calls++;

  const unsubscribe = context.subscribe(listener);
  context.subscribe(listener);
  context.setLocale("fa");
  context.setLocale("fa-IR");
  assertEquals(calls, 1, "Duplicate and equivalent locale notifications");

  unsubscribe();
  context.setLocale("en");
  assertEquals(calls, 1, "Unsubscribed listener");
});

Deno.test("dispatch remains stable when a listener removes itself", () => {
  const context = new JBI18N();
  const calls: string[] = [];
  const selfRemovingListener = () => {
    calls.push("self");
    unsubscribe();
  };
  const persistentListener = () => calls.push("persistent");

  const unsubscribe = context.subscribe(selfRemovingListener);
  context.subscribe(persistentListener);
  context.setLocale("fa");
  context.setLocale("en");

  assertEquals(calls.join(","), "self,persistent,persistent", "Listener dispatch order");
});

Deno.test("dictionary follows fallback order and preserves falsy values", () => {
  type Messages = {
    empty: string;
    zero: number;
    disabled: boolean;
    nullable: null;
    value: string;
    toolbar: {
      save: string;
    };
  };

  const dictionary = new JBDictionary<Messages>(
    {
      "fa-IR": { empty: "", zero: 0, disabled: false, nullable: null },
      fa: { value: "base-language" },
      de: { value: "configured-fallback" },
      en: { value: "english", toolbar: { save: "Save" } },
    },
    { fallbackLanguage: "de" },
  );
  const context = new JBI18N();

  context.setLocale("fa-IR");
  assertEquals(dictionary.get(context, "empty"), "", "Empty string");
  assertEquals(dictionary.get(context, "zero"), 0, "Zero");
  assertEquals(dictionary.get(context, "disabled"), false, "False");
  assertEquals(dictionary.get(context, "nullable"), null, "Null");
  assertEquals(dictionary.get(context, "value"), "base-language", "Base-language fallback");

  context.setLocale("fr-FR");
  assertEquals(dictionary.get(context, "value"), "configured-fallback", "Configured fallback");
  assertEquals(dictionary.get(context, "toolbar").save, "Save", "Nested dictionary value");
});

Deno.test("dictionary logs and returns an empty string when all fallbacks miss", () => {
  const dictionary = new JBDictionary<{ missing: string }>({ en: {} });
  const context = new JBI18N();
  const originalConsoleError = console.error;
  let loggedMessage = "";
  console.error = message => {
    loggedMessage = String(message);
  };
  try {
    assertEquals(dictionary.get(context, "missing"), "", "Missing dictionary value");
  } finally {
    console.error = originalConsoleError;
  }
  assert(loggedMessage.includes('Missing i18n message "missing"'), "Error should identify the missing key");
});
