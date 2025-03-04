import LocalItemCollection from "./LocalItemCollection";
import LocalLookupValue from "./LocalLookupValue";

export default class LocalEntity implements Xrm.Entity {

	attributes: Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute<any>>;

	constructor() {
		this.attributes = new LocalItemCollection<Xrm.Attributes.Attribute<any>>();		
	}

	addOnPostSave(handler: Xrm.Events.PostSaveEventHandler): void {
	}
	addOnSave(handler: Xrm.Events.SaveEventHandler | Xrm.Events.SaveEventHandlerAsync): void {
	}
	getDataXml(): string {
		throw new Error("Method not implemented.");
	}
	getEntityName(): string {
		return this.getEntityReference().entityType;
	}
	getEntityReference(): Xrm.LookupValue {
		return new LocalLookupValue("entity", "00000000-0000-0000-0000-000000000000", "entity");
	}
	getId(): string {
		return this.getEntityReference().id;
	}
	getIsDirty(): boolean {
		return false;
	}
	getPrimaryAttributeValue(): string {
		throw new Error("Method not implemented.");
	}
	isValid(): boolean {
		return true;
	}
	removeOnPostSave(handler: Xrm.Events.PostSaveEventHandler): void {
	}
	removeOnSave(handler: Xrm.Events.SaveEventHandler | Xrm.Events.SaveEventHandlerAsync): void {
	}
	save(): void;
	save(saveMode?: Xrm.EntitySaveMode | undefined): void;
	save(saveMode?: unknown): void {
	}
}