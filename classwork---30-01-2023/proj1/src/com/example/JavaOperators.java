package com.example;
// 25 page 25
import java.util.Scanner;

public class JavaOperators {
    public static void main(String[] args) {

        Scanner s = new Scanner(System.in);

        System.out.println("please choose a fruit");
        String fruit = s.next();

        switch (fruit) {
            case "apple" :
                System.out.println("apple");
                break;
            case "banana" :
                System.out.println("banana");
                break;
            case "watermelon" :
                System.out.println("watermelon");
                break;
            case "kiwi" :
                System.out.println("kiwi");
                break;
            default:
                System.out.println("Sorry, can’t find a fruit with that name");

        }
    }
}
