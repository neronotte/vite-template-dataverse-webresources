import LocalClientContext from "./LocalClientContext";
import LocalOrganizationSettings from "./LocalOrganizationSettings";
import LocalUserSettings from "./LocalUserSettings";



/**
 * Update this class if you want to test/change default behaviors
 */
export default class LocalGlobalContext implements Xrm.GlobalContext {
	client: Xrm.ClientContext;
	organizationSettings: Xrm.OrganizationSettings;
	userSettings: Xrm.UserSettings;

	constructor() {
		this.client = new LocalClientContext();
		this.organizationSettings = new LocalOrganizationSettings();
		this.userSettings = new LocalUserSettings();
	}


	getAdvancedConfigSetting(setting: "MaxChildIncidentNumber" | "MaxIncidentMergeNumber"): number {
		return 10;
	}
	getClientUrl(): string {
		return "http://localhost:3000";
	}
	getCurrentAppName(): Xrm.Async.PromiseLike<string> {
		throw new Error("Method not implemented.");
	}
	getCurrentAppProperties(): Xrm.Async.PromiseLike<Xrm.AppProperties> {
		throw new Error("Method not implemented.");
	}
	getCurrentAppUrl(): string {
		return "http://localhost:3000";
	}
	getCurrentTheme(): Xrm.Theme {
		return "default";
	}
	getIsAutoSaveEnabled(): boolean {
		return this.organizationSettings.isAutoSaveEnabled;
	}
	getOrgLcid(): number {
		return this.organizationSettings.languageId;
	}
	getOrgUniqueName(): string {
		return this.organizationSettings.uniqueName;
	}
	getQueryStringParameters(): { [index: string]: any; } {
		return {};
	}
	getTimeZoneOffsetMinutes(): number {
		return this.userSettings.getTimeZoneOffsetMinutes();
	}
	getUserId(): string {
		return this.userSettings.userId;
	}
	getUserLcid(): number {
		return this.userSettings.languageId;
	}
	getUserName(): string {
		return this.userSettings.userName;
	}
	getUserRoles(): string[] {
		return [];
	}
	getVersion(): string {
		throw new Error("Method not implemented.");
	}
	isOnPremise(): boolean {
		return false;
	}
	prependOrgName(sPath: string): string {
		return "/" + sPath;
	}
	getCurrentAppSetting(settingName: string): string | number | boolean {
		throw new Error("Method not implemented.");
	}
	getWebResourceUrl(webResourceName: string): string {
		throw new Error("Method not implemented.");
	}
}