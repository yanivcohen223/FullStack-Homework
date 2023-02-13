package com.example;

public class Main {
    public static void main(String[] args) {

        System.out.println("Hello world!");

        Car LandRover = new Car();
        LandRover.type = "Discovery";
        LandRover.model= "Sport";
        LandRover.color = "Black";
        LandRover.speed = 120;

        LandRover.printAllData();
        System.out.println("");
        LandRover.fuelUp();

        System.out.println("");
        Dog Rexi = new Dog();
        Rexi.name = "Rexi";
        Rexi.color = "Brown";

        Rexi.printAllData();
        System.out.println("");
        Rexi.bark();

        Dog Max = new Dog();
        Max.name = "Max";
        Max.color = "White";

        Max.printAllData();
        System.out.println("");
        Max.bark();


        Apple apple = new Apple();
        apple.name = "apple";
        apple.eatTheFruit();
        apple.color = "Red";
        apple.makingAppleJuice();

        BankAccount myAccount = new BankAccount();
        myAccount.deposit(5000);
        System.out.println(myAccount.getBalance());
        myAccount.withdraw(2500);
        System.out.println(myAccount.getBalance());
    }
}