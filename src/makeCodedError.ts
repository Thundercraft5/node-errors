import { TypeError } from "./nativeErrors";
import { ConstructorReturnType, FormattableMessageParams, MessageKeys, MessageMap } from "./types";
import { SymbolCode, SymbolCodedError, SymbolCodedErrorClass, SymbolRawMessage } from "./symbols";

import formatErrorMessage from "./utils/formatErrorMessage";

export default function makeCodedError<
	M extends MessageMap,
	T extends abstract new (...args: any[]) => Error,
>(messages: M, Base: T) {
	// if (SymbolCodedErrorClass in Base) throw new TypeError("ERROR_CLASS_ALREADY_EXTENDED", Base);
	if ("$$<Symbol>codedError" in Base) throw new TypeError("ERROR_CLASS_ALREADY_EXTENDED", Base);

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore - Bug
	// eslint-disable-next-line @typescript-eslint/no-extra-parens
	return class <Code extends MessageKeys<M>> extends (Base as Omit<T, "constructor">) {
		// static get [SymbolCodedErrorClass]() { return true; }
		static get ["$$<Symbol>codedErrorClass"]() { return true; }
		static [Symbol.hasInstance](instance: any) {
			const constructor = instance[Symbol.species] || instance.constructor;

			return instance instanceof Base || constructor === this;
		}

		static {
			Object.defineProperty(this, "name", { value: Base.name });
		}

		#message = "";
		/*
		 * readonly [SymbolCodedError]: true;
		 * readonly [SymbolCode]: string;
		 * readonly [SymbolRawMessage]: string;
		 */
		readonly ["$$<Symbol>codedError"]: true;
		readonly ["$$<Symbol>code"]: string;
		readonly ["$$<Symbol>rawMessage"]: string;

		constructor(code: Code, ...formats: FormattableMessageParams<M, Code>);
		constructor(code: Code, ...formats: FormattableMessageParams<M, Code>) {
			super(formatErrorMessage(messages, code, ...formats));

			if (typeof messages[code] !== "string")
				// this[SymbolRawMessage] = messages[code]?.toString()!;
				this["$$<Symbol>rawMessage"] = messages[code]?.toString()!;

			this["$$<Symbol>code"] = code.toLocaleUpperCase();
			// Object.defineProperty(this, SymbolCodedError, { value: true });
			Object.defineProperty(this, "$$<Symbol>codedError", { value: true });
		}

		get name() {
			return `${ this.getErrorName() }${ this["$$<Symbol>code"] ? ` [${ this["$$<Symbol>code"] }]` : "" }`;
		}

		get message() {
			return !this.#message ? "" : this.#message;
		}

		set message(value) {
			this.#message = value;
		}

		get [Symbol.species]() { return Base; }

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

			return names.find(name => name != "CodedError");
		}
	};
}