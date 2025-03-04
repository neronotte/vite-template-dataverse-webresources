import LocalItemCollection from "./LocalItemCollection";

export default class LocalControlsFormSelector implements Xrm.Controls.FormSelector {

	items: Xrm.Collection.ItemCollection<Xrm.Controls.FormItem>;

	constructor() {	
		this.items = new LocalItemCollection<Xrm.Controls.FormItem>();
		this.getCurrentItem = this.getCurrentItem.bind(this);
	}


	getCurrentItem(): Xrm.Controls.FormItem {
		throw new Error("Method not implemented.");
	}
}