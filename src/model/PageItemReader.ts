
export interface PageItemReader {
    getTitle(): string;
    getDescription(): string;
    getImage(): JSX.Element;
    click(): Promise<void>;
}