/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import LocalFormContext from "./LocalFormContext";
import LocalXrm from "./LocalXrm";

export default class GlobalContext {

	public static isWired(): boolean {
		const w = window as any;
		return typeof(w.GetGlobalContext) !== 'undefined';
	}

	public static getFormContext(): Xrm.FormContext {
		const w = window as any;
		if (typeof(w._formContext) !== 'undefined') {
			return w._formContext;
		}

		return new LocalFormContext();
	}

	public static getXrm() : Xrm.XrmStatic {
		const w = window as any;
		if (typeof(w.Xrm) !== 'undefined') {
			return w.Xrm;
		}

		return new LocalXrm();
	}
}