export default class LocalWebApiOnline implements Xrm.WebApiOnline {
	execute(request: any): Xrm.Async.PromiseLike<Xrm.ExecuteResponse> {
		throw new Error("Method not implemented.");
	}
	executeMultiple(request: any[]): Xrm.Async.PromiseLike<Xrm.ExecuteResponse[]> {
		throw new Error("Method not implemented.");
	}
	createRecord(entityLogicalName: string, record: any): Xrm.Async.PromiseLike<Xrm.CreateResponse> {
		throw new Error("Method not implemented.");
	}
	deleteRecord(entityLogicalName: string, id: string): Xrm.Async.PromiseLike<string> {
		throw new Error("Method not implemented.");
	}
	retrieveRecord(entityLogicalName: string, id: string, options?: string | undefined): Xrm.Async.PromiseLike<any> {
		throw new Error("Method not implemented.");
	}
	retrieveMultipleRecords(entityLogicalName: string, options?: string | undefined, maxPageSize?: number | undefined): Xrm.Async.PromiseLike<Xrm.RetrieveMultipleResult> {
		throw new Error("Method not implemented.");
	}
	updateRecord(entityLogicalName: string, id: string, data: any): Xrm.Async.PromiseLike<any> {
		throw new Error("Method not implemented.");
	}
}