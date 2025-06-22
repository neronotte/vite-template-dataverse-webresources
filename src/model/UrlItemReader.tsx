import GlobalContext from "../sdk/GlobalContext";
import { UrlItem } from "./Config";
import { PageItemReader } from "./PageItemReader";

export class UrlItemReader implements PageItemReader {
    private item: UrlItem;
    private lcid: number;

    constructor(item: UrlItem, lcid: number) {
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
            <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" fill="none" stroke="#424242" stroke-width="2" />
                <path d="M24 4 Q24 24 24 44" fill="none" stroke="#424242" stroke-width="1.5" />
                <path d="M24 4 Q16 24 24 44" fill="none" stroke="#424242" stroke-width="1.5" />
                <path d="M24 4 Q32 24 24 44" fill="none" stroke="#424242" stroke-width="1.5" />
                <path d="M4 24 Q24 16 44 24" fill="none" stroke="#424242" stroke-width="1.5" />
                <path d="M4 24 Q24 32 44 24" fill="none" stroke="#424242" stroke-width="1.5" />
                <path d="M6 16 Q24 12 42 16" fill="none" stroke="#424242" stroke-width="1" />
                <path d="M6 32 Q24 36 42 32" fill="none" stroke="#424242" stroke-width="1" />
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
            await xrm.Navigation.openUrl(this.item.url);
        } catch (error) {
            console.error("Error opening URL:", error);
        }
    }
}