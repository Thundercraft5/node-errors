// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MessageFormatter = ((...args: any[]) => string);

export type MessageMap = {
	[key: string]: MessageFormatter | string;
};

export type FormattableMessageParams<M extends MessageMap, Code extends string> =
	Required<Parameters<Exclude<M[Code], string>>>;

export type MessageKeys<M extends MessageMap> = Extract<keyof M, string>;