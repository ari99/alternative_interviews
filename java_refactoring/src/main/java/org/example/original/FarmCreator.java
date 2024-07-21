package org.example.original;

public class FarmCreator {
    public double totalValue = 0.0;
    public String farm = "";
    public int addLandCount = 100;
    public int numCows = 0;
    public int numFish = 0;
    public int numCrops = 0;

    public void createLand(String farmName, String farmType){
        System.out.println("Creating land for " + farmName);
        int valueToAdd = 0;
        if(farmType == "Cattle") {
            valueToAdd += 5000;
            int count = this.addLandCount;
            while(count > 0){
                farm += "cow cow cow";
                System.out.println("adding some cows");
                numCows += 4;
                count--;
            }
        } else if(farmType == "Fish"){
            valueToAdd += 2000;
            int count = this.addLandCount;
            while(count > 0){
                farm += "fish";
                System.out.println("adding some cows");
                numFish += 1;
                count--;
            }
        } else if(farmType == "Crops"){
            valueToAdd += 1000;
            int count = this.addLandCount;
            while(count > 0){
                farm += "crops";
                System.out.println("adding some crops");
                numCrops += 2;
                count--;
            }
        }
        valueToAdd -= 10;
        valueToAdd += valueToAdd * .3;
        totalValue += valueToAdd;
    }

    public void addPlants(String farmName, String farmType){
        if(farmType == "Cattle") {
            System.out.println("planting grass");
        } else if(farmType == "Fish"){
            System.out.println("planting algae");
        }  else if(farmType == "Crops"){
            System.out.println("Planting clover");
        }
    }


    public String payTaxes(int payers){
        // this.totalValue * .1
        String taxInfo = "sales: " + this.totalValue * .1 +":"
                    + "property: " + this.totalValue * .2 + ":"
                    + "income: " + this.totalValue * .3 + ":"
                    + "total: " + this.totalValue * .6;

        return taxInfo;

    }


}
