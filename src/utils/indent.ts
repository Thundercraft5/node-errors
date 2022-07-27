export default function indent(s: string, count = 2, char = " ") {
	return s.trim().split("\n").map(s => char.repeat(count) + s).join("\n");
}