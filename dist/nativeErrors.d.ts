/// <reference types="node" />
export declare const TypeError: {
    readonly prototype: {
        "__#1@#message": string;
        readonly "$$<Symbol>codedError": true;
        readonly "$$<Symbol>code": string;
        readonly "$$<Symbol>rawMessage": string;
        readonly name: string;
        message: string;
        readonly [Symbol.species]: any;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: Error;
    } & TypeError;
    readonly "$$<Symbol>codedErrorClass": true;
    [Symbol.hasInstance]: ((instance: any) => boolean) & ((value: any) => boolean);
    captureStackTrace: (targetObject: object, constructorOpt?: Function | undefined) => void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
} & Omit<TypeErrorConstructor, "prototype"> & (new <Code extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED">(code: Code, ...formats: Required<Parameters<Exclude<Omit<{
    ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
    INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
    MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
    METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
}, "TypeError" | "RangeError" | "ReferenceError" | "Error">[Code], string>>>) => {
    "__#1@#message": string;
    readonly "$$<Symbol>codedError": true;
    readonly "$$<Symbol>code": string;
    readonly "$$<Symbol>rawMessage": string;
    readonly name: string;
    message: string;
    readonly [Symbol.species]: TypeErrorConstructor;
    readonly [Symbol.toStringTag]: string;
    stack?: string;
    cause?: Error;
} & Error), RangeError: {
    readonly prototype: {
        "__#1@#message": string;
        readonly "$$<Symbol>codedError": true;
        readonly "$$<Symbol>code": string;
        readonly "$$<Symbol>rawMessage": string;
        readonly name: string;
        message: string;
        readonly [Symbol.species]: any;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: Error;
    } & RangeError;
    readonly "$$<Symbol>codedErrorClass": true;
    [Symbol.hasInstance]: ((instance: any) => boolean) & ((value: any) => boolean);
    captureStackTrace: (targetObject: object, constructorOpt?: Function | undefined) => void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
} & Omit<RangeErrorConstructor, "prototype"> & (new <Code extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED">(code: Code, ...formats: Required<Parameters<Exclude<Omit<{
    ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
    INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
    MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
    METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
}, "TypeError" | "RangeError" | "ReferenceError" | "Error">[Code], string>>>) => {
    "__#1@#message": string;
    readonly "$$<Symbol>codedError": true;
    readonly "$$<Symbol>code": string;
    readonly "$$<Symbol>rawMessage": string;
    readonly name: string;
    message: string;
    readonly [Symbol.species]: RangeErrorConstructor;
    readonly [Symbol.toStringTag]: string;
    stack?: string;
    cause?: Error;
} & Error), ReferenceError: {
    readonly prototype: {
        "__#1@#message": string;
        readonly "$$<Symbol>codedError": true;
        readonly "$$<Symbol>code": string;
        readonly "$$<Symbol>rawMessage": string;
        readonly name: string;
        message: string;
        readonly [Symbol.species]: any;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: Error;
    } & ReferenceError;
    readonly "$$<Symbol>codedErrorClass": true;
    [Symbol.hasInstance]: ((instance: any) => boolean) & ((value: any) => boolean);
    captureStackTrace: (targetObject: object, constructorOpt?: Function | undefined) => void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
} & Omit<ReferenceErrorConstructor, "prototype"> & (new <Code extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED">(code: Code, ...formats: Required<Parameters<Exclude<Omit<{
    ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
    INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
    MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
    METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
}, "TypeError" | "RangeError" | "ReferenceError" | "Error">[Code], string>>>) => {
    "__#1@#message": string;
    readonly "$$<Symbol>codedError": true;
    readonly "$$<Symbol>code": string;
    readonly "$$<Symbol>rawMessage": string;
    readonly name: string;
    message: string;
    readonly [Symbol.species]: ReferenceErrorConstructor;
    readonly [Symbol.toStringTag]: string;
    stack?: string;
    cause?: Error;
} & Error), Error: {
    readonly prototype: {
        "__#1@#message": string;
        readonly "$$<Symbol>codedError": true;
        readonly "$$<Symbol>code": string;
        readonly "$$<Symbol>rawMessage": string;
        readonly name: string;
        message: string;
        readonly [Symbol.species]: any;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: Error;
    } & Error;
    readonly "$$<Symbol>codedErrorClass": true;
    [Symbol.hasInstance]: ((instance: any) => boolean) & ((value: any) => boolean);
    captureStackTrace: (targetObject: object, constructorOpt?: Function | undefined) => void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
} & Omit<ErrorConstructor, "prototype"> & (new <Code extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED">(code: Code, ...formats: Required<Parameters<Exclude<Omit<{
    ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
    INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
    MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
    METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
}, "TypeError" | "RangeError" | "ReferenceError" | "Error">[Code], string>>>) => {
    "__#1@#message": string;
    readonly "$$<Symbol>codedError": true;
    readonly "$$<Symbol>code": string;
    readonly "$$<Symbol>rawMessage": string;
    readonly name: string;
    message: string;
    readonly [Symbol.species]: ErrorConstructor;
    readonly [Symbol.toStringTag]: string;
    stack?: string;
    cause?: Error;
} & Error);
//# sourceMappingURL=nativeErrors.d.ts.map