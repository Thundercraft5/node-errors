const messages = {
	ERROR_CLASS_ALREADY_EXTENDED: (Class: typeof Error) => `Error class "${ Class.name }" is already a coded error class.`,
	INVALID_MESSAGE_CODE: (code = "", validCodes = "") => `Error code "${ code }" was not found in the provided messages registry.\nList of valid codes: ${ validCodes }`,
	MESSAGE_CODE_MISSING_FORMATS: (code = "", required = 0, received = 0) => `Message code "${ code }" expects at least ${ required } format arguments, got ${ received } instead`,
	METHOD_NOT_IMPLEMENTED: (Class: Function, name = "") => `Method ${ Class.name }#${ name }() is not implemented.`,
};

export default messages;