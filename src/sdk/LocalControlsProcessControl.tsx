export default class LocalControlsProcessControl implements Xrm.Controls.ProcessControl {

	displayState: Xrm.DisplayState;
	visible: boolean;

	/**
	 *
	 */
	constructor() {
		this.displayState = "expanded";
		this.visible = true;

		this.setDisplayState = this.setDisplayState.bind(this);
		this.getDisplayState = this.getDisplayState.bind(this);

		this.getVisible = this.getVisible.bind(this);
		this.setVisible = this.setVisible.bind(this);
	}

	setDisplayState(displayState: Xrm.DisplayState): void {
		this.displayState = displayState;
	}
	getDisplayState(): Xrm.DisplayState {
		return this.displayState;
	}
	reflow(updateUI: boolean, parentStage: string, nextStage: string): void {
	}
	getVisible(): boolean {
		return this.visible;
	}
	setVisible(visible: boolean): void {
		this.visible = visible;
	}
}