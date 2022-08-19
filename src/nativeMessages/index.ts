import type { ErrorClass } from "..";
import toRepresentation from "./toRepresentation";

const messages = {
	// Internal error messages
	ERROR_CLASS_ALREADY_EXTENDED: (Class: ErrorClass) => `Error class "${ Class.name }" is already a coded error class.`,
	INVALID_MESSAGE_CODE: (code = "", validCodes = "") => `Error code "${ code }" was not found in the provided messages registry.\nList of valid codes: ${ validCodes }`,
	MESSAGE_CODE_MISSING_FORMATS: (code = "", required = 0, received = 0) => `Message code "${ code }" expects at least ${ required } format arguments, got ${ received } instead`,

	// Built-in error messages
	METHOD_NOT_IMPLEMENTED: (Class: Function, name = "") => `Method ${ Class.name }#${ name }() is not implemented.`,
	READONLY_PROPERTY_SET: (object: any, key: number | string | symbol) => `Cannot assign to read only property '${ String(key) }' of object '${ toRepresentation(object, false) }'`,
	OBJECT_NOT_EXTENSIBLE: (object: any, key: number | string | symbol) => `Cannot add property '${ String(key) }', object '${ toRepresentation(object) } is not extensible'`,
	CANNOT_ADD_OBJECT_PROPERTY: (value: any, key: number | string | symbol) => `Cannot add property '${ String(key) }' on ${ typeof value } '${ toRepresentation(value) }'`,
	VALUE_OUT_OF_RANGE: (value: bigint | number, min: bigint | number, max: bigint | number) => `Value "${ value } is out of range. Values must be in the range of "${min}" ti "${max}"`,
};

export default messages;