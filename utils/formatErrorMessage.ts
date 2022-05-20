import { RangeError, ReferenceError } from "../nativeErrors";
import { FormattableMessageParams, MessageFormatter, MessageKeys, MessageMap } from "../types";

import formatWordList from "./formatWordList";

export default function formatErrorMessage<
	M extends MessageMap,
	Code extends MessageKeys<M>,
>(messages: M, code: Code, ...formats: FormattableMessageParams<M, Code>) {
	if (!(code in messages))
		throw new ReferenceError("INVALID_MESSAGE_CODE", code, formatWordList(Object.keys(messages)));

	const message = typeof messages[code] === "function"
		// eslint-disable-next-line
		? (messages[code] as MessageFormatter)(...formats)
		: messages[code];

	if (typeof messages[code] === "function" && messages[code].length > formats.length)
		throw new RangeError("MESSAGE_CODE_MISSING_FORMATS", code, messages[code].length, formats.length);

	return message as string;
}