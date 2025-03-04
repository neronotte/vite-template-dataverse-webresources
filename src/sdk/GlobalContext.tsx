import LocalGlobalContext from "./LocalGlobalContext";
import LocalXrm from "./LocalXrm";

export default class GlobalContext {

	public static isWired(): boolean {
		var w = window as any;
		return typeof(w.GetGlobalContext) !== 'undefined';
	}

	public static getGlobalContext(): Xrm.GlobalContext{
		var w = window as any;
		if (typeof(w.GetGlobalContext) !== 'undefined') {
			return w.GetGlobalContext();
		}

		return new LocalGlobalContext();
	}

	public static getXrm() : Xrm.XrmStatic {
		var w = window as any;
		if (typeof(w.Xrm) !== 'undefined') {
			return w.Xrm;
		}

		return new LocalXrm();
	}
}