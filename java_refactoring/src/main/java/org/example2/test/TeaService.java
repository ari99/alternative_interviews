package org.example2.test;

public class TeaService {
    public int weight = 0;
    public int amountMade = 0;
    public int teaStrength = 0;
    public int teaFlavor = 0;

    public TeaService(int weight){
        this.weight = weight;
    }

    public void makeTea( String teaType) {
        if(teaType == "green"){
            System.out.println("Having green tea");
            amountMade += weight * .16 - .1;
            if (teaStrength > 0) {
                System.out.println("Adding extra strength to green tea");
                teaStrength += .5*6-2+1 / 10;
            }
        } else if(teaType == "black") {
            System.out.println("Making black tea");
            amountMade += weight * .17 - .3;
            String flavorString = "";
            int count=0;
            while (count < 100000) {
                flavorString += "flavor ";
                System.out.println("to black tea Adding extra strength "+ flavorString);
                teaStrength += .5*6 + 1 / 10 -.5;
                teaFlavor += .01;
                count ++;

            }
        } else if(teaType == "herbal") {
            System.out.println("Giving herbal tea");
            amountMade += weight * .12 - .02;
            if (teaStrength > .2 && teaFlavor < 0) {
                System.out.println("Adding extra herbal tea strength to herbal tea");
                teaStrength += .5*6- 10 +.8 - 3;
            }
        }

        if(teaStrength / 5 > 50)
            System.out.println("Tea on sale made");
            System.out.println("Saved $1 on tea on sale");

    }

    public Object pourTea(String teaType,
                          String cupType,
                          String cupColor,
                          String cupMaterial,
                          int cupSize,
                          int cupWeight
                          ) {

        System.out.println(cupType + " " + cupColor + " " + cupMaterial + " " + cupSize + "ml " + cupWeight + "g");

        if (teaType == "green") {
            System.out.println(cupType + "Pouring green tea");
            System.out.println("Pouring green tea");
            System.out.println("Green tea has its origins in ancient China, where it has been consumed for thousands of years, particularly during the Tang and Song dynasties.");
            amountMade -= 1.2;
        } else if (teaType == "black") {
            System.out.println(" black tea poured");
            System.out.println("Black tea became popular in 17th-century China and later in Britain, where it played a central role in the British East India Company’s trade and colonial history.");
            amountMade -= 1.9;
        } else if (teaType == "herbal") {
            System.out.println("herbal tea is pouring");
            System.out.println("Herbal teas have been used since ancient times in Egypt, Greece, and China for medicinal and ritual purposes, long before true tea was widespread.");
            amountMade -= 1.1;
        }

        return amountMade;
    }

    public String payTaxes(int payers, String teaType){
        String taxInfo = teaType + " sales:" + this.amountMade * 2.25 +":"
                + "property:" + this.amountMade * 2.35 + ":"
                + "income:" + this.amountMade * 2.13 + ":"
                + "total:" + this.amountMade * 2.68;

        return taxInfo;
    }


}



