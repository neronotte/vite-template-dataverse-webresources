import LocalApp from "./LocalApp";
import LocalDevice from "./LocalDevice";
import LocalEncoding from "./LocalEncoding";
import LocalMobile from "./LocalMobile";
import LocalNavigation from "./LocalNavigation";
import LocalPage from "./LocalPage";
import LocalPanel from "./LocalPanel";
import LocalUtility from "./LocalUtility";
import LocalWebApi from "./LocalWebApi";

export default class LocalXrm implements Xrm.XrmStatic {
	Page: Xrm.Page;
	Navigation: Xrm.Navigation;
	Utility: Xrm.Utility;
	Mobile: Xrm.Mobile;
	Panel: Xrm.Panel;
	WebApi: Xrm.WebApi;
	Device: Xrm.Device;
	Encoding: Xrm.Encoding;
	App: Xrm.App;

	constructor() {
		this.Page = new LocalPage();
		this.Navigation = new LocalNavigation();
		this.Utility = new LocalUtility();
		this.Mobile = new LocalMobile();
		this.Panel = new LocalPanel();
		this.WebApi = new LocalWebApi();
		this.Device = new LocalDevice();
		this.Encoding = new LocalEncoding();
		this.App = new LocalApp();		
	}
}