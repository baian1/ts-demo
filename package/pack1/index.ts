import { ViewerInterface } from "./BaseEng";
import { User3, User4 } from "./user3";
import { User1, User2 } from "./users";
import { merge } from "./merge";
import { ATM, a } from "aoteman";

const viewer1 = {
	draw: () => {
		console.log("draw");
	},
	move: () => {
		console.log("move");
	},
	run: () => {
		console.log("run");
	}
};

const viewer2 = {
	draw: () => {
		console.log("draw2");
	},
	move: () => {
		console.log("move2");
	},
	run: () => {
		console.log("run2");
	}
};

let a = merge(viewer1, new User1(), new User2(), new User3(), new User4());

a.drawAndMove();
a.moveAndRun({
	name: "1",
	age: "sad"
});
console.log("---------------");
a.setViewer(viewer2);
a.drawAndMove();
a.moveAndRun();
a.draw66("sda");
a.doctest(1, "11");
a.setViewer("dsa");
