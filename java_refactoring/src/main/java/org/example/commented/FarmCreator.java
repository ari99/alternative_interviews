package org.example.commented;

public class FarmCreator {
    // This class mixes the shared farm workflow with cattle/fish/crops-specific behavior.
    // Create an abstract FarmCreator base class and concrete farm classes for each farm type.
    public double totalValue = 0.0; // Should be private so callers cannot mutate internal accounting state directly.
    public String farm = "";
    public int addLandCount = 100; // Move this magic number to a private static final constant.
    public int numCows = 0;
    public int numFish = 0;
    public int numCrops = 0;

    // farmName should be passed in a constructor so the object owns its required state.
    public void createLand(String farmName, String farmType){
        System.out.println("Creating land for " + farmName);
        int valueToAdd = 0;
        if(farmType == "Cattle") {  // Use .equals for String comparison and an enum instead of raw strings.
                                    // This branch should move into a concrete CattleFarmCreator implementation.
            valueToAdd += 5000;
            int count = this.addLandCount;
            while(count > 0){ // A for loop would make the iteration bounds and counter update easier to read.
                farm += "cow cow cow"; // Use StringBuilder when repeatedly appending in a loop.
                System.out.println("adding some cows "); // Include farmName in the log so production logs identify the affected farm.
                System.out.println("cow care"); // Include farmName in the log so this message has useful context.
                numCows += 4;
                System.out.println("total cows " + numCows);

                count--;
            }
        } else if(farmType == "Fish"){
            // This branch should move into a concrete FishFarmCreator implementation.
            valueToAdd += 2000;
            int count = this.addLandCount;
            while(count > 0){ // A for loop would be clearer because the loop has a fixed number of iterations.
                farm += "fish"; // Use StringBuilder when repeatedly appending in a loop.
                System.out.println("adding some cows"); // This message says cows even though the branch creates fish.
                numFish += 1;
                count--;
            }
        } else if(farmType == "Crops"){
            // This branch should move into a concrete CropsFarmCreator implementation.
            valueToAdd += 1000;
            int count = this.addLandCount;
            while(count > 0){ // A for loop would be clearer because the loop has a fixed number of iterations.
                farm += "crops"; // Use StringBuilder when repeatedly appending in a loop.
                System.out.println("adding some crops");
                System.out.println("water crops"); // Include farmName in the log so the action can be traced to a specific farm.
                System.out.println("collect seeds"); // Include farmName in the log so the action can be traced to a specific farm.
                numCrops += 2;
                count--;
            }
        }
        valueToAdd -= 10;
        valueToAdd += valueToAdd * .3; // Make rounding behavior explicit if this value represents currency or whole units.
        totalValue += valueToAdd;
    }

    // farmName is passed but never used; either use it in logs or remove the parameter.
    public void addPlants(String farmName, String farmType){
        if(farmType == "Cattle") {
            System.out.println("planting grass");
        } else if(farmType == "Fish"){
            System.out.println("planting algae");
        }  else if(farmType == "Crops"){
            System.out.println("Planting clover");
        }
    }

    // Add Javadoc for public methods. Remove payers; it is not part of the tax calculation.
    public String payTaxes(int payers){ // Return a structured tax object instead of a string that callers must parse.
        // Remove commented-out code that does not explain the current implementation.
        // this.totalValue * .1
        String taxInfo = "sales:" + this.totalValue * .1 +":"
                    + "property:" + this.totalValue * .2 + ":"
                    + "income:" + this.totalValue * .3 + ":"
                    + "total:" + this.totalValue * .6;

        return taxInfo; // Returning a named value is fine, but the name should reflect the structured data it represents.

    }


}
