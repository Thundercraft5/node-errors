export declare const TypeError: {
    new <Code extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED">(code: Code, ...formats: Required<Parameters<Exclude<{
        ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
        INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
        MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
        METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
    }[Code], string>>>): {
        "__#1@#message": string;
        readonly "$$<Symbol>codedError": true;
        readonly "$$<Symbol>code": string;
        readonly "$$<Symbol>rawMessage": string;
        readonly name: string;
        message: string;
        getErrorName(): string | undefined;
        readonly [Symbol.species]: TypeErrorConstructor;
        readonly [Symbol.toStringTag]: string | undefined;
        stack?: string | undefined;
        cause?: Error | undefined;
    };
    readonly "$$<Symbol>codedErrorClass": boolean;
    [Symbol.hasInstance](instance: any): boolean;
} & TypeErrorConstructor, RangeError: {
    new <Code extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED">(code: Code, ...formats: Required<Parameters<Exclude<{
        ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
        INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
        MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
        METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
    }[Code], string>>>): {
        "__#1@#message": string;
        readonly "$$<Symbol>codedError": true;
        readonly "$$<Symbol>code": string;
        readonly "$$<Symbol>rawMessage": string;
        readonly name: string;
        message: string;
        getErrorName(): string | undefined;
        readonly [Symbol.species]: RangeErrorConstructor;
        readonly [Symbol.toStringTag]: string | undefined;
        stack?: string | undefined;
        cause?: Error | undefined;
    };
    readonly "$$<Symbol>codedErrorClass": boolean;
    [Symbol.hasInstance](instance: any): boolean;
} & RangeErrorConstructor, ReferenceError: {
    new <Code extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED">(code: Code, ...formats: Required<Parameters<Exclude<{
        ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
        INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
        MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
        METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
    }[Code], string>>>): {
        "__#1@#message": string;
        readonly "$$<Symbol>codedError": true;
        readonly "$$<Symbol>code": string;
        readonly "$$<Symbol>rawMessage": string;
        readonly name: string;
        message: string;
        getErrorName(): string | undefined;
        readonly [Symbol.species]: ReferenceErrorConstructor;
        readonly [Symbol.toStringTag]: string | undefined;
        stack?: string | undefined;
        cause?: Error | undefined;
    };
    readonly "$$<Symbol>codedErrorClass": boolean;
    [Symbol.hasInstance](instance: any): boolean;
} & ReferenceErrorConstructor, Error: {
    new <Code extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED">(code: Code, ...formats: Required<Parameters<Exclude<{
        ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
        INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
        MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
        METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
    }[Code], string>>>): {
        "__#1@#message": string;
        readonly "$$<Symbol>codedError": true;
        readonly "$$<Symbol>code": string;
        readonly "$$<Symbol>rawMessage": string;
        readonly name: string;
        message: string;
        getErrorName(): string | undefined;
        readonly [Symbol.species]: ErrorConstructor;
        readonly [Symbol.toStringTag]: string | undefined;
        stack?: string | undefined;
        cause?: Error | undefined;
    };
    readonly "$$<Symbol>codedErrorClass": boolean;
    [Symbol.hasInstance](instance: any): boolean;
} & ErrorConstructor;
