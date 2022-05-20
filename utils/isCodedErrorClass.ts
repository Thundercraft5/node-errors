import { SymbolCodedErrorClass } from "../symbols";

export default function isCodedErrorClass(ErrorClass: typeof Error) {
	// return SymbolCodedErrorClass in ErrorClass;
	return "$$<Symbol>codedErrorClass" in ErrorClass;
}