import makeErrors from "./makeErrors";
import messages from "./nativeMessages";
import type { SymbolCode, SymbolCodedError, SymbolCodedErrorClass, SymbolRawMessage } from "./symbols";

export const
	{
		TypeError,
		RangeError,
		ReferenceError,
		Error,
	} = makeErrors(messages, {
		TypeError: globalThis.TypeError,
		RangeError: globalThis.RangeError,
		ReferenceError: globalThis.ReferenceError,
		Error: globalThis.Error,
	});