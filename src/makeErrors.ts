import makeCodedError from "./makeCodedError";
import { ErrorClass, MessageMap } from "./types";
import nativeMessages from "./nativeMessages";

import type { SymbolCode, SymbolCodedError, SymbolCodedErrorClass, SymbolRawMessage } from "./symbols";

export type ErrorsDescriptor = {
	[key: string]: ErrorClass;
};

export type ErrorMap<M extends MessageMap, E extends ErrorsDescriptor> = {
	[key in keyof E]?: ReturnType<typeof makeCodedError<M, E[key]>>;
};

export default function makeErrors<
	M extends MessageMap,
	E extends ErrorsDescriptor,
>(messages: M, errors: E, includeNativeCodes: true): Required<ErrorMap<M & typeof nativeMessages, E>>;

export default function makeErrors<
	M extends MessageMap,
	E extends ErrorsDescriptor,
>(messages: M, errors: E): Required<ErrorMap<M, E>>;

export default function makeErrors<
	M extends MessageMap,
	E extends ErrorsDescriptor,
>(messages: M, errors: E, includeNativeCodes = true) {
	if (includeNativeCodes) messages = { ...messages, ...nativeMessages };

	const ret: ErrorMap<M | M & typeof nativeMessages, E> = {},
	 entries = Object.entries(errors);

	for (const [k, error] of entries)
		// @ts-ignore
		ret[k] = makeCodedError(messages, error);


	return ret as Required<ErrorMap<M | M & typeof nativeMessages, E>>;
}