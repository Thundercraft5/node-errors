import { TypeError } from "./nativeErrors";
import { SymbolCode, SymbolCodedError, SymbolCodedErrorClass, SymbolRawMessage } from "./symbols";
import type { ConstructorReturnType , FormattableMessageParams, MessageDescriptor, MessageKeys, MessageMap } from "./types";

import formatErrorMessage from "./utils/formatErrorMessage";

type OmitCallSignature<T> =
	T extends new (...args: infer R) => infer S ? new (...args: R) => S & { [K in keyof T]: T[K] } : { [K in keyof T]: T[K] };

type OmitConstructorSignature<T> =
	T extends (...args: infer R) => infer S ? (...args: R) => S & { [K in keyof T]: T[K] } : { [K in keyof T]: T[K] };
type Map<T> = { [K in keyof T]: T[K] };


export default function makeCodedError<
	M extends MessageMap,
	T extends abstract new (...args: any[]) => Error,
>(messages: M, Base: T) {
	// if (SymbolCodedErrorClass in Base) throw new TypeError("ERROR_CLASS_ALREADY_EXTENDED", Base);
	if ("$$<Symbol>codedError" in Base) throw new TypeError("ERROR_CLASS_ALREADY_EXTENDED", Base);


	// @ts-expect-error
	class $0 <Code extends MessageKeys<M>> extends Base {
		// static get [SymbolCodedErrorClass]() { return true; }
		static readonly ["$$<Symbol>codedErrorClass"] = true;
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
			return `${ Base.name }${ this["$$<Symbol>code"] ? ` [${ this["$$<Symbol>code"] }]` : "" }`;
		}

		get message() {
			return !this.#message ? "" : this.#message;
		}

		set message(value) {
			this.#message = value;
		}

		get [Symbol.species]() { return Base; }

		get [Symbol.toStringTag]() {
			return Base.name;
		}
	}

	return $0 as any as (Map<typeof $0>
	& Omit<typeof Base, "prototype">
	& (new <Code extends MessageKeys<M>> (code: Code, ...formats: FormattableMessageParams<M, Code>) => $0<Code> & ConstructorReturnType<typeof Base>));
}