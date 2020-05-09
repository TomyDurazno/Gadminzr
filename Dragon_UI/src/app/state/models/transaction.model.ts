export class Transaction {

    static fromRaw(raws: any[]): Transaction[] {
        let result = new Array<Transaction>(); 
        raws.forEach((item) => {
            let id = item["id"] as string;
            let type = parseInt(item["typeId"]) as TransactionType;
            result.push(new Transaction(id, type));
        });
        return result;
    }

    constructor(
        public id: string,
        public type: TransactionType,
    ) { }
}

export enum TransactionType {
    TradeBlotter = 1,
}