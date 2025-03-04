export default class LocalLookupValue implements Xrm.LookupValue {
	id: string;
	name?: string;
	entityType: string;

	constructor(entityType: string, id: string, name: string | undefined) {
		this.id = id;
		this.name = name;
		this.entityType = entityType;
	}
}