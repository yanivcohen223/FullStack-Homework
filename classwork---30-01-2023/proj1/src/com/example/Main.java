package com.example;


import java.util.Arrays;
import java.util.Scanner;
import java.lang.Math;

public class Main {
    public static void main(String[] args) {

        System.out.println("Hello world!");

        Scanner s = new Scanner(System.in);

        //EX1.1
        /*
        String str = s.next();
        String str1 = str.toUpperCase();

        if(str.equals(str1)) {
            System.out.println("Capital");
        }
        else {
            System.out.println("Lower");
        }*/

        //EX1.2
        //String strA = s.next();
        //String strB = s.next();
        //System.out.println(strFunc(strA,strB));


        //EX1.2
        /*public static String strFunc(String s1, String s2) {
        if (s1.length() > s2.length()) {
            return s1;
        }
        else {
            return s2;
        }
        }*/

        //EX2
        //int int1 = s.nextInt();
        //System.out.println(intFunc(int1));

        //EX3
        int[] array1 = {82, 63, 25};
        int[] array2 = {13, 94, 46};

        sumFunc(array1, array2);
    }
    //EX2
      /*public static boolean intFunc(int num) {
          int[] arr = new int[10];
          for (int i = 0; i < arr.length; i++) {
              arr[i] = (int)(Math.random()*50)+1;
          }
          System.out.println(Arrays.toString(arr));

          for (int j : arr) {
              if (num == j) {
                  return true;
              }
          }
          return false;
      }*/

    //EX3
    public static void sumFunc(int[] arr1, int[] arr2) {
        int sum1 = 0;
        int sum2 = 0;

        for (int i: arr1) {
            sum1+= i;
        }
        for (int x: arr2) {
            sum2+= x;
        }

        if (sum1 > sum2) {
            System.out.format("%s is bigger %s", Arrays.toString(arr1), sum1);
        }
        else {
            System.out.format("%s is bigger %s", Arrays.toString(arr2), sum2);
        }
    }
}