import LocalGlobalContext from "./LocalGlobalContext";
import LocalFormContext from "./LocalFormContext";

export default class LocalPage extends LocalFormContext implements Xrm.Page {
	context: Xrm.GlobalContext;

	constructor() {
		super();
		this.context = new LocalGlobalContext();
	}
}