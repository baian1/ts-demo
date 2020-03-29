// import { fire3 } from "./test1";
// import { fire } from "./nice/test2";
// const { hello } = require("./hello");
// let a = "s";
// a = hello();
// console.log(a);
// fire();
// fire3();

// export { a };
interface AInterface {
	a?: number;
	b?: number;
	c?: number;
	d?: number;
}

function a(this: AInterface) {
	this.b = 2;
	console.log(1);
}
async function b(this: AInterface) {
	console.log(this.b);

	return new Promise((resolv, rej) => {
		let cb = function() {
			this.c = 3;
			resolv();
		};
		setTimeout(cb, 1000);
	});
}
function c(this: AInterface) {
	console.log(this.c);
}

function d(this: AInterface) {
	console.log(this.d === undefined);
}

let arr = [a, b, c, d];

let obj: AInterface = {};

async function main() {
	while (arr.length !== 0) {
		let cb = arr.shift();
		await cb?.call(obj);
	}
}
main();
