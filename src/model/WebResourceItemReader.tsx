import GlobalContext from "../sdk/GlobalContext";
import { WebResourceItem } from "./Config";
import { PageItemReader } from "./PageItemReader";

export class WebResourceItemReader implements PageItemReader {
    private item: WebResourceItem;
    private lcid: number;

    constructor(item: WebResourceItem, lcid: number) {
        this.item = item;
        this.lcid = lcid;
    }

    getTitle(): string {
        const title = this.item.titles?.find(t => t.lcid === this.lcid);
        return title ? title.label : this.item.title;
    }

    getDescription(): string {
        const description = this.item.descriptions?.find(d => d.lcid === this.lcid);
        return description ? description.label : this.item.description;
    }

    getImage(): JSX.Element {
        // return an svg icon that represents a URL link
        // generate the svg content in line
        // scale it to be 48x48 pixels
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <path d="M12 4a8 8 0 1 0 8 8h-2a6 6 0 1 1-6-6V4zm-1.5 7.5h3v3h-3v-3zm1.5-7.5C7.48 4 4 7.48 4 12s3.48 8 8 8 8-3.48 8-8-3.48-8-8-8z" />
            </svg>
        );
    }

    async click(): Promise<void> {
        const xrm = GlobalContext.getXrm();
        if (!xrm) {
            console.error("Xrm context is not available.");
            return;
        }

        try {
            await xrm.Navigation.openWebResource(this.item.name);
        } catch (error) {
            console.error("Error opening web resource:", error);
        }
    }
}