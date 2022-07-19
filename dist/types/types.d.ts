export declare type MessageFormatter = ((...args: any[]) => string);
export declare type Message = MessageFormatter | string;
export declare type ErrorClass = abstract new (...args: any[]) => Error;
export declare type FormattableMessageParams<M extends MessageMap, Code extends string> = Required<Parameters<Exclude<M[Code], string>>>;
export declare type MessageKeys<M extends MessageMap> = Extract<keyof M, string>;
export declare type ConstructorReturnType<T extends abstract new (...args: any[]) => any> = T extends abstract new (...args: any[]) => infer R ? R : never;
export declare type MessageDescriptor<E extends ErrorsDescriptor> = MessageMap & {
    [K in keyof E]?: MessageMap;
};
export declare type MessageMap = {
    [key: string]: Message;
};
export declare type ErrorsDescriptor = {
    [key: string]: ErrorClass;
};
//# sourceMappingURL=types.d.ts.map