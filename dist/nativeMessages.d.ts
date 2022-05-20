declare const messages: {
    ERROR_CLASS_ALREADY_EXTENDED: (Class: typeof Error) => string;
    INVALID_MESSAGE_CODE: (code?: string, validCodes?: string) => string;
    MESSAGE_CODE_MISSING_FORMATS: (code?: string, required?: number, received?: number) => string;
    METHOD_NOT_IMPLEMENTED: (Class: Function, name?: string) => string;
};
export default messages;
