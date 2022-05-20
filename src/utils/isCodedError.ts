import { SymbolCode } from "../symbols";

export default function isCodedError(errorObject: Error) {
	// return SymbolCode in errorObject;
	return "$$<Symbol>code" in errorObject;
}