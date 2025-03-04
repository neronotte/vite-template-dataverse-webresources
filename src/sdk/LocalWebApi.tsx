import LocalWebApiOffline from "./LocalWebApiOffline";
import LocalWebApiOnline from "./LocalWebApiOnline";

export default class LocalWebApi implements Xrm.WebApi {
	online: Xrm.WebApiOnline;
	offline: Xrm.WebApiOffline;

	constructor() {
		this.online = new LocalWebApiOnline();
		this.offline = new LocalWebApiOffline();
	}

	isAvailableOffline(entityLogicalName: string): boolean {
		return false;
	}
	createRecord(entityLogicalName: string, record: any): Xrm.Async.PromiseLike<Xrm.CreateResponse> {
		return this.online.createRecord(entityLogicalName, record);
	}
	deleteRecord(entityLogicalName: string, id: string): Xrm.Async.PromiseLike<string> {
		return this.online.deleteRecord(entityLogicalName, id);
	}
	retrieveRecord(entityLogicalName: string, id: string, options?: string | undefined): Xrm.Async.PromiseLike<any> {
		return this.online.retrieveRecord(entityLogicalName, id, options);
	}
	retrieveMultipleRecords(entityLogicalName: string, options?: string | undefined, maxPageSize?: number | undefined): Xrm.Async.PromiseLike<Xrm.RetrieveMultipleResult> {
		return this.online.retrieveMultipleRecords(entityLogicalName, options, maxPageSize);
	}
	updateRecord(entityLogicalName: string, id: string, data: any): Xrm.Async.PromiseLike<any> {
		return this.online.updateRecord(entityLogicalName, id, data);
	}
}