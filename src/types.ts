
export type MessageFormatter = ((...args: any[]) => string);
export type ErrorClass = abstract new (...args: any[]) => Error;
export type MessageMap = {
	[key: string]: MessageFormatter | string;
};

export type FormattableMessageParams<M extends MessageMap, Code extends string> =
	Required<Parameters<Exclude<M[Code], string>>>;

export type MessageKeys<M extends MessageMap> = Extract<keyof M, string>;
export type ConstructorReturnType<T extends abstract new (...args: any[]) => any> = T extends abstract new (...args: any[]) => infer R ? R : never;