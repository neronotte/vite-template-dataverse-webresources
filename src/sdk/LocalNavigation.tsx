export default class LocalNavigation implements Xrm.Navigation {
	navigateTo(pageInput: Xrm.Navigation.PageInputEntityRecord | Xrm.Navigation.PageInputEntityList | Xrm.Navigation.CustomPage | Xrm.Navigation.PageInputHtmlWebResource | Xrm.Navigation.Dashboard, navigationOptions?: Xrm.Navigation.NavigationOptions | undefined): Xrm.Async.PromiseLike<any> {
		throw new Error("Method not implemented.");
	}
	openAlertDialog(alertStrings: Xrm.Navigation.AlertStrings, alertOptions?: Xrm.Navigation.DialogSizeOptions | undefined): Xrm.Async.PromiseLike<any> {
		throw new Error("Method not implemented.");
	}
	openConfirmDialog(confirmStrings: Xrm.Navigation.ConfirmStrings, confirmOptions?: Xrm.Navigation.DialogSizeOptions | undefined): Xrm.Async.PromiseLike<Xrm.Navigation.ConfirmResult> {
		throw new Error("Method not implemented.");
	}
	openErrorDialog(errorOptions: Xrm.Navigation.ErrorDialogOptions): Xrm.Async.PromiseLike<any> {
		throw new Error("Method not implemented.");
	}
	openFile(file: Xrm.Navigation.FileDetails, openFileOptions?: Xrm.Navigation.OpenFileOptions | undefined): void {
		throw new Error("Method not implemented.");
	}
	openForm(entityFormOptions: Xrm.Navigation.EntityFormOptions, formParameters?: Xrm.Utility.OpenParameters | undefined): Xrm.Async.PromiseLike<Xrm.Navigation.OpenFormResult> {
		throw new Error("Method not implemented.");
	}
	openUrl(url: string, openUrlOptions?: Xrm.Navigation.DialogSizeOptions | undefined): void {
		throw new Error("Method not implemented.");
	}
	openWebResource(webResourceName: string, windowOptions?: Xrm.Navigation.OpenWebresourceOptions | undefined, data?: string | undefined): void {
		throw new Error("Method not implemented.");
	}

}