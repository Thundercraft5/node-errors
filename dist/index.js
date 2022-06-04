// src/utils/formatWordList.ts
function formatWordList(list, and = false) {
  const last = list.pop(), lastWord = and ? "and" : "or";
  if (list.length > 1) {
    const commaSeparated = list.map((s, i) => `${i % 5 == 0 && i ? "\n" : ""}"${s}"`);
    return `${commaSeparated.join(", ")}, ${lastWord} "${last}"`;
  } else
    return `${list.length == 1 ? `"${list[0]}" ${lastWord} ` : ""}"${last}"`;
}

// src/utils/formatErrorMessage.ts
function formatErrorMessage(messages2, code, ...formats) {
  if (!(code in messages2))
    throw new ReferenceError("INVALID_MESSAGE_CODE", code, formatWordList(Object.keys(messages2)));
  const message = typeof messages2[code] === "function" ? messages2[code](...formats) : messages2[code];
  if (typeof messages2[code] === "function" && messages2[code].length > formats.length)
    throw new RangeError("MESSAGE_CODE_MISSING_FORMATS", code, messages2[code].length, formats.length);
  return message;
}

// src/makeCodedError.ts
function makeCodedError(messages2, Base) {
  if ("$$<Symbol>codedError" in Base)
    throw new TypeError("ERROR_CLASS_ALREADY_EXTENDED", Base);
  return class extends Base {
    static get ["$$<Symbol>codedErrorClass"]() {
      return true;
    }
    static [Symbol.hasInstance](instance) {
      let constructor = instance[Symbol.species] || instance.constructor;
      return instance instanceof Base || constructor === this;
    }
    static {
      Object.defineProperty(this, "name", { value: Base.name });
    }
    #message = "";
    ["$$<Symbol>codedError"];
    ["$$<Symbol>code"];
    ["$$<Symbol>rawMessage"];
    constructor(code, ...formats) {
      super(formatErrorMessage(messages2, code, ...formats));
      if (typeof messages2[code] !== "string")
        this["$$<Symbol>rawMessage"] = messages2[code]?.toString() ?? null;
      this["$$<Symbol>code"] = code.toLocaleUpperCase();
      Object.defineProperty(this, "$$<Symbol>codedError", { value: true });
    }
    get name() {
      return `${this.getErrorName()}${this["$$<Symbol>code"] ? ` [${this["$$<Symbol>code"]}]` : ""}`;
    }
    get message() {
      return !this.#message ? "" : this.#message;
    }
    set message(value) {
      this.#message = value;
    }
    get [Symbol.species]() {
      return Base;
    }
    get [Symbol.toStringTag]() {
      return this.getErrorName();
    }
    getErrorName() {
      const names = [];
      let cur = this.constructor;
      while (cur) {
        names.push(cur.name);
        cur = Object.getPrototypeOf(cur);
      }
      return names.find((name) => name != "CodedError");
    }
  };
}

// src/nativeMessages.ts
var messages = {
  ERROR_CLASS_ALREADY_EXTENDED: (Class) => `Error class "${Class.name}" is already a coded error class.`,
  INVALID_MESSAGE_CODE: (code = "", validCodes = "") => `Error code "${code}" was not found in the provided messages registry.
List of valid codes: ${validCodes}`,
  MESSAGE_CODE_MISSING_FORMATS: (code = "", required = 0, received = 0) => `Message code "${code}" expects at least ${required} format arguments, got ${received} instead`,
  METHOD_NOT_IMPLEMENTED: (Class, name = "") => `Method ${Class.name}#${name}() is not implemented.`
};
var nativeMessages_default = messages;

// src/makeErrors.ts
function makeErrors(messages2, errors, includeNativeCodes = true) {
  if (includeNativeCodes)
    messages2 = { ...messages2, ...nativeMessages_default };
  const ret = {};
  const entries = Object.entries(errors);
  for (const [k, error] of entries) {
    ret[k] = makeCodedError(messages2, error);
  }
  return ret;
}

// src/nativeErrors.ts
var {
  TypeError,
  RangeError,
  ReferenceError,
  Error
} = makeErrors(nativeMessages_default, {
  TypeError: globalThis.TypeError,
  RangeError: globalThis.RangeError,
  ReferenceError: globalThis.ReferenceError,
  Error: globalThis.Error
});

// src/symbols.ts
var SymbolCodedErrorClass = Symbol("codedErrorClass");
var SymbolCodedError = Symbol("codedError");
var SymbolCode = Symbol("code");
var SymbolRawMessage = Symbol("rawMessage");

// src/utils/isCodedErrorClass.ts
function isCodedErrorClass(ErrorClass) {
  return "$$<Symbol>codedErrorClass" in ErrorClass;
}

// src/utils/isCodedError.ts
function isCodedError(errorObject) {
  return "$$<Symbol>code" in errorObject;
}
export {
  Error,
  RangeError,
  ReferenceError,
  SymbolCode,
  SymbolCodedError,
  SymbolCodedErrorClass,
  SymbolRawMessage,
  TypeError,
  makeErrors as default,
  isCodedError,
  isCodedErrorClass,
  makeCodedError,
  makeErrors,
  nativeMessages_default as messages
};
//# sourceMappingURL=index.js.map
