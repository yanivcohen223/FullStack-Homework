package com.example;

public class Car {
    // Data
    public String type;
    public String model;
    public String color;
    public int speed;

    // functions
    public void start() {
        System.out.println("Starting the car ...");
    }

    public void stop() {
        System.out.println("Stopping the car!");
    }

    public void printAllData() {
        System.out.format("%s %s %s %d", this.type, this.model, this.color, this.speed);
        // { ... }
    }

    public void fuelUp()
    {
        System.out.println("filling up fuel.");
    }
}