package com.example;
//26 page 11
import java.util.Arrays;

public class JavaString {
    public static void main(String[] args) {
        String str = "yaniv.cohen";

        String[] strPart = str.split("[.]",0);
        String fName = strPart[0];
        String lName = strPart[1];

        String sentence = String.format("Welcome to the course: your first name is: %s , \n and your last name is: " +
        "%s ", fName, lName);

        System.out.println(sentence);
        
        int index_of_lname = sentence.indexOf(lName);
        System.out.println(index_of_lname);

        int index_of_fname = sentence.indexOf(fName);
        System.out.println(index_of_fname);

        boolean check_for_lname = sentence.contains(lName);
        System.out.println(check_for_lname);

        boolean check_for_fname = sentence.contains(fName);
        System.out.println(check_for_fname);
    }}
