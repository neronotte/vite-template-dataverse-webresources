import LocalGlobalContext from "./LocalGlobalContext";
import LocalPageData from "./LocalPageData";
import LocalPageUi from "./LocalPageUi";

export default class LocalPage implements Xrm.Page {
	context: Xrm.GlobalContext;
	data: Xrm.Data;
	ui: Xrm.Ui;

	constructor() {
		this.context = new LocalGlobalContext();
		this.data = new LocalPageData();
		this.ui = new LocalPageUi();
	}

	getAttribute(): Xrm.Attributes.Attribute<any>[];
	getAttribute<T extends Xrm.Attributes.Attribute<any>>(attributeName: string): T;
	getAttribute(attributeName: string): Xrm.Attributes.Attribute<any>;
	getAttribute(index: number): Xrm.Attributes.Attribute<any>;
	getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attributes.Attribute<any>>): Xrm.Attributes.Attribute<any>[];
	getAttribute<T extends Xrm.Attributes.Attribute<any>>(delegateFunction?: unknown): T | Xrm.Attributes.Attribute<any> | Xrm.Attributes.Attribute<any>[] {
		throw new Error("Method not implemented.");
	}
	getControl(): Xrm.Controls.Control[];
	getControl<T extends Xrm.Controls.Control>(controlName: string): T;
	getControl(controlName: string): Xrm.Controls.Control;
	getControl<T extends Xrm.Controls.Control>(index: number): T;
	getControl(index: number): Xrm.Controls.Control;
	getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Controls.Control>): Xrm.Controls.Control[];
	getControl<T extends Xrm.Controls.Control>(delegateFunction?: unknown): T | T | Xrm.Controls.Control | Xrm.Controls.Control[] {
		throw new Error("Method not implemented.");
	}

}