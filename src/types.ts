export type MessageFormatter = ((...args: any[]) => string);
export type Message = MessageFormatter | string;
export type ErrorClass = abstract new (...args: any[]) => Error;

export type FormattableMessageParams<M extends MessageMap, Code extends string> =
	Required<Parameters<Exclude<M[Code], string>>>;

export type MessageKeys<M extends MessageMap> = Extract<keyof M, string>;
export type ConstructorReturnType<T extends abstract new (...args: any[]) => any> = T extends abstract new (...args: any[]) => infer R ? R : never;

export type MessageDescriptor<E extends ErrorsDescriptor> = MessageMap & { [K in keyof E]?: MessageMap };

export type MessageMap = {
	[key: string]: Message;
};

export type ErrorsDescriptor = {
	[key: string]: ErrorClass;
};