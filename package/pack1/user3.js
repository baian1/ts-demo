import { BaseEng } from "./BaseEng";

export class User3 extends BaseEng {
	drawAndMoveAndRun() {
		this.viewer.draw();
		this.viewer.move();
		this.viewer.run();
	}
}

export class User4 extends BaseEng {
	/**
	 * 画奇奇怪怪的东西
	 * @param {number} name
	 */
	draw66(name) {
		console.log(name);
	}
	/**
	 * @param {number} param1
	 * @param {string} param2
	 */
	doctest(param1, param2) {
		return param1 + param2;
	}
}
