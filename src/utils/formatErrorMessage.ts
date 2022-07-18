import { RangeError, ReferenceError } from "../nativeErrors";
import type { FormattableMessageParams,MessageFormatter, MessageKeys, MessageMap } from "../types";
import { MessageDescriptor } from "../types";
import formatWordList from "./formatWordList";

export default function formatErrorMessage<
	M extends MessageMap,
	Code extends MessageKeys<M>,
>(messages: M, code: Code, ...formats: FormattableMessageParams<M, Code>) {
	if (!(code in messages)) throw new ReferenceError("INVALID_MESSAGE_CODE", code, formatWordList(Object.keys(messages)));

	if (typeof messages[code] === "function" && messages[code]!.length > formats.length) throw new RangeError("MESSAGE_CODE_MISSING_FORMATS", code, messages[code]!.length, formats.length);

	const message = typeof messages[code] === "function"

		? (messages[code] as MessageFormatter)(...formats)
		: messages[code];

	return message as string;
}