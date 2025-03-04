import LocalDateFormattingInfo from "./LocalDateFormattingInfo";
import LocalItemCollection from "./LocalItemCollection";
import LocalLookupValue from "./LocalLookupValue";


export default class LocalUserSettings implements Xrm.UserSettings {
	dateFormattingInfo: Xrm.DateFormattingInfo;
	defaultDashboardId: string;
	isGuidedHelpEnabled: boolean;
	isHighContrastEnabled: boolean;
	isRTL: boolean;
	languageId: number;
	roles: Xrm.Collection.ItemCollection<Xrm.LookupValue>;
	securityRolePrivileges: string[];
	securityRoles: string[];
	transactionCurrency: Xrm.LookupValue;
	transactionCurrencyId: string;
	userId: string;
	userName: string;

	constructor() {
		this.dateFormattingInfo = new LocalDateFormattingInfo();
		this.defaultDashboardId = "00000000-0000-0000-0000-000000000000";
		this.isGuidedHelpEnabled = false;
		this.isHighContrastEnabled = false;
		this.isRTL = false;
		this.languageId = 1033; // English, 1040 for Italian
		this.roles = new LocalItemCollection<Xrm.LookupValue>();
		this.securityRolePrivileges = [];
		this.securityRoles = [];
		this.transactionCurrency = new LocalLookupValue("transactioncurrency", "00000000-0000-0000-0000-000000000000", "EUR");
		this.transactionCurrencyId = this.transactionCurrency.id;
		this.userId = "00000000-0000-0000-0000-000000000000";
		this.userName = "Test User";
	}

	getTimeZoneOffsetMinutes(): number {
		return -60; // UTC+1
	}
}