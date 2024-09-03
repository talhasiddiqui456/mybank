// src/index.ts

import { Bank } from "./Bank";
import { Customer } from "./Customer";

const bank = new Bank();

const customer1 = new Customer("John Doe");
const customer2 = new Customer("Jane Doe");

bank.addCustomer(customer1);
bank.addCustomer(customer2);

const account1 = bank.createAccount(customer1, 1000);
const account2 = bank.createAccount(customer2, 1500);

account1.deposit(500);
account1.withdraw(300);
account2.deposit(700);
account2.withdraw(2000);

console.log(`Account 1 Balance: $${account1.getBalance()}`);
console.log(`Account 2 Balance: $${account2.getBalance()}`);

console.log("Account 1 Transactions:");
account1.getTransactionHistory().forEach(txn => {
    console.log(txn.getTransactionDetails());
});

console.log("Account 2 Transactions:");
account2.getTransactionHistory().forEach(txn => {
    console.log(txn.getTransactionDetails());
});
