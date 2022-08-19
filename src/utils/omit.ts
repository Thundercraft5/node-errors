function entries<T extends object>(object: T) {
	return Object.entries(object) as [keyof T, T[keyof T]][];
}

export default function omit<T extends object, U extends [...(keyof T)[]]>(object: T, ...keys: [...U]) {
	const newObject = {} as Omit<T, U[number]>,
	 objectEntries = entries(object)
	 	.filter(([k]) => !keys.includes(k)) as [Exclude<keyof T, U[number]>, T[Exclude<keyof T, U[number]>]][];

	for (const [k, v] of objectEntries)
		newObject[k] = v;

	return newObject;
}