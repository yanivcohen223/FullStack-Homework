package com.example;

import java.util.Objects;
import java.util.Scanner;
import java.time.LocalDate;
//28 page 21-22
public class javaMethod {
    public static void paying_calc(String chosen_prod) {
        Scanner s = new Scanner(System.in);

        int paying_bill = 0;
        if (Objects.equals(chosen_prod, "computer screen mouse printer keyboard")) {
            paying_bill = 4800;
        }
        else if (Objects.equals(chosen_prod, "computer screen mouse printer")) {
            paying_bill = 4450;
        }
        else if (Objects.equals(chosen_prod, "computer screen mouse")) {
            paying_bill =  3950;
        } else if (Objects.equals(chosen_prod, "computer screen")) {
            paying_bill = 3700;
        } else if (Objects.equals(chosen_prod, "computer")) {
            paying_bill = 2500;
        }

        System.out.println("please choose a method of paying");
        String costumer_ = s.nextLine();
        paying_method(costumer_, paying_bill);
    }

    public static void paying_method(String how_to_pay, int paying_amount) {
        Scanner s = new Scanner(System.in);

        switch (how_to_pay) {
            case "cash":
                System.out.format("Please give %s shekels to the cashier.", paying_amount);
                break;
            case "check":
                System.out.format("Please write a check for this amount %s and \n" +
                        "give it to the cachier.", paying_amount);
                break;
            case "credit card":
                System.out.format(" please enter your card ($$$$-$$$$-$$$$-$$$$) \n");
                String cardNum = s.nextLine();
                System.out.format("your card: %s \n", cardNum);

                System.out.format("please enter date validation (MM/YYYY) \n");
                String dateCard = s.nextLine();
                int year = LocalDate.now().getYear();
                if (year > Integer.parseInt((dateCard.split("/")[1]))) {
                    System.out.println("Your credit card is not valid, please try to pay again with a \n" +
                            "different method");
                }
                else {
                    int month = LocalDate.EPOCH.getMonthValue();
                    if (month > Integer.parseInt((dateCard.split("/")[0]))) {
                        System.out.println("Your credit card is not valid, please try to pay again with a different method");
                    } else {
                        System.out.format("Your credit card was charged with %d shekels, thanks for buying!", paying_amount);
                    }
                }
                    default:
                        System.out.println("please choose a paying method");

        }
    }
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.println("please choose products? \n" +
                "computer , screen, mouse, printer, keyboard");

        String costumer_prod = s.nextLine();
        System.out.format("you chose %s ! \n",costumer_prod);
        paying_calc(costumer_prod);

    }
}
