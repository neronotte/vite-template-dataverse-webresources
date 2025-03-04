import LocalItemCollection from "./LocalItemCollection";

export default class LocalControlsNavigation implements Xrm.Controls.Navigation {
	items: Xrm.Collection.ItemCollection<Xrm.Controls.NavigationItem>;

	/**
	 *
	 */
	constructor() {
		this.items = new LocalItemCollection<Xrm.Controls.NavigationItem>();
	}
}