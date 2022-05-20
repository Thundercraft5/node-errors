/// <reference types="node" />
import { FormattableMessageParams, MessageMap } from "./types";
export default function makeCodedError<M extends MessageMap, T extends typeof global.Error>(messages: M, Base: T): {
    new <Code extends Extract<keyof M, string>>(code: Code, ...formats: Required<Parameters<Exclude<M[Code], string>>>): {
        "__#1@#message": string;
        readonly "$$<Symbol>codedError": true;
        readonly "$$<Symbol>code": string;
        readonly "$$<Symbol>rawMessage": string;
        readonly name: string;
        message: string;
        getErrorName(): string | undefined;
        readonly [Symbol.species]: T;
        readonly [Symbol.toStringTag]: string | undefined;
        stack?: string | undefined;
        cause?: Error | undefined;
    };
    readonly "$$<Symbol>codedErrorClass": boolean;
    captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
} & T;
