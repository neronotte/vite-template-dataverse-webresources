

export default class LocalItemCollection<T> implements Xrm.Collection.ItemCollection<T> {
	forEach(delegate: Xrm.Collection.IterativeDelegate<T>): void {
		throw new Error("Method not implemented.");
	}
	get(delegate: Xrm.Collection.MatchingDelegate<T>): T[];
	get(itemNumber: number): T;
	get<TSubType extends T>(itemNumber: number): TSubType;
	get(itemName: string): T;
	get<TSubType extends T>(attributeName: string): TSubType;
	get(): T[];
	get<TSubType extends T>(attributeName?: unknown): T | TSubType | TSubType | T[] {
		throw new Error("Method not implemented.");
	}
	getLength(): number {
		throw new Error("Method not implemented.");
	}
}