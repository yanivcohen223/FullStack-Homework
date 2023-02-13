package com.example;
// 26 page 22
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class JavaMath {
    public static void main(String[] args){



        int num1 = (int) (Math.random()*5)+1;
        int num2 = (int) (Math.random()*5)+1;

        if (num1 == num2) {
            System.out.format("The numbers are equals with value: %o", num1);
        }
        else {
            System.out.format("The numbers are not equals, first number value is: %o \n" +
                    ", and second number value is: %o", num1, num2);
        }

        System.out.println("\n");
        System.out.println("=====================================");
        LocalDateTime Date = LocalDateTime.now();
        DateTimeFormatter DateFormat = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

        String myDate = Date.format(DateFormat);
        System.out.println(myDate);
    }
}
