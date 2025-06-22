import GlobalContext from "../sdk/GlobalContext";
import { Config, TableItem, UrlItem, WebResourceItem } from "./Config";
import { InvalidReader } from "./InvalidItemReader";
import { PageItemReader } from "./PageItemReader";
import { TableItemReader } from "./TableItemReader";
import { UrlItemReader } from "./UrlItemReader";
import { WebResourceItemReader } from "./WebResourceItemReader";

export default class ConfigReader {
    config: Config;
    lcid: number;
    constructor(config: Config, lcid: number) {
        this.config = config;
        this.lcid = lcid;
    }

    getTitle(): string {
        const title = this.config.titles?.find(t => t.lcid === this.lcid);
        return title ? title.label : this.config.title;
    }

    getDescription(): string {
        const description = this.config.descriptions?.find(d => d.lcid === this.lcid);
        return description ? description.label : this.config.description;
    }


    itemCount(): number {
        return this.config.items.length;
    }

    initializeItems(callback: (item: PageItemReader, index: number) => void): void {

        this.config.items.forEach((item, index) => {
            if (item.type === "Table") {
                this.initializeTable(item as TableItem, index, callback);
                return;
            }

            if (item.type === "WebResource") {
                // Initialize WebResourceItem specific logic here
                this.initializeWebResource(item as WebResourceItem, index, callback);
            }

            if (item.type === "Url") {
                // Initialize UrlItem specific logic here
                this.initializeUrl(item as UrlItem, index, callback);
            }
        });
    }


    private async initializeTable(item: TableItem, index: number, callback: (item: PageItemReader, index: number) => void): Promise<void> {

        try {
            // Initialize TableItem specific logic here
            const xrm = GlobalContext.getXrm();
            const context = GlobalContext.getGlobalContext();

            const entityMetadata = await xrm.Utility.getEntityMetadata(item.name);
            if (!entityMetadata) {
                console.error(`Entity metadata for ${item.name} not found.`);
                return;
            }

            let privilegeName = `prvReadActivity`;
            if (!entityMetadata.IsActivity) {
                privilegeName = `prvRead${entityMetadata.LogicalName}`;
            }

            const hasAccess = context.userSettings.securityRolePrivileges.find(privilege => privilege === privilegeName);
            if (!hasAccess) {
                console.warn(`User does not have access to read ${entityMetadata.LogicalName}.`);
                callback(new InvalidReader(), index);
                return;
            }

            const reader = new TableItemReader(item, this.lcid, entityMetadata);
            callback(reader, index);

        } catch (err) {
            console.error("Error initializing TableItem:", err);
            return;
        }
    }

    private async initializeWebResource(item: WebResourceItem, index: number, callback: (item: PageItemReader, index: number) => void): Promise<void> {
        const reader = new WebResourceItemReader(item, this.lcid);
        callback(reader, index);
    }

    private async initializeUrl(item: UrlItem, index: number, callback: (item: PageItemReader, index: number) => void): Promise<void> {
        const reader = new UrlItemReader(item, this.lcid);
        callback(reader, index);
    }
}









