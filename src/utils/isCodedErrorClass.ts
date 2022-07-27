import { SymbolCodedErrorClass } from "../symbols";
import type { CodedError } from "../types";

export default function isCodedErrorClass(ErrorClass: any): ErrorClass is CodedError {
	// return SymbolCodedErrorClass in ErrorClass;
	try {
		return ErrorClass?.["$$<Symbol>isCodedErrorClass"];
	} catch {
		return false;
	}
}