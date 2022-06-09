import type { ErrorClass } from "./types";
declare const messages: {
    ERROR_CLASS_ALREADY_EXTENDED: (Class: ErrorClass) => string;
    INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
    MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
    METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
};
export default messages;
//# sourceMappingURL=nativeMessages.d.ts.map