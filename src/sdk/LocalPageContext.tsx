import LocalEntityFormPageContext from "./LocalEntityFormPageContext";

export default class LocalPageContext implements Xrm.PageContext {
	input: Xrm.EntityFormPageContext | Xrm.EntityListPageContext;
	
	constructor() {
		this.input = new LocalEntityFormPageContext();
	}
}