package com.example;

import java.util.Arrays;
//28 page 7
public class BreakAndContinue {
    public static void main(String[] args) {
        String[] usable_elements = {"Computer","Phone","Tv","Kitchen","Car"};
        String[] food_str = {"Pizza","Hamburger","Toast","Cornflakes","Staek"};


        /*for (int i =0; i < usable_elements.length; i++) {
            int rand_num = (int)(Math.random()* (i+1));
            String current_elem = usable_elements[i];
            usable_elements[i] = usable_elements[rand_num];
            usable_elements[rand_num] = current_elem;
        }*/
        //System.out.println(Arrays.toString(usable_elements));

        /*for (int i =0; i < food_str.length; i++) {
            int rand_num = (int)(Math.random()* (i+1));
            String current_elem = food_str[i];
            food_str[i] = food_str[rand_num];
            food_str[rand_num] = current_elem;
        }
        System.out.println(Arrays.toString(food_str));*/


        /*for (String i : usable_elements) {
            String chosen_word = "Tv";
            if ( i == chosen_word && i == usable_elements[0]) {
                System.out.format("The iteration was stop because i chose th \n" +
                        "element: %s, and it was iterated", chosen_word );
                break;
            }
            System.out.println(i);
        }*/

        for (String i : usable_elements) {
            String chosen_word = "Computer";
            if ( i == chosen_word && i == usable_elements[0]) {
                continue;
            }
            System.out.println(i);
        }
    }
}
