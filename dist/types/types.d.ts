import { makeCodedError } from ".";
export declare type MessageFormatter = ((...args: any[]) => string);
export declare type Message = MessageFormatter | string;
export declare type ErrorClass = Constructor<Error>;
export declare type CodedErrorClass<M extends MessageMap = MessageMap, E extends ErrorClass = ErrorClass> = ReturnType<typeof makeCodedError<M, E>>;
export declare type CodedError<M extends MessageMap = MessageMap> = InstanceType<CodedErrorClass<M>>;
export declare type FormattableMessageParams<M extends MessageMap, Code extends string> = Required<Parameters<Exclude<M[Code], string>>>;
export declare type MessageKeys<M extends MessageMap> = Extract<keyof M, string>;
export declare type ConstructorReturnType<T> = T extends Constructor<infer R> ? R : never;
export declare type Constructor<R = any, A extends any[] = any[]> = abstract new (...args: A) => R;
export declare type MessageDescriptor<E extends ErrorsDescriptor> = MessageMap & {
    [K in keyof E]?: MessageMap;
};
export declare type MessageMap = {
    [key: string]: Message;
};
export declare type ErrorsDescriptor = {
    [key: string]: ErrorClass;
};
export declare type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];
export declare type ExtractExact<T, U> = T extends U ? U extends T ? T : never : never;
export declare type Values<T> = T[keyof T];
export declare type KeysByValue<T extends object, V = never> = Extract<Entries<T>[number], [string, V]>[0];
export declare type KeysByValueExact<T extends object, V = never> = ExtractExact<Entries<T>[number], [string, V]>[0];
export declare type GlobalThis = typeof globalThis;
export declare type PickByValue<T extends object, V> = Pick<T, KeysByValue<T, V>>;
export declare type OptionalPropertyNames<T> = {
    [K in keyof T]-?: ({} extends {
        [P in K]: T[K];
    } ? K : never);
}[keyof T];
declare type SpreadProperties<L, R, K extends keyof L & keyof R> = {
    [P in K]: Exclude<R[P], undefined> | L[P];
};
declare type Id<T> = T extends infer U ? {
    [K in keyof U]: U[K];
} : never;
declare type Spread$1<L, R> = Id<Pick<L, Exclude<keyof L, keyof R>> & Pick<R, Exclude<keyof R, OptionalPropertyNames<R>>> & Pick<R, Exclude<OptionalPropertyNames<R>, keyof L>> & SpreadProperties<L, R, OptionalPropertyNames<R> & keyof L>>;
export declare type Spread<A extends readonly [...any]> = A extends [infer L, ...infer R] ? Spread$1<L, Spread<R>> : unknown;
export {};
//# sourceMappingURL=types.d.ts.map