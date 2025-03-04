import LocalLookupValue from "./LocalLookupValue";

export default class LocalOrganizationSettings implements Xrm.OrganizationSettings {
	baseCurrency: Xrm.LookupValue;
	baseCurrencyId: string;
	defaultCountryCode: string;
	isAutoSaveEnabled: boolean;
	languageId: number;
	organizationId: string;
	uniqueName: string;
	useSkypeProtocol: boolean;
	organizationGeo: string;

	constructor() {
		this.baseCurrency = new LocalLookupValue("transactioncurrency", "00000000-0000-0000-0000-000000000000", "EUR");
		this.baseCurrencyId = this.baseCurrency.id;
		this.defaultCountryCode = "IT";
		this.isAutoSaveEnabled = true;
		this.languageId = 1033; // English, 1040 for Italian
		this.organizationId = "00000000-0000-0000-0000-000000000000";
		this.uniqueName = "test";
		this.useSkypeProtocol = false;
		this.organizationGeo = "EMEA";
	}
}