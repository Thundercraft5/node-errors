import type { ConstructorReturnType, FormattableMessageParams, MessageMap } from "./types";
declare type Map<T> = {
    [K in keyof T]: T[K];
};
declare type ErrorOptions = Omit<globalThis.ErrorOptions, "cause"> & {
    cause?: Error;
};
export default function makeCodedError<M extends MessageMap, T extends abstract new (...args: any[]) => Error>(messages: M, Base: T): Map<{
    new <Code extends Upppercase<Extract<keyof M, string>>, Options extends ErrorOptions = {}>(code: Code, ...formats: [...Required<Parameters<Exclude<M[Code], string>>>, Options]): {
        "__#1@#message": string;
        "__#1@#stackTrace": string;
        "__#1@#cause"?: unknown extends Options["cause"] ? Error : Options["cause"];
        readonly "$$<Symbol>isCodedError": true;
        readonly code: Code;
        readonly rawMessage: string;
        readonly "__#1@#name": string;
        readonly "__#1@#stack": string;
        readonly message: string;
        readonly name: string;
        readonly [Symbol.species]: T;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: Error;
    };
    new <Code extends Upppercase<Extract<keyof M, string>>, Options extends ErrorOptions = {}>(code: Code, ...formats_0: Required<Parameters<Exclude<M[Code], string>>>): {
        "__#1@#message": string;
        "__#1@#stackTrace": string;
        "__#1@#cause"?: unknown extends Options["cause"] ? Error : Options["cause"];
        readonly "$$<Symbol>isCodedError": true;
        readonly code: Code;
        readonly rawMessage: string;
        readonly "__#1@#name": string;
        readonly "__#1@#stack": string;
        readonly message: string;
        readonly name: string;
        readonly [Symbol.species]: T;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: Error;
    };
    readonly "$$<Symbol>isCodedErrorClass": true;
    "__#1@#lookupGetter"<I extends {
        "__#1@#message": string;
        "__#1@#stackTrace": string;
        "__#1@#cause"?: Error;
        readonly "$$<Symbol>isCodedError": true;
        readonly code: string;
        readonly rawMessage: string;
        readonly "__#1@#name": string;
        readonly "__#1@#stack": string;
        readonly message: string;
        readonly name: string;
        readonly [Symbol.species]: T;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: Error;
    }, K extends keyof I>(instance: I, key: K): { [P in keyof I]: TypedPropertyDescriptor<I[P]>; }[K]["get"];
    [Symbol.hasInstance](instance: any): boolean;
} & T> & Omit<T, "prototype"> & ConstructorReturnType<T> & {
    new <Code_1 extends Extract<keyof M, string>, Options_1 extends ErrorOptions = {}>(code: Code_1, ...formats: [...formats: Required<Parameters<Exclude<M[Code_1], string>>>, options: Options_1]): {
        "__#1@#message": string;
        "__#1@#stackTrace": string;
        "__#1@#cause"?: unknown extends Options_1["cause"] ? Error : Options_1["cause"];
        readonly "$$<Symbol>isCodedError": true;
        readonly code: Code_1;
        readonly rawMessage: string;
        readonly "__#1@#name": string;
        readonly "__#1@#stack": string;
        readonly message: string;
        readonly name: string;
        readonly [Symbol.species]: T;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: Error;
    };
    new <Code_2 extends Extract<keyof M, string>, Options_2 extends ErrorOptions = {}>(code: Code_2, ...formats_0: Required<Parameters<Exclude<M[Code_2], string>>>): {
        "__#1@#message": string;
        "__#1@#stackTrace": string;
        "__#1@#cause"?: unknown extends Options_2["cause"] ? Error : Options_2["cause"];
        readonly "$$<Symbol>isCodedError": true;
        readonly code: Code_2;
        readonly rawMessage: string;
        readonly "__#1@#name": string;
        readonly "__#1@#stack": string;
        readonly message: string;
        readonly name: string;
        readonly [Symbol.species]: T;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: Error;
    };
};
export {};
//# sourceMappingURL=makeCodedError.d.ts.map