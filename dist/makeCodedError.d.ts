import { FormattableMessageParams, MessageMap } from "./types";
export default function makeCodedError<M extends MessageMap, T extends abstract new (...args: any[]) => Error>(messages: M, Base: T): {
    new <Code extends Extract<keyof M, string>>(code: Code, ...formats: Required<Parameters<Exclude<M[Code], string>>>): {
        "__#1@#message": string;
        readonly "$$<Symbol>codedError": true;
        readonly "$$<Symbol>code": string;
        readonly "$$<Symbol>rawMessage": string;
        readonly name: string;
        message: string;
        getErrorName(): string | undefined;
        readonly [Symbol.species]: T;
        readonly [Symbol.toStringTag]: string | undefined;
    };
    readonly "$$<Symbol>codedErrorClass": boolean;
    [Symbol.hasInstance](instance: any): boolean;
};
//# sourceMappingURL=makeCodedError.d.ts.map