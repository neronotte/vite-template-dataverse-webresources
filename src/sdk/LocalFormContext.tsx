/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import LocalPageData from "./LocalPageData";
import LocalPageUi from "./LocalPageUi";

export default class LocalFormContext implements Xrm.FormContext
{
    constructor() {
        this.data = new LocalPageData();
        this.ui = new LocalPageUi();
    }

    data: Xrm.Data;
    ui: Xrm.Ui;

    getAttribute<T extends Xrm.Attributes.Attribute>(attributeNameOrIndex: string | number): T | null;
    getAttribute(attributeNameOrIndex: string | number): Xrm.Attributes.Attribute | null;
    getAttribute(delegateFunction?: Xrm.Collection.MatchingDelegate<Xrm.Attributes.Attribute>): Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> | null;
    getAttribute(attributeNameOrIndexOrDelegate?: string | number | Xrm.Collection.MatchingDelegate<Xrm.Attributes.Attribute>): any {
        return null;
    }

    getControl<T extends Xrm.Controls.Control>(controlNameOrIndexOrDelegate?: string | number | Xrm.Collection.MatchingDelegate<Xrm.Controls.Control>): T | Xrm.Controls.Control | Xrm.Collection.ItemCollection<Xrm.Controls.Control> | null {
        return null;
    }
}