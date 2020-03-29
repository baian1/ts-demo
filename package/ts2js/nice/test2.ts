import { fire2 } from "./test3";
export function fire() {
	console.log("fire");
	const a = fire2();
	console.log(a);
	return a + 3;
}
