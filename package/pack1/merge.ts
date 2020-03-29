import { BaseEng, ViewerInterface } from "./BaseEng";

export type Intersection<TUnion> = (TUnion extends any
	? (_: TUnion) => void
	: never) extends (_: infer T) => void
	? T
	: never;

//创建一个类 可以拥有User1和User2的方法
function merge<T extends BaseEng[]>(
	viewer: ViewerInterface,
	...users: T
): Intersection<T[number]> {
	function setViewer(viewer: ViewerInterface) {
		for (let user of users) {
			user.setViewer(viewer);
		}
	}
	setViewer(viewer);
	let mergeObj = new Proxy(
		{},
		{
			get(target, key) {
				if (key === "setViewer") {
					return setViewer;
				}
				for (let user of users) {
					if (Reflect.has(user, key)) {
						let value = Reflect.get(user, key);
						if (typeof value === "function") {
							return value.bind(user);
						}
						return value;
					}
				}
			}
		}
	);
	return mergeObj as any;
}

export { merge };
