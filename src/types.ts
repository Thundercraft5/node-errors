import { makeCodedError } from ".";

export type MessageFormatter = ((...args: any[]) => string);
export type Message = MessageFormatter | string;
export type ErrorClass = Constructor<Error>;

export type CodedErrorClass<M extends MessageMap = MessageMap, E extends ErrorClass = ErrorClass> = ReturnType<typeof makeCodedError<M, E>>;
export type CodedError<M extends MessageMap = MessageMap> = InstanceType<CodedErrorClass<M>>;
export type FormattableMessageParams<M extends MessageMap, Code extends string> =
	Required<Parameters<Exclude<M[Code], string>>>;

export type MessageKeys<M extends MessageMap> = Extract<keyof M, string>;
export type ConstructorReturnType<T> = T extends Constructor<infer R> ? R : never;

export type Constructor<R = any, A extends any[] = any[]> = abstract new (...args: A) => R;
export type MessageDescriptor<E extends ErrorsDescriptor> = MessageMap & { [K in keyof E]?: MessageMap };

export type MessageMap = {
	[key: string]: Message;
};

export type ErrorsDescriptor = {
	[key: string]: ErrorClass;
};
export type Entries<T> = {
	[K in keyof T]: [K, T[K]];
}[keyof T][];


export type ExtractExact<T, U> = T extends U ? U extends T ? T : never : never;

export type Values<T> = T[keyof T];
export type KeysByValue<T extends object, V= never> = Extract<Entries<T>[number], [string, V]>[0];
export type KeysByValueExact<T extends object, V = never> = ExtractExact<Entries<T>[number], [string, V]>[0];
export type GlobalThis = typeof globalThis;
export type PickByValue<T extends object, V> = Pick<T, KeysByValue<T, V>>;

export type OptionalPropertyNames<T> = {
	[K in keyof T]-?: ({} extends {
		[P in K]: T[K];
	} ? K : never);
}[keyof T];

type SpreadProperties<L, R, K extends keyof L & keyof R> =
  { [P in K]: Exclude<R[P], undefined> | L[P] };

type Id<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

type Spread$1<L, R> = Id<
& Pick<L, Exclude<keyof L, keyof R>>
& Pick<R, Exclude<keyof R, OptionalPropertyNames<R>>>
& Pick<R, Exclude<OptionalPropertyNames<R>, keyof L>>
& SpreadProperties<L, R, OptionalPropertyNames<R> & keyof L>
>;

export type Spread<A extends readonly [...any]> = A extends [infer L, ...infer R] ?
	Spread$1<L, Spread<R>> : unknown;
