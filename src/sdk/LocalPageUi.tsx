import LocalControlsNavigation from "./LocalControlsNavigation";
import LocalFooterSection from "./LocalControlsFooterSection";
import LocalFormSelector from "./LocalControlsFormSelector";
import LocalHeaderSection from "./LocalControlsHeaderSection";
import LocalItemCollection from "./LocalItemCollection";
import LocalProcessControl from "./LocalControlsProcessControl";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default class LocalPageUi implements Xrm.Ui {
	footerSection: Xrm.Controls.FooterSection;
	headerSection: Xrm.Controls.HeaderSection;
	process: Xrm.Controls.ProcessControl;
	controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control>;
	formSelector: Xrm.Controls.FormSelector;
	navigation: Xrm.Controls.Navigation;
	tabs: Xrm.Collection.ItemCollection<Xrm.Controls.Tab>;
	quickForms: Xrm.Collection.ItemCollection<Xrm.Controls.QuickFormControl>;


	constructor() {
		this.footerSection = new LocalFooterSection();
		this.headerSection = new LocalHeaderSection();
		this.process = new LocalProcessControl();
		this.controls = new LocalItemCollection<Xrm.Controls.Control>();
		this.formSelector = new LocalFormSelector();
		this.navigation = new LocalControlsNavigation();
		this.tabs = new LocalItemCollection<Xrm.Controls.Tab>();
		this.quickForms = new LocalItemCollection<Xrm.Controls.QuickFormControl>();
	}


	addOnLoad(handler: Xrm.Events.LoadEventHandler | Xrm.Events.LoadEventHandlerAsync): void {
	}
	setFormNotification(message: string, level: Xrm.FormNotificationLevel, uniqueId: string): boolean {
		return true;
	}
	clearFormNotification(uniqueId: string): boolean {
		return true;
	}
	close(): void {
	}
	getFormType(): XrmEnum.FormType {
		return 1; // Create
	}
	getViewPortHeight(): number {
		const { height } = getWindowDimensions();
		return height;
	}
	getViewPortWidth(): number {
		const { width } = getWindowDimensions();
		return width;
	}
	refreshRibbon(refreshAll?: boolean | undefined): void {
	}
	removeOnLoad(handler: Xrm.Events.LoadEventHandler | Xrm.Events.LoadEventHandlerAsync): void {
	}
	setFormEntityName(name: string): void {
		throw new Error("Method not implemented.");
	}
}