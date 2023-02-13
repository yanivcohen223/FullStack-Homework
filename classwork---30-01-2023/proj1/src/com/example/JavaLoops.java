package com.example;
//27 page 23
public class JavaLoops {
    public static void main(String[] args) {

        /*for (int i = 0; i<31; i+=2) {
            System.out.println(i);
        }*/

        /*int x = 0;
        while (x < 31) {
            if (x%2 ==0) {
                System.out.println(x);
                x+=2;
            }
            else {
                x+=2;
            }
        }*/

        int[][] multiArr = {{1,2,3,4,5},{6,7,8,9,10}};

        /*for (int i = 0; i< multiArr.length; i++){
            for (int j = 0; j< multiArr[i].length; j++){
                System.out.println(multiArr[i][j]);
            }
        }*/

        for (int[] a : multiArr) {
            for (int n: a) {
                System.out.println(n);
            }
        }
    }

}
