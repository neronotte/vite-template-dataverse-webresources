export default class LocalApp implements Xrm.App {
	addGlobalNotification(notification: Xrm.App.Notification): Xrm.Async.PromiseLike<string> {
		throw new Error("Method not implemented.");
	}
	clearGlobalNotification(uniqueId: string): Xrm.Async.PromiseLike<string> {
		throw new Error("Method not implemented.");
	}
	sidePanes: { 
		state: number; 
		createPane(paneOptions?: Xrm.App.PaneOptions | undefined): Xrm.Async.PromiseLike<Xrm.App.PaneObject>; 
		getAllPanes(): Xrm.App.PaneObject[]; 
		getPane(panelId: string): Xrm.App.PaneObject | undefined; 
		getSelectedPane(): Xrm.App.PaneObject; 
	};

	/**
	 *
	 */
	constructor() {
		this.sidePanes = {
			state: 0,
			createPane(paneOptions?: Xrm.App.PaneOptions | undefined): Xrm.Async.PromiseLike<Xrm.App.PaneObject> {
				throw new Error("Method not implemented.");
			},
			getAllPanes(): Xrm.App.PaneObject[] {
				throw new Error("Method not implemented.");
			},
			getPane(panelId: string): Xrm.App.PaneObject | undefined {
				throw new Error("Method not implemented.");
			},
			getSelectedPane(): Xrm.App.PaneObject {
				throw new Error("Method not implemented.");
			}
		};
	}
}