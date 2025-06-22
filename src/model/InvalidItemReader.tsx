import { PageItemReader } from "./PageItemReader";

export class InvalidReader implements PageItemReader {

    getTitle(): string {
        return "[Invalid Item]";
    }

    getDescription(): string {
        return "[Invalid Item]";
    }

    getImage(): JSX.Element {
        return <></>;
    }

    async click(): Promise<void> {
        console.error("Invalid item clicked");
    }
}