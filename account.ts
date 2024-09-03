// src/Account.ts

import { Customer } from "./Customer";
import { Transaction } from "./Transaction";

export class Account {
    private static accountNumberCounter: number = 1;
    private accountNumber: number;
    private balance: number;
    private customer: Customer;
    private transactions: Transaction[] = [];

    constructor(customer: Customer, initialDeposit: number) {
        this.accountNumber = Account.accountNumberCounter++;
        this.balance = initialDeposit;
        this.customer = customer;
        this.transactions.push(new Transaction("Deposit", initialDeposit));
    }

    public deposit(amount: number): void {
        this.balance += amount;
        this.transactions.push(new Transaction("Deposit", amount));
    }

    public withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            this.transactions.push(new Transaction("Withdraw", amount));
        }
    }

    public getBalance(): number {
        return this.balance;
    }

    public getAccountNumber(): number {
        return this.accountNumber;
    }

    public getTransactionHistory(): Transaction[] {
        return this.transactions;
    }
}
