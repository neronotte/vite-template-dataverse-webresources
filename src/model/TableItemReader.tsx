import GlobalContext from "../sdk/GlobalContext";
import { TableItem } from "./Config";
import { PageItemReader } from "./PageItemReader";

export class TableItemReader implements PageItemReader {
    private item: TableItem;
    private lcid: number;
    private entityMetadata?: Xrm.Metadata.EntityMetadata;

    constructor(item: TableItem, lcid: number, entityMetadata?: Xrm.Metadata.EntityMetadata) {
        this.item = item;
        this.lcid = lcid;
        this.entityMetadata = entityMetadata;
    }

    getTitle(): string {
        const title = this.entityMetadata?.DisplayName?.UserLocalizedLabel.Label;
        return title ?? this.entityMetadata?.LogicalName ?? "[Unknown Table]";
    }

    getDescription(): string {
        const description = this.item.descriptions?.find(d => d.lcid === this.lcid);
        return description ? description.label : this.item.description;
    }

    getImage(): JSX.Element {
        const context = GlobalContext.getGlobalContext();
        if (!context || !this.entityMetadata || !this.entityMetadata.IconVectorName) {
            return <></>;
        }
        const imageUrl = context.getWebResourceUrl(this.entityMetadata.IconVectorName);
        return <object data={imageUrl} type="image/svg+xml" style={{ width: '48px', height: '48px' }}></object>;
    }


    async click(): Promise<void> {
        const xrm = GlobalContext.getXrm();
        if (!xrm) {
            console.error("Xrm context is not available.");
            return;
        }

        try {
            await xrm.Navigation.navigateTo({
                pageType: "entitylist",
                entityName: this.item.name
            });
        } catch (error) {
            console.error("Error opening form:", error);
        }
    }
}