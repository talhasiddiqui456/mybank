// src/Customer.ts

export class Customer {
    private name: string;
    private customerId: number;
    private static idCounter: number = 1;

    constructor(name: string) {
        this.name = name;
        this.customerId = Customer.idCounter++;
    }

    public getName(): string {
        return this.name;
    }

    public getCustomerId(): number {
        return this.customerId;
    }
}
