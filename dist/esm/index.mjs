// src/nativeMessages/toRepresentation.ts
var toString = (v) => Object.prototype.toString.call(v);
function toRepresentation(object, includeType = false) {
  let valueRepresentation = "";
  switch (typeof object) {
    case "string":
      {
        valueRepresentation = `"${object.slice(1, 100)} ${object.length >= 100 ? "<...>" : ""}"`;
      }
      break;
    case "bigint":
      valueRepresentation = `${String(object)}n`;
      break;
    case "symbol":
    case "boolean":
    case "undefined":
    case "function":
    case "number":
      valueRepresentation = String(object);
      break;
    case "object": {
      if (object == null)
        valueRepresentation = String(object);
      else {
        const constructorName = Reflect.getPrototypeOf(object)?.constructor.name, toStringName = toString(object).slice(8, -1);
        valueRepresentation = toStringName in globalThis && toStringName !== "Object" ? toString(object) : `#<${constructorName}>`;
      }
      break;
    }
    default:
      throw new TypeError();
  }
  return `${includeType && object !== "undefined" ? `${typeof object} ` : ""}${valueRepresentation}`;
}

// src/nativeMessages/index.ts
var messages = {
  ERROR_CLASS_ALREADY_EXTENDED: (Class) => `Error class "${Class.name}" is already a coded error class.`,
  INVALID_MESSAGE_CODE: (code = "", validCodes = "") => `Error code "${code}" was not found in the provided messages registry.
List of valid codes: ${validCodes}`,
  MESSAGE_CODE_MISSING_FORMATS: (code = "", required = 0, received = 0) => `Message code "${code}" expects at least ${required} format arguments, got ${received} instead`,
  METHOD_NOT_IMPLEMENTED: (Class, name = "") => `Method ${Class.name}#${name}() is not implemented.`,
  READONLY_PROPERTY_SET: (object, key) => `Cannot assign to read only property '${String(key)}' of object '${toRepresentation(object, false)}'`,
  READONLY_PROPERTY_DELETE: (object, key) => `Cannot delete read only property '${String(key)}' of object '${toRepresentation(object, false)}'`,
  OBJECT_PROPERTY_NOT_EXTENSIBLE: (object, key) => `Cannot add property '${String(key)}', object '${toRepresentation(object)} is not extensible'`,
  OBJECT_NOT_EXTENSIBLE: (object, key) => `'${toRepresentation(object)} is not extensible'`,
  CANNOT_ADD_OBJECT_PROPERTY: (value, key) => `Cannot add property '${String(key)}' on ${typeof value} '${toRepresentation(value)}'`,
  VALUE_OUT_OF_RANGE: (value, min, max) => `Value "${value} is out of range. Values must be in the range of "${min}" to "${max}".`
};
var nativeMessages_default = messages;

// src/utils/omit.ts
function entries(object) {
  return Object.entries(object);
}
function omit(object, ...keys) {
  const newObject = {}, objectEntries = entries(object).filter(([k]) => !keys.includes(k));
  for (const [k, v] of objectEntries)
    newObject[k] = v;
  return newObject;
}

// src/makeErrors.ts
function makeErrors(messages2 = {}, errors = {}, includeNativeCodes = true) {
  if (includeNativeCodes)
    messages2 = { ...messages2, ...nativeMessages_default };
  const ret = {}, entries2 = Object.entries(errors);
  for (const [k, error] of entries2) {
    ret[k] = makeCodedError(Object.assign(messages2[k] || {}, omit(messages2, ...Object.keys(errors))), error);
  }
  return ret;
}

// src/nativeErrors.ts
var {
  TypeError: TypeError2,
  RangeError,
  ReferenceError,
  Error
} = makeErrors(nativeMessages_default, {
  TypeError: globalThis.TypeError,
  RangeError: globalThis.RangeError,
  ReferenceError: globalThis.ReferenceError,
  Error: globalThis.Error
});

// src/utils/formatWordList.ts
function formatWordList(list, and = false) {
  const last = list.pop(), lastWord = and ? "and" : "or";
  if (list.length > 1) {
    const commaSeparated = list.map((s, i) => `${i % 5 === 0 && i ? "\n" : ""}"${s}"`);
    return `${commaSeparated.join(", ")}, ${lastWord} "${last}"`;
  } else
    return `${list.length === 1 ? `"${list[0]}" ${lastWord} ` : ""}"${last}"`;
}

