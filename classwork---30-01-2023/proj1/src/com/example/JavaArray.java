package com.example;
//27 page 10
import java.util.Arrays;

public class JavaArray {
    public static void main(String[] args) {

        String [] str = {"mouse", "cat", "dog", "owl", "shark"};
        System.out.println(Arrays.toString(str));

        int randS = (int)(Math.random()* str.length);
        str[randS] = "lion";
        System.out.println(Arrays.toString(str));

        System.out.println("================================");

        int [] arrI = {12, 23, 34, 45, 56};
        System.out.println(Arrays.toString(arrI));

        int randI = (int)(Math.random()* arrI.length);
        arrI[randI] = (int)(Math.random()* arrI.length);
        System.out.println(Arrays.toString(arrI));

        int[][] multiArr = {{1,2,3,4,5},{6,7,8,9,10}};

        for (int i = 0; i<multiArr.length; i++){
            System.out.println(multiArr[i][0]);
        }


    }
}
