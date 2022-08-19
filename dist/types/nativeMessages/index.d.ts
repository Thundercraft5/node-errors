import type { ErrorClass } from "..";
declare const messages: {
    ERROR_CLASS_ALREADY_EXTENDED: (Class: ErrorClass) => string;
    INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
    MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
    METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
    READONLY_PROPERTY_SET: (object: any, key: number | string | symbol) => string;
    OBJECT_NOT_EXTENSIBLE: (object: any, key: number | string | symbol) => string;
    CANNOT_ADD_OBJECT_PROPERTY: (value: any, key: number | string | symbol) => string;
    VALUE_OUT_OF_RANGE: (value: bigint | number, min: bigint | number, max: bigint | number) => string;
};
export default messages;
//# sourceMappingURL=index.d.ts.map