package com.example;

import java.time.Year;
public class Person {
    public String name;
    public  String id;
    public int yearOfBirth;
    public String address;

    public void sayHello(){
        System.out.format("Hello %s", this.name);
    }

    public void printHowOldAmI() {
        int personYearOfBirth = this.yearOfBirth;
        int year = Year.now().getValue();
        int myAge = year - personYearOfBirth;
        System.out.format("My age is %d", myAge);
    }
    public void printAddress() {
        System.out.format("I live %s", this.address);
    }
}
