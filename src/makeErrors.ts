import makeCodedError from "./makeCodedError";
import nativeMessages from "./nativeMessages";
import type { SymbolCode, SymbolCodedError, SymbolCodedErrorClass, SymbolRawMessage } from "./symbols";
import { ErrorClass, MessageMap, ErrorsDescriptor, Message, ConstructorReturnType } from "./types";
import omit from "./utils/omit";

export type ErrorMap<M extends MessageDescriptor<M, E>, E extends ErrorsDescriptor> = {
	[K in keyof E]?: ReturnType<typeof makeCodedError<M[K] & Omit<M, keyof E>, E[K]>>;
};

export type MessageDescriptor<M extends MessageMap, E extends ErrorsDescriptor> = {
	[K in Exclude<keyof M, keyof E>]: Message
} & {
	[K in keyof E]?: MessageMap
}

export default function makeErrors<
	M extends MessageDescriptor<M, E>,
	E extends ErrorsDescriptor,
>(messages: M, errors: E, includeNativeCodes: true): Required<ErrorMap<M & typeof nativeMessages, E>>;

export default function makeErrors<
	M extends MessageDescriptor<M, E>,
	E extends ErrorsDescriptor,
>(messages: M, errors: E): Required<ErrorMap<M, E>>;

export default function makeErrors<
	M extends MessageDescriptor<M, E>,
	E extends ErrorsDescriptor,
>(messages: M = {} as M, errors: E = {} as E, includeNativeCodes = true) {
	if (includeNativeCodes) messages = { ...messages, ...nativeMessages };

	const ret: ErrorMap<M | (M & typeof nativeMessages), E> = {},
		entries = Object.entries(errors) as [keyof E, E[keyof E]][];

	for (const [k, error] of entries) {
		ret[k] = makeCodedError(Object.assign(messages[k] || {}, omit(messages, ...(Object.keys(errors) as (keyof E)[]))), error);
	}

	return ret as Required<ErrorMap<M | (M & typeof nativeMessages), E>>;
}

 // Test 0