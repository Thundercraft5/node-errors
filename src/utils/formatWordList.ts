export default function formatWordList(list: string[], and = false) {
	const last = list.pop(),
		lastWord = and ? "and" : "or";

	if (list.length > 1) {
		const commaSeparated = list.map((s, i) => `${ i % 5 == 0 && i ? "\n" : "" }"${ s }"`);

		return `${ commaSeparated.join(", ") }, ${ lastWord } "${ last }"`;
	} else
		return `${ list.length == 1 ? `"${ list[0] }" ${ lastWord } ` : "" }"${ last }"`;
}