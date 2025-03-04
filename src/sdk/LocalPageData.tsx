import LocalEntity from "./LocalEntity";
import LocalItemCollection from "./LocalItemCollection";
import LocalProcessManager from "./LocalProcessFlowProcessManager";

export default class LocalPageData implements Xrm.Data {
	
	attributes: Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute<any>>;
	entity: Xrm.Entity;
	process: Xrm.ProcessFlow.ProcessManager;

	constructor() {
		this.attributes = new LocalItemCollection<Xrm.Attributes.Attribute<any>>();
		this.entity = new LocalEntity();
		this.process = new LocalProcessManager();
	}



	addOnLoad(handler: Xrm.Events.DataLoadEventHandler): void {
	}
	getIsDirty(): boolean {
		return false;
	}
	isValid(): boolean {
		return true;
	}
	refresh(save: boolean): Xrm.Async.PromiseLike<undefined> {
		throw new Error("Method not implemented.");
	}
	removeOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void {
	}
	save(): Xrm.Async.PromiseLike<undefined>;
	save(saveOptions: Xrm.SaveOptions): Xrm.Async.PromiseLike<undefined>;
	save(saveOptions?: unknown): Xrm.Async.PromiseLike<undefined> {
		throw new Error("Method not implemented.");
	}
}