interface ViewerInterface {
	draw: () => void;
	move: () => void;
	run: () => void;
}
class BaseEng {
	viewer!: ViewerInterface;
	setViewer(viewer: ViewerInterface) {
		this.viewer = viewer;
	}
}

export { BaseEng, ViewerInterface };
