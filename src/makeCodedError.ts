/* eslint-disable @typescript-eslint/member-ordering */
import { TypeError } from "./nativeErrors";
import { SymbolCode, SymbolCodedError, SymbolCodedErrorClass, SymbolRawMessage } from "./symbols";

import { indent } from "./utils";
import formatErrorMessage from "./utils/formatErrorMessage";
import type { ConstructorReturnType , FormattableMessageParams, MessageDescriptor, MessageKeys, MessageMap } from "./types";

type OmitCallSignature<T> =
	T extends new (...args: infer R) => infer S ? new (...args: R) => S & { [K in keyof T]: T[K] } : { [K in keyof T]: T[K] };

type OmitConstructorSignature<T> =
	T extends (...args: infer R) => infer S ? (...args: R) => S & { [K in keyof T]: T[K] } : { [K in keyof T]: T[K] };
type Map<T> = { [K in keyof T]: T[K] };
type LastOfTuple<T extends any[]> = T extends [...infer Rest, infer Last] ? Last : never;
type SliceLast<T extends any[]> = T extends [...infer Rest, infer Discard] ? Rest : never;
type ErrorOptions = Omit<globalThis.ErrorOptions, "cause"> & { cause?: Error };

export default function makeCodedError<
	M extends MessageMap,
	T extends abstract new (...args: any[]) => Error,
>(messages: M, Base: T) {
	// if (SymbolCodedErrorClass in Base) throw new TypeError("ERROR_CLASS_ALREADY_EXTENDED", Base);
	if ("$$<Symbol>isCodedError" in Base) throw new TypeError("ERROR_CLASS_ALREADY_EXTENDED", Base);


	// @ts-expect-error
	class $0<Code extends Upppercase<MessageKeys<M>>, Options extends ErrorOptions = {}> extends Base {
		// static get [SymbolCodedErrorClass]() { return true; }
		static readonly ["$$<Symbol>isCodedErrorClass"] = true;
		static [Symbol.hasInstance](instance: any) {
			const constructor = instance[Symbol.species] || instance.constructor;

			return instance instanceof Base || constructor === this;
		}

		static {
			Object.defineProperty(this, "name", { value: Base.name });
		}

		static #lookupGetter<I extends $0<string, ErrorOptions>, K extends keyof I>(instance: I, key: K) {
			return Object.getOwnPropertyDescriptors(instance)[key].get as {
				[P in keyof I]: TypedPropertyDescriptor<I[P]>
			}[K]["get"];
		}

		#message = "";
		#stackTrace = "";
		#cause?: unknown extends Options["cause"] ? Error : Options["cause"];
		/*
		 * readonly [SymbolCodedError]: true;
		 * readonly [SymbolCode]: string;
		 * readonly [SymbolRawMessage]: string;
		 */
		readonly ["$$<Symbol>isCodedError"]: true;
		readonly ["code"]: Code;
		readonly ["rawMessage"]: string;

		constructor(code: Code, ...formats: [...FormattableMessageParams<M, Code>, Options]);
		constructor(code: Code, ...formats: [...FormattableMessageParams<M, Code>]);
		constructor(code: Code, ...args: [...FormattableMessageParams<M, Code>, Options] | [...FormattableMessageParams<M, Code>]) {
			const formats = (Object.hasOwn((args.at(-1) as Options | undefined) ?? {}, "cause")
					? args.slice(0, -1)
					: args) as FormattableMessageParams<M, Code>,
				options = (Object.hasOwn((args.at(-1) as Options | undefined) ?? {}, "cause")
					? args.at(-1)
					: {}) as Options;

			super();

			// @ts-expect-error
			delete this["$$<Symbol>isCodedError"];

			this.#message = formatErrorMessage(messages, code, ...formats);
			this.#stackTrace = this.stack!.split("\n").slice(1).join("\n");
			this.#cause = options.cause!;

			if (typeof messages[code] !== "string")
				// this[SymbolRawMessage] = messages[code]?.toString()!;
				this.rawMessage = messages[code]?.toString()!;

			this.code = code.toLocaleUpperCase() as Code;
			// Object.defineProperty(this, SymbolCodedError, { value: true });
			Object.defineProperty(this, "$$<Symbol>isCodedError", { value: true });

			Object.defineProperties(this, {
				name: {
					get: () => this.#name,
				},
				stack: {
					get: () => this.#stack,
				},
			});


			// use defineProperty() to ensure `this.cause` does not appear as undefined in runtime
			if (Object.hasOwn(options, "cause")) Object.defineProperty(this, "cause", {
				value: options.cause,
				enumerable: false,
			}); else delete this.cause;
		}

		get #name() {
			return `${ Base.name }${ this.code ? ` [${ this.code }]` : "" }`;
		}

		get #stack() {
			return `${ this.name }: ${ this.message }\n${ this.#stackTrace }`;
		}

		get message() {
			return this.#message;
		}

		get name() {
			return this.#name;
		}

		get [Symbol.species]() { return Base; }

		get [Symbol.toStringTag]() {
			return Base.name;
		}
	}

	return $0 as any as (Map<typeof $0>
	& Omit<typeof Base, "prototype">
	& (ConstructorReturnType<typeof Base> & {
		new <Code extends MessageKeys<M>, Options extends ErrorOptions = {}>(code: Code, ...formats: [...formats: FormattableMessageParams<M, Code>, options: Options]): $0<Code, Options>;
		new <Code extends MessageKeys<M>, Options extends ErrorOptions = {}>(code: Code, ...formats: [...FormattableMessageParams<M, Code>]): $0<Code, Options>;
	}));
}