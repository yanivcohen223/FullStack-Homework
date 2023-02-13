package com.example;
//29 pages 21-22
public class JavaExceptions {
    public static void main (String[] args) {
        fiveYearsSalary("yaniv", "chef");
    }

    public static int setUpCandidates(String job)
    {
        switch (job) {
            case "fullstack":
                return 22000;

            case "backend":
                return 20000;

            case "frontend":
                return 18000;

            default:
                throw new IllegalArgumentException("The provided job title is unsupported");
        }
    }

    public static void fiveYearsSalary(String name, String job){

        try {
        int salary = setUpCandidates(job);
        int fiveYearsSal = salary*12*5;
        switch (job) {
            case "fullstack":

            case "backend":

            case "frontend":
                System.out.format("Hello %s, with the job \n" +
                        "title %s you will earn in 5 years: %d shekels \n" +
                        "your monthly income is %d", name, job, fiveYearsSal, salary);
                break;
        }}
        catch (Exception e){
                System.out.format("Hello %s, the job title you \n" +
                                  "provide %s is unknown to us, so we can’t calculate your salary in 5 years", name, job);
        }
    }
}
