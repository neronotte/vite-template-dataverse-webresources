import LocalGlobalContext from "./LocalGlobalContext";
import LocalPageContext from "./LocalPageContext";

export default class LocalUtility implements Xrm.Utility {
	closeProgressIndicator(): void {
	}
	getAllowedStatusTransitions(entityName: string, stateCode: number): PromiseLike<number[]> {
		throw new Error("Method not implemented.");
	}
	getEntityMetadata(entityName: string, attributes?: string[] | undefined): Xrm.Async.PromiseLike<Xrm.Metadata.EntityMetadata> {
		throw new Error("Method not implemented.");
	}
	getGlobalContext(): Xrm.GlobalContext {
		return new LocalGlobalContext();
	}
	getLearningPathAttributeName(): string {
		throw new Error("Method not implemented.");
	}
	getPageContext(): Xrm.PageContext {
		return new LocalPageContext();
	}
	getResourceString(webResourceName: string, key: string): string {
		throw new Error("Method not implemented.");
	}
	invokeProcessAction(name: string, parameters: Xrm.Collection.Dictionary<any>): Xrm.Async.PromiseLike<any> {
		throw new Error("Method not implemented.");
	}
	lookupObjects(lookupOptions: Xrm.LookupOptions): Xrm.Async.PromiseLike<Xrm.LookupValue[]> {
		throw new Error("Method not implemented.");
	}
	refreshParentGrid(lookupOptions: Xrm.LookupValue): void {
	}
	showProgressIndicator(message: string): void {
	}
	alertDialog(message: string, onCloseCallback: () => void): void {
	}
	confirmDialog(message: string, yesCloseCallback: () => void, noCloseCallback: () => void): void {
	}
	isActivityType(entityType: string): boolean {
		return false;
	}
	openQuickCreate(entityLogicalName: string, createFromEntity?: Xrm.LookupValue | undefined, parameters?: Xrm.Utility.OpenParameters | undefined): Xrm.Async.PromiseLike<Xrm.Async.OpenQuickCreateSuccessCallbackObject> {
		throw new Error("Method not implemented.");
	}
	openEntityForm(name: string, id?: string | undefined, parameters?: Xrm.Utility.FormOpenParameters | undefined, windowOptions?: Xrm.Utility.WindowOptions | undefined): void {
		throw new Error("Method not implemented.");
	}
	openWebResource(webResourceName: string, webResourceData?: string | undefined, width?: number | undefined, height?: number | undefined): Window {
		throw new Error("Method not implemented.");
	}
}