export default function omit<T extends object, U extends [...(keyof T)[]]>(object: T, ...keys: [...U]): Omit<T, U[number]>;
//# sourceMappingURL=omit.d.ts.map