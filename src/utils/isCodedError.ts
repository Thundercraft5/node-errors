import { SymbolCode } from "../symbols";
import type { CodedError} from "../types";
import { ErrorClass, MessageMap } from "../types";

export default function isCodedError(errorObject: any): errorObject is CodedError {
	// return errorObject?.[SymbolCode];
	try {
		return errorObject?.["$$<Symbol>isCodedError"];
	} catch {
		return false;
	}
}

let o: any;