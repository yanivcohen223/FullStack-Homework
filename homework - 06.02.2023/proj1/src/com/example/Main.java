package com.example;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        Circle circleA = new Circle();
        circleA.radius = 5.4;
        circleA.printSize();

        System.out.println("");

        Circle circleB = new Circle();
        circleB.radius = 8.7;
        circleB.printSize();

        System.out.println("\n");

        Person personA = new Person();
        personA.name = "Yaniv";
        personA.id = "123456789";
        personA.yearOfBirth = 2000;
        personA.address = "Kibbutz Sufa";
        personA.sayHello();
        System.out.println("");
        personA.printHowOldAmI();
        System.out.println("");
        personA.printAddress();

    }
}
//EX1
/*class is a template used to create objects and to define object data types and methods.
 Classes are categories, and objects are items within each category.
 classes can help us gather all the properties and object in our program
 into a single template.*/


//EX2
/*instance are variables that belong to an object and can be accessed from any function.
 Instances of a class have the same set of attributes.
 but each instance is different because of what is inside.*/

//EX3
/*by adding new before the object we want to add
* and then simply adding the value we want the object to have by
*  the properties we created in our class
* for example:
* Dog Max = new Dog();
* Max.name = "Max";
* Max.color = "White";*/