export declare type MessageFormatter = ((...args: any[]) => string);
export declare type ErrorClass = abstract new (...args: any[]) => Error;
export declare type MessageMap = {
    [key: string]: MessageFormatter | string;
};
export declare type FormattableMessageParams<M extends MessageMap, Code extends string> = Required<Parameters<Exclude<M[Code], string>>>;
export declare type MessageKeys<M extends MessageMap> = Extract<keyof M, string>;
