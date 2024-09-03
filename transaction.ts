// src/Transaction.ts

export class Transaction {
    private type: string;
    private amount: number;
    private date: Date;

    constructor(type: string, amount: number) {
        this.type = type;
        this.amount = amount;
        this.date = new Date();
    }

    public getTransactionDetails(): string {
        return `${this.date.toISOString()} - ${this.type}: $${this.amount}`;
    }
}
