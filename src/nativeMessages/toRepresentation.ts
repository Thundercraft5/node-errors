const toString = (v: any) => Object.prototype.toString.call(v);

/*
 * type GlobalThis$1 = Omit<GlobalThis, "__dirname" | "__filename" | "exports" | "globalThis" | "Object">;
 * type GlobalConstructors = PickByValue<GlobalThis$1, Constructor>;
 * type GlobalConstructorTypes = {
 * 	[K in keyof GlobalConstructors]: ConstructorReturnType<GlobalConstructors[K]>;
 * };
 */

/*
 * type ToRepresentation<T> =
 * 	T extends (ExtractExact<GlobalConstructorTypes[keyof GlobalConstructorTypes], T>)
 * 		? `${ TypeOf<T> } [object ${ KeysByValue<GlobalConstructorTypes, T> }]`
 * 	: T extends any[]
 * 		? `${ TypeOf<T> } [object Array]`
 * 	: T extends boolean | number
 * 		? `${ TypeOf<T> } ${ `${ T }` }`
 * 	: T extends undefined
 * 		? "undefined"
 * 	: T extends string
 * 		? `${ TypeOf<T> } "${ T }"`
 * 	: T extends symbol
 * 		? `${ TypeOf<T> } Symbol(${ string | "" })`
 * 	: T extends bigint
 * 		? `${ TypeOf<T> } ${ T }n`
 * 	: `${ TypeOf<T> } ${ T extends null ? "null" : `#<${ string }>` }`;
 */

// 	type Any = bigint | boolean | number | object | string | symbol | null | undefined;
export default function toRepresentation(object: any, includeType: boolean = false): string {
	let valueRepresentation = "";

	switch (typeof object) {
		case "string": {
			valueRepresentation = `"${ object.slice(1, 100) } ${ object.length >= 100 ? "<...>" : "" }"`;
		} break;
		case "bigint": valueRepresentation = `${ String(object) }n`; break;
		case "symbol":
		case "boolean":
		case "undefined":
		case "function":
		case "number": valueRepresentation = String(object); break;
		case "object": {
			if (object == null) valueRepresentation = String(object);
			else {
				const
					constructorName = Reflect.getPrototypeOf(object)?.constructor.name,
					toStringName = toString(object).slice(8, -1);

				valueRepresentation = toStringName in globalThis && toStringName !== "Object"
					? toString(object)
					: `#<${ constructorName }>`;
			}

			break;
		}
		default: throw new TypeError();
	}

	return `${ includeType && object !== "undefined" ? `${ typeof object } ` : "" }${ valueRepresentation }`;
}