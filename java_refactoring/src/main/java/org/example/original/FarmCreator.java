package org.example.original;

public class FarmCreator {
    public double totalValue = 0.0; // shouldnt be public (encapsulation)
    public String farm = "";
    public int addLandCount = 100; // should be static/final constant
    public int numCows = 0;
    public int numFish = 0;
    public int numCrops = 0;

    //farmName should be passed in a constructor
    public void createLand(String farmName, String farmType){
        System.out.println("Creating land for " + farmName);
        int valueToAdd = 0;
        if(farmType == "Cattle") {  // should use .equals method
            valueToAdd += 5000;
            int count = this.addLandCount;
            while(count > 0){ // should be for loop
                farm += "cow cow cow"; //stringbuilder should be used
                System.out.println("adding some cows"); // adding farmName to the log would make the log more informative
                numCows += 4;
                count--;
            }
        } else if(farmType == "Fish"){
            valueToAdd += 2000;
            int count = this.addLandCount;
            while(count > 0){ // should be for loop
                farm += "fish"; //stringbuilder should be used
                System.out.println("adding some cows");
                numFish += 1;
                count--;
            }
        } else if(farmType == "Crops"){
            valueToAdd += 1000;
            int count = this.addLandCount;
            while(count > 0){ // should be for loop
                farm += "crops"; //stringbuilder should be used
                System.out.println("adding some crops");
                numCrops += 2;
                count--;
            }
        }
        valueToAdd -= 10;
        valueToAdd += valueToAdd * .3;
        totalValue += valueToAdd;
    }

    // farmName isnt used
    public void addPlants(String farmName, String farmType){
        if(farmType == "Cattle") {
            System.out.println("planting grass");
        } else if(farmType == "Fish"){
            System.out.println("planting algae");
        }  else if(farmType == "Crops"){
            System.out.println("Planting clover");
        }
    }

    // docstring comments       ///payers isnt used
    public String payTaxes(int payers){ // should create an object
        // this.totalValue * .1  //unecessary comment
        String taxInfo = "sales: " + this.totalValue * .1 +":"
                    + "property: " + this.totalValue * .2 + ":"
                    + "income: " + this.totalValue * .3 + ":"
                    + "total: " + this.totalValue * .6;

        return taxInfo; // preference to naming variable to be returned

    }


}
