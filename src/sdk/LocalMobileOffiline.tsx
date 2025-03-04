export default class LocalMobileOffline implements Xrm.MobileOffline {
	isOfflineEnabled(entityType: string): boolean {
		return false;
	}
	createRecord(entityType: string, data: { [attributeName: string]: any; }): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject> {
		throw new Error("Method not implemented.");
	}
	retrieveRecord(entityType: string, id: string, options?: string | undefined): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject> {
		throw new Error("Method not implemented.");
	}
	retrieveMultipleRecords(entityType: string, options?: string | undefined, maxPageSize?: number | undefined): Xrm.Async.PromiseLike<{ [key: string]: any; }[]> {
		throw new Error("Method not implemented.");
	}
	updateRecord(entityType: string, id: string, data: { [attributeName: string]: any; }): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject> {
		throw new Error("Method not implemented.");
	}
	deleteRecord(entityType: string, id: string): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject> {
		throw new Error("Method not implemented.");
	}
}