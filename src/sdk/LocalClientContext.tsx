/**
 * Update this class if you want to test/change default behaviors
 */
export default class LocalClientContext implements Xrm.ClientContext {
	getClient(): Xrm.Client {
		return "Web";
	}
	getClientState(): Xrm.ClientState {
		return "Online";
	}
	getFormFactor(): XrmEnum.ClientFormFactor {
		return 1; // Desktop
	}
	isOffline(): boolean {
		return false;
	}
	isNetworkAvailable(): boolean {
		return true;
	}
}