export default class LocalControlsFooterSection implements Xrm.Controls.FooterSection {
	
	visible: boolean;

	constructor() {
		this.visible = true;
		this.getVisible = this.getVisible.bind(this);
		this.setVisible = this.setVisible.bind(this);
	}
	
	getVisible(): boolean {
		return this.visible;
	}
	setVisible(bool: boolean): void {
		this.visible = bool;
	}
}