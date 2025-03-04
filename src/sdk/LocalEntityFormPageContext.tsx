export default class LocalEntityFormPageContext implements Xrm.EntityFormPageContext {
	pageType: "entityrecord";
	entityName: string;
	entityId?: string | undefined;
	createFromEntity?: Xrm.LookupValue | undefined;
	formId?: string | undefined;

	constructor() {
		this.pageType = "entityrecord";
		this.entityName = "test";
		this.entityId = "00000000-0000-0000-0000-000000000000";
		this.createFromEntity = undefined;
		this.formId = "00000000-0000-0000-0000-000000000000";
	}
}