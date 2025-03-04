export default class LocalControlsHeaderSection implements Xrm.Controls.HeaderSection {

	bodyVisible : boolean;
	commandBarVisible : boolean;
	tabNavigatorVisible : boolean;

	constructor() {
		this.bodyVisible = true;
		this.commandBarVisible = true;
		this.tabNavigatorVisible = true;

		this.getBodyVisible = this.getBodyVisible.bind(this);
		this.getCommandBarVisible = this.getCommandBarVisible.bind(this);
		this.getTabNavigatorVisible = this.getTabNavigatorVisible.bind(this);
		this.setBodyVisible = this.setBodyVisible.bind(this);
		this.setCommandBarVisible = this.setCommandBarVisible.bind(this);
		this.setTabNavigatorVisible = this.setTabNavigatorVisible.bind(this);
	}



	getBodyVisible(): boolean {
		return this.bodyVisible;
	}
	getCommandBarVisible(): boolean {
		return this.commandBarVisible;
	}
	getTabNavigatorVisible(): boolean {
		return this.tabNavigatorVisible;
	}
	setBodyVisible(bool: boolean): void {
		this.bodyVisible = bool;
	}
	setCommandBarVisible(bool: boolean): void {
		this.commandBarVisible = bool;
	}
	setTabNavigatorVisible(bool: boolean): void {
		this.tabNavigatorVisible = bool;
	}

}