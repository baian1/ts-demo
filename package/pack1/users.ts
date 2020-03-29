import { BaseEng } from "./BaseEng";

class User1 extends BaseEng {
	/**
	 * 绘制和移动
	 */
	drawAndMove() {
		this.viewer.draw();
		this.viewer.move();
	}
}

interface NiceBoy {
	name: string;
	age: number;
}

class User2 extends BaseEng {
	/**
	 * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
	 * {@linkcode BaseEng}
	 * 移动和跑
	 *
	 * ```typescript
	 * Or you can specify the language explicitly
	 * const instance = new MyClass();
	 * ```
	 */
	moveAndRun(bbb?: NiceBoy) {
		this.viewer.move();
		this.viewer.run();
	}
}

export { User1, User2 };
