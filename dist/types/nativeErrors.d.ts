/// <reference types="node" />
export declare const TypeError: {
    readonly prototype: {
        "__#1@#message": string;
        "__#1@#stackTrace": string;
        "__#1@#cause"?: Error;
        readonly "$$<Symbol>isCodedError": true;
        readonly code: any;
        readonly rawMessage: string;
        readonly "__#1@#name": string;
        readonly "__#1@#stack": string;
        readonly message: string;
        readonly name: string;
        readonly [Symbol.species]: any;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: unknown;
    } & TypeError;
    readonly "$$<Symbol>isCodedErrorClass": true;
    [Symbol.hasInstance]: ((instance: any) => boolean) & ((value: any) => boolean);
    captureStackTrace: (targetObject: object, constructorOpt?: Function | undefined) => void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
} & Omit<TypeErrorConstructor, "prototype"> & Error & {
    new <Code extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED" | "READONLY_PROPERTY_SET" | "READONLY_PROPERTY_DELETE" | "OBJECT_PROPERTY_NOT_EXTENSIBLE" | "OBJECT_NOT_EXTENSIBLE" | "CANNOT_ADD_OBJECT_PROPERTY" | "VALUE_OUT_OF_RANGE", Options extends Omit<ErrorOptions, "cause"> & {
        cause?: Error;
    } = {}>(code: Code, ...formats: [...formats: Required<Parameters<Exclude<Omit<{
        ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
        INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
        MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
        METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
        READONLY_PROPERTY_SET: (object: any, key: string | number | symbol) => string;
        READONLY_PROPERTY_DELETE: (object: any, key: string | number | symbol) => string;
        OBJECT_PROPERTY_NOT_EXTENSIBLE: (object: any, key: string | number | symbol) => string;
        OBJECT_NOT_EXTENSIBLE: (object: any) => string;
        CANNOT_ADD_OBJECT_PROPERTY: (value: any, key: string | number | symbol) => string;
        VALUE_OUT_OF_RANGE: (value: number | bigint, min: number | bigint, max: number | bigint) => string;
    }, "TypeError" | "RangeError" | "ReferenceError" | "Error">[Code], string>>>, options: Options]): {
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
        readonly [Symbol.species]: TypeErrorConstructor;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: unknown;
    };
    new <Code_1 extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED" | "READONLY_PROPERTY_SET" | "READONLY_PROPERTY_DELETE" | "OBJECT_PROPERTY_NOT_EXTENSIBLE" | "OBJECT_NOT_EXTENSIBLE" | "CANNOT_ADD_OBJECT_PROPERTY" | "VALUE_OUT_OF_RANGE", Options_1 extends Omit<ErrorOptions, "cause"> & {
        cause?: Error;
    } = {}>(code: Code_1, ...formats_0: Required<Parameters<Exclude<Omit<{
        ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
        INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
        MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
        METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
        READONLY_PROPERTY_SET: (object: any, key: string | number | symbol) => string;
        READONLY_PROPERTY_DELETE: (object: any, key: string | number | symbol) => string;
        OBJECT_PROPERTY_NOT_EXTENSIBLE: (object: any, key: string | number | symbol) => string;
        OBJECT_NOT_EXTENSIBLE: (object: any) => string;
        CANNOT_ADD_OBJECT_PROPERTY: (value: any, key: string | number | symbol) => string;
        VALUE_OUT_OF_RANGE: (value: number | bigint, min: number | bigint, max: number | bigint) => string;
    }, "TypeError" | "RangeError" | "ReferenceError" | "Error">[Code_1], string>>>): {
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
        readonly [Symbol.species]: TypeErrorConstructor;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: unknown;
    };
}, RangeError: {
    readonly prototype: {
        "__#1@#message": string;
        "__#1@#stackTrace": string;
        "__#1@#cause"?: Error;
        readonly "$$<Symbol>isCodedError": true;
        readonly code: any;
        readonly rawMessage: string;
        readonly "__#1@#name": string;
        readonly "__#1@#stack": string;
        readonly message: string;
        readonly name: string;
        readonly [Symbol.species]: any;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: unknown;
    } & RangeError;
    readonly "$$<Symbol>isCodedErrorClass": true;
    [Symbol.hasInstance]: ((instance: any) => boolean) & ((value: any) => boolean);
    captureStackTrace: (targetObject: object, constructorOpt?: Function | undefined) => void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
} & Omit<RangeErrorConstructor, "prototype"> & Error & {
    new <Code extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED" | "READONLY_PROPERTY_SET" | "READONLY_PROPERTY_DELETE" | "OBJECT_PROPERTY_NOT_EXTENSIBLE" | "OBJECT_NOT_EXTENSIBLE" | "CANNOT_ADD_OBJECT_PROPERTY" | "VALUE_OUT_OF_RANGE", Options extends Omit<ErrorOptions, "cause"> & {
        cause?: Error;
    } = {}>(code: Code, ...formats: [...formats: Required<Parameters<Exclude<Omit<{
        ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
        INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
        MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
        METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
        READONLY_PROPERTY_SET: (object: any, key: string | number | symbol) => string;
        READONLY_PROPERTY_DELETE: (object: any, key: string | number | symbol) => string;
        OBJECT_PROPERTY_NOT_EXTENSIBLE: (object: any, key: string | number | symbol) => string;
        OBJECT_NOT_EXTENSIBLE: (object: any) => string;
        CANNOT_ADD_OBJECT_PROPERTY: (value: any, key: string | number | symbol) => string;
        VALUE_OUT_OF_RANGE: (value: number | bigint, min: number | bigint, max: number | bigint) => string;
    }, "TypeError" | "RangeError" | "ReferenceError" | "Error">[Code], string>>>, options: Options]): {
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
        readonly [Symbol.species]: RangeErrorConstructor;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: unknown;
    };
    new <Code_1 extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED" | "READONLY_PROPERTY_SET" | "READONLY_PROPERTY_DELETE" | "OBJECT_PROPERTY_NOT_EXTENSIBLE" | "OBJECT_NOT_EXTENSIBLE" | "CANNOT_ADD_OBJECT_PROPERTY" | "VALUE_OUT_OF_RANGE", Options_1 extends Omit<ErrorOptions, "cause"> & {
        cause?: Error;
    } = {}>(code: Code_1, ...formats_0: Required<Parameters<Exclude<Omit<{
        ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
        INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
        MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
        METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
        READONLY_PROPERTY_SET: (object: any, key: string | number | symbol) => string;
        READONLY_PROPERTY_DELETE: (object: any, key: string | number | symbol) => string;
        OBJECT_PROPERTY_NOT_EXTENSIBLE: (object: any, key: string | number | symbol) => string;
        OBJECT_NOT_EXTENSIBLE: (object: any) => string;
        CANNOT_ADD_OBJECT_PROPERTY: (value: any, key: string | number | symbol) => string;
        VALUE_OUT_OF_RANGE: (value: number | bigint, min: number | bigint, max: number | bigint) => string;
    }, "TypeError" | "RangeError" | "ReferenceError" | "Error">[Code_1], string>>>): {
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
        readonly [Symbol.species]: RangeErrorConstructor;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: unknown;
    };
}, ReferenceError: {
    readonly prototype: {
        "__#1@#message": string;
        "__#1@#stackTrace": string;
        "__#1@#cause"?: Error;
        readonly "$$<Symbol>isCodedError": true;
        readonly code: any;
        readonly rawMessage: string;
        readonly "__#1@#name": string;
        readonly "__#1@#stack": string;
        readonly message: string;
        readonly name: string;
        readonly [Symbol.species]: any;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: unknown;
    } & ReferenceError;
    readonly "$$<Symbol>isCodedErrorClass": true;
    [Symbol.hasInstance]: ((instance: any) => boolean) & ((value: any) => boolean);
    captureStackTrace: (targetObject: object, constructorOpt?: Function | undefined) => void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
} & Omit<ReferenceErrorConstructor, "prototype"> & Error & {
    new <Code extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED" | "READONLY_PROPERTY_SET" | "READONLY_PROPERTY_DELETE" | "OBJECT_PROPERTY_NOT_EXTENSIBLE" | "OBJECT_NOT_EXTENSIBLE" | "CANNOT_ADD_OBJECT_PROPERTY" | "VALUE_OUT_OF_RANGE", Options extends Omit<ErrorOptions, "cause"> & {
        cause?: Error;
    } = {}>(code: Code, ...formats: [...formats: Required<Parameters<Exclude<Omit<{
        ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
        INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
        MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
        METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
        READONLY_PROPERTY_SET: (object: any, key: string | number | symbol) => string;
        READONLY_PROPERTY_DELETE: (object: any, key: string | number | symbol) => string;
        OBJECT_PROPERTY_NOT_EXTENSIBLE: (object: any, key: string | number | symbol) => string;
        OBJECT_NOT_EXTENSIBLE: (object: any) => string;
        CANNOT_ADD_OBJECT_PROPERTY: (value: any, key: string | number | symbol) => string;
        VALUE_OUT_OF_RANGE: (value: number | bigint, min: number | bigint, max: number | bigint) => string;
    }, "TypeError" | "RangeError" | "ReferenceError" | "Error">[Code], string>>>, options: Options]): {
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
        readonly [Symbol.species]: ReferenceErrorConstructor;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: unknown;
    };
    new <Code_1 extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED" | "READONLY_PROPERTY_SET" | "READONLY_PROPERTY_DELETE" | "OBJECT_PROPERTY_NOT_EXTENSIBLE" | "OBJECT_NOT_EXTENSIBLE" | "CANNOT_ADD_OBJECT_PROPERTY" | "VALUE_OUT_OF_RANGE", Options_1 extends Omit<ErrorOptions, "cause"> & {
        cause?: Error;
    } = {}>(code: Code_1, ...formats_0: Required<Parameters<Exclude<Omit<{
        ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
        INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
        MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
        METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
        READONLY_PROPERTY_SET: (object: any, key: string | number | symbol) => string;
        READONLY_PROPERTY_DELETE: (object: any, key: string | number | symbol) => string;
        OBJECT_PROPERTY_NOT_EXTENSIBLE: (object: any, key: string | number | symbol) => string;
        OBJECT_NOT_EXTENSIBLE: (object: any) => string;
        CANNOT_ADD_OBJECT_PROPERTY: (value: any, key: string | number | symbol) => string;
        VALUE_OUT_OF_RANGE: (value: number | bigint, min: number | bigint, max: number | bigint) => string;
    }, "TypeError" | "RangeError" | "ReferenceError" | "Error">[Code_1], string>>>): {
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
        readonly [Symbol.species]: ReferenceErrorConstructor;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: unknown;
    };
}, Error: {
    readonly prototype: {
        "__#1@#message": string;
        "__#1@#stackTrace": string;
        "__#1@#cause"?: Error;
        readonly "$$<Symbol>isCodedError": true;
        readonly code: any;
        readonly rawMessage: string;
        readonly "__#1@#name": string;
        readonly "__#1@#stack": string;
        readonly message: string;
        readonly name: string;
        readonly [Symbol.species]: any;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: unknown;
    } & Error;
    readonly "$$<Symbol>isCodedErrorClass": true;
    [Symbol.hasInstance]: ((instance: any) => boolean) & ((value: any) => boolean);
    captureStackTrace: (targetObject: object, constructorOpt?: Function | undefined) => void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
} & Omit<ErrorConstructor, "prototype"> & Error & {
    new <Code extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED" | "READONLY_PROPERTY_SET" | "READONLY_PROPERTY_DELETE" | "OBJECT_PROPERTY_NOT_EXTENSIBLE" | "OBJECT_NOT_EXTENSIBLE" | "CANNOT_ADD_OBJECT_PROPERTY" | "VALUE_OUT_OF_RANGE", Options extends Omit<ErrorOptions, "cause"> & {
        cause?: Error;
    } = {}>(code: Code, ...formats: [...formats: Required<Parameters<Exclude<Omit<{
        ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
        INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
        MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
        METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
        READONLY_PROPERTY_SET: (object: any, key: string | number | symbol) => string;
        READONLY_PROPERTY_DELETE: (object: any, key: string | number | symbol) => string;
        OBJECT_PROPERTY_NOT_EXTENSIBLE: (object: any, key: string | number | symbol) => string;
        OBJECT_NOT_EXTENSIBLE: (object: any) => string;
        CANNOT_ADD_OBJECT_PROPERTY: (value: any, key: string | number | symbol) => string;
        VALUE_OUT_OF_RANGE: (value: number | bigint, min: number | bigint, max: number | bigint) => string;
    }, "TypeError" | "RangeError" | "ReferenceError" | "Error">[Code], string>>>, options: Options]): {
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
        readonly [Symbol.species]: ErrorConstructor;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: unknown;
    };
    new <Code_1 extends "ERROR_CLASS_ALREADY_EXTENDED" | "INVALID_MESSAGE_CODE" | "MESSAGE_CODE_MISSING_FORMATS" | "METHOD_NOT_IMPLEMENTED" | "READONLY_PROPERTY_SET" | "READONLY_PROPERTY_DELETE" | "OBJECT_PROPERTY_NOT_EXTENSIBLE" | "OBJECT_NOT_EXTENSIBLE" | "CANNOT_ADD_OBJECT_PROPERTY" | "VALUE_OUT_OF_RANGE", Options_1 extends Omit<ErrorOptions, "cause"> & {
        cause?: Error;
    } = {}>(code: Code_1, ...formats_0: Required<Parameters<Exclude<Omit<{
        ERROR_CLASS_ALREADY_EXTENDED: (Class: import("./types").ErrorClass) => string;
        INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
        MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
        METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
        READONLY_PROPERTY_SET: (object: any, key: string | number | symbol) => string;
        READONLY_PROPERTY_DELETE: (object: any, key: string | number | symbol) => string;
        OBJECT_PROPERTY_NOT_EXTENSIBLE: (object: any, key: string | number | symbol) => string;
        OBJECT_NOT_EXTENSIBLE: (object: any) => string;
        CANNOT_ADD_OBJECT_PROPERTY: (value: any, key: string | number | symbol) => string;
        VALUE_OUT_OF_RANGE: (value: number | bigint, min: number | bigint, max: number | bigint) => string;
    }, "TypeError" | "RangeError" | "ReferenceError" | "Error">[Code_1], string>>>): {
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
        readonly [Symbol.species]: ErrorConstructor;
        readonly [Symbol.toStringTag]: string;
        stack?: string;
        cause?: unknown;
    };
};
//# sourceMappingURL=nativeErrors.d.ts.map