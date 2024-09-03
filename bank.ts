
// src/Bank.ts

import { Account } from "./Account";
import { Customer } from "./Customer";

export class Bank {
    private customers: Customer[] = [];
    private accounts: Account[] = [];

    public addCustomer(customer: Customer): void {
        this.customers.push(customer);
    }

    public createAccount(customer: Customer, initialDeposit: number): Account {
        const account = new Account(customer, initialDeposit);
        this.accounts.push(account);
        return account;
    }

    public getAccount(accountNumber: number): Account | undefined {
        return this.accounts.find(acc => acc.getAccountNumber() === accountNumber);
    }
}
