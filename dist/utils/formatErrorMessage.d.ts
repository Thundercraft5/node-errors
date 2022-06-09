import { FormattableMessageParams, MessageKeys, MessageMap } from "../types";
export default function formatErrorMessage<M extends MessageMap, Code extends MessageKeys<M>>(messages: M, code: Code, ...formats: FormattableMessageParams<M, Code>): string;
//# sourceMappingURL=formatErrorMessage.d.ts.map