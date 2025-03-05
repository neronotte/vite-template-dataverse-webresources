/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import LocalGlobalContext from "./LocalGlobalContext";
import LocalXrm from "./LocalXrm";

export default class GlobalContext {

	public static isWired(): boolean {
		const w = window as any;
		return typeof(w.GetGlobalContext) !== 'undefined';
	}

	public static getGlobalContext(): Xrm.GlobalContext{
		const w = window as any;
		if (typeof(w.GetGlobalContext) !== 'undefined') {
			return w.GetGlobalContext();
		}

		return new LocalGlobalContext();
	}

	public static getXrm() : Xrm.XrmStatic {
		const w = window as any;
		if (typeof(w.Xrm) !== 'undefined') {
			return w.Xrm;
		}

		return new LocalXrm();
	}
}