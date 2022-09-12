import makeCodedError from "./makeCodedError";
import nativeMessages from "./nativeMessages";
import { MessageMap, ErrorsDescriptor, Message } from "./types";
export type ErrorMap<M extends MessageDescriptor<M, E>, E extends ErrorsDescriptor> = {
    [K in keyof E]?: ReturnType<typeof makeCodedError<M[K] & Omit<M, keyof E>, E[K]>>;
};
export type MessageDescriptor<M extends MessageMap, E extends ErrorsDescriptor> = {
    [K in Exclude<keyof M, keyof E>]: Message;
} & {
    [K in keyof E]?: MessageMap;
};
export default function makeErrors<M extends MessageDescriptor<M, E>, E extends ErrorsDescriptor>(messages: M, errors: E, includeNativeCodes: true): Required<ErrorMap<M & typeof nativeMessages, E>>;
export default function makeErrors<M extends MessageDescriptor<M, E>, E extends ErrorsDescriptor>(messages: M, errors: E): Required<ErrorMap<M, E>>;
//# sourceMappingURL=makeErrors.d.ts.map