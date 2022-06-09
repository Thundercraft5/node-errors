import makeCodedError from "./makeCodedError";
import { ErrorClass, MessageMap } from './types';
import nativeMessages from "./nativeMessages";
export declare type ErrorsDescriptor = {
    [key: string]: ErrorClass;
};
export declare type ErrorMap<M extends MessageMap, E extends ErrorsDescriptor> = {
    [key in keyof E]?: ReturnType<typeof makeCodedError<M, E[key]>>;
};
export default function makeErrors<M extends MessageMap, E extends ErrorsDescriptor>(messages: M, errors: E, includeNativeCodes: true): Required<ErrorMap<M & typeof nativeMessages, E>>;
export default function makeErrors<M extends MessageMap, E extends ErrorsDescriptor>(messages: M, errors: E): Required<ErrorMap<M, E>>;
//# sourceMappingURL=makeErrors.d.ts.map