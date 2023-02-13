package com.example;

public class Dog {
    //data
    public String name;
    public String color;

    public void bark(){
        System.out.println("haw haw...");
    }

    public void printAllData() {
        System.out.format("%s is %s ", this.name, this.color);
        // { ... }
    }
}
