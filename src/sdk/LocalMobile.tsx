import LocalMobileOffline from "./LocalMobileOffiline";

export default class LocalMobile implements Xrm.Mobile {
	offline: Xrm.MobileOffline;

	constructor() {
		this.offline = new LocalMobileOffline();
	}
}