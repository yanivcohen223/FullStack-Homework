package com.example;

public class BankAccount {
    private int balance;

    public void deposit(int money)
    {
        if (money >= 0) {
            balance += money;
        }
        else {
            throw new IllegalArgumentException(String.format("cannot deposit negative amount of %d", money));
        }
    }
    public void withdraw(int money)
    {
        if (money >= 0) {
            balance -= money;
        }
        else {
            throw new IllegalArgumentException(String.format("cannot withdraw negative amount of %d", money));
        }
    }

    public int getBalance(){
        return this.balance;
    }
}