// src/utils/formatErrorMessage.ts
function formatErrorMessage(messages2, code, ...formats) {
  if (!(code in messages2))
    throw new ReferenceError("INVALID_MESSAGE_CODE", code, formatWordList(Object.keys(messages2)));
  if (typeof messages2[code] === "function" && messages2[code].length > formats.length)
    throw new RangeError("MESSAGE_CODE_MISSING_FORMATS", code, messages2[code].length, formats.length);
  const message = typeof messages2[code] === "function" ? messages2[code](...formats) : messages2[code];
  return message;
}

// src/makeCodedError.ts
function makeCodedError(messages2, Base) {
  if ("$$<Symbol>isCodedError" in Base)
    throw new TypeError2("ERROR_CLASS_ALREADY_EXTENDED", Base);
  class $0 extends Base {
    static ["$$<Symbol>isCodedErrorClass"] = true;
    static [Symbol.hasInstance](instance) {
      const constructor = instance[Symbol.species] || instance.constructor;
      return instance instanceof Base || constructor === this;
    }
    static {
      Object.defineProperty(this, "name", { value: Base.name });
    }
    static #lookupGetter(instance, key) {
      return Object.getOwnPropertyDescriptors(instance)[key].get;
    }
    #message = "";
    #stackTrace = "";
    #cause;
    ["$$<Symbol>isCodedError"];
    ["code"];
    ["rawMessage"];
    constructor(code, ...args) {
      const formats = Object.hasOwn(args.at(-1) ?? {}, "cause") ? args.slice(0, -1) : args, options = Object.hasOwn(args.at(-1) ?? {}, "cause") ? args.at(-1) : {};
      super();
      delete this["$$<Symbol>isCodedError"];
      this.#message = formatErrorMessage(messages2, code, ...formats);
      this.#stackTrace = this.stack.split("\n").slice(1).join("\n");
      this.#cause = options.cause;
      if (typeof messages2[code] !== "string")
        this.rawMessage = messages2[code]?.toString();
      this.code = code.toLocaleUpperCase();
      Object.defineProperty(this, "$$<Symbol>isCodedError", { value: true });
      Object.defineProperties(this, {
        name: {
          get: () => this.#name
        },
        stack: {
          get: () => this.#stack
        }
      });
      if (Object.hasOwn(options, "cause"))
        Object.defineProperty(this, "cause", {
          value: options.cause,
          enumerable: false
        });
      else
        delete this.cause;
    }
    get #name() {
      return `${Base.name}${this.code ? ` [${this.code}]` : ""}`;
    }
    get #stack() {
      return `${this.name}: ${this.message}
${this.#stackTrace}`;
    }
    get message() {
      return this.#message;
    }
    get name() {
      return this.#name;
    }
    get [Symbol.species]() {
      return Base;
    }
    get [Symbol.toStringTag]() {
      return Base.name;
    }
  }
  return $0;
}

// src/symbols.ts
var SymbolCodedErrorClass = Symbol("codedErrorClass");
var SymbolCodedError = Symbol("codedError");
var SymbolCode = Symbol("code");
var SymbolRawMessage = Symbol("rawMessage");

// src/utils/isCodedError.ts
function isCodedError(errorObject) {
  try {
    return errorObject?.["$$<Symbol>isCodedError"];
  } catch {
    return false;
  }
}

// src/utils/isCodedErrorClass.ts
function isCodedErrorClass(ErrorClass) {
  try {
    return ErrorClass?.["$$<Symbol>isCodedErrorClass"];
  } catch {
    return false;
  }
}
export {
  Error,
  RangeError,
  ReferenceError,
  SymbolCode,
  SymbolCodedError,
  SymbolCodedErrorClass,
  SymbolRawMessage,
  TypeError2 as TypeError,
  makeErrors as default,
  isCodedError,
  isCodedErrorClass,
  makeCodedError,
  makeErrors,
  nativeMessages_default as messages
};
//# sourceMappingURL=index.mjs.map
