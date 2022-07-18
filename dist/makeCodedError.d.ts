import { ConstructorReturnType } from "./types";
import type { FormattableMessageParams, MessageMap } from "./types";
declare type Map<T> = {
    [K in keyof T]: T[K];
};
export default function makeCodedError<M extends MessageMap, T extends abstract new (...args: any[]) => Error>(messages: M, Base: T): Map<{
    new <Code extends Extract<keyof M, string>>(code: Code, ...formats: Required<Parameters<Exclude<M[Code], string>>>): {
        "__#1@#message": string;
        readonly "$$<Symbol>codedError": true;
        readonly "$$<Symbol>code": string;
        readonly "$$<Symbol>rawMessage": string;
        readonly name: string;
        message: string;
        readonly [Symbol.species]: T;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: Error;
    };
    readonly "$$<Symbol>codedErrorClass": true;
    [Symbol.hasInstance](instance: any): boolean;
} & T> & Omit<T, "prototype"> & (new <Code_1 extends Extract<keyof M, string>>(code: Code_1, ...formats: Required<Parameters<Exclude<M[Code_1], string>>>) => {
    "__#1@#message": string;
    readonly "$$<Symbol>codedError": true;
    readonly "$$<Symbol>code": string;
    readonly "$$<Symbol>rawMessage": string;
    readonly name: string;
    message: string;
    readonly [Symbol.species]: T;
    readonly [Symbol.toStringTag]: string;
    stack?: string;
    cause?: Error;
} & ConstructorReturnType<T>);
export {};
//# sourceMappingURL=makeCodedError.d.ts.map