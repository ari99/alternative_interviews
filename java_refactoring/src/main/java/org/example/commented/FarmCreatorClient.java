package org.example.commented;

public class FarmCreatorClient {

    // Use a logger abstraction instead of System.out so output can be configured and tested.


    public static void main(String[] args) { // Move workflow logic out of static context so it can be tested with dependencies.

        String firstFarmName = "Farm1";
        String secondFarmName = "Farm2";
        String thirdFarmName = "Farm3";

        final int numLand = 30;
        final int numPlants = 20;

        System.out.println("Creating number of lands: " + numLand + " num plants: " + numPlants);
        // Extract the repeated farm creation workflow into a method that accepts farm name and type.
        FarmCreator farm1 = new FarmCreator();
        for(int i=0 ; i < numLand; i++) {
            farm1.createLand(firstFarmName, "Cattle");
        }
        for(int i=0 ; i < numPlants; i++) {
            farm1.addPlants(firstFarmName, "Cattle");
        }
        FarmCreatorClient.payTaxes(farm1);
        System.out.println("Created farm: " + farm1.farm);


        System.out.println( numLand + " , " + numPlants); // This log lacks labels, so readers cannot tell what the numbers mean.
        FarmCreator farm2 = new FarmCreator();
        for(int i=0 ; i < numLand; i++) {
            farm2.createLand(secondFarmName, "Fish");
        }
        for(int i=0 ; i < numPlants; i++) {
            farm2.createLand(secondFarmName, "Fish"); // BUG: this should add plants, not create more fish land.
        }
        FarmCreatorClient.payTaxes(farm2);
        System.out.println("Created farm: " + farm2.farm);



        System.out.println("Creating number of lands: " + numLand + " num plants: " + numPlants);
        FarmCreator farm3 = new FarmCreator();
        for(int i=0 ; i < numLand; i++) {
            farm3.createLand(secondFarmName, "Crops"); // BUG: this should use thirdFarmName, otherwise Farm3 work is logged as Farm2.
        }
        for(int i=0 ; i < numPlants; i++) {
            farm3.addPlants(secondFarmName, "Crops");
        }
        FarmCreatorClient.payTaxes(farm3);  // After extracting methods, keep tax payment separate from farm construction for single responsibility.
        System.out.println("Created farm: " + farm3.farm);


    }

    // Move out of static context so tax payment can be tested and configured independently.
    public static void payTaxes(FarmCreator farm) {
        System.out.println("paying taxes");
                                            // Replace the unnamed number with a named constant or remove it if the callee does not use it.
        String farmOutput = farm.payTaxes(5);// Use a clearer name like taxInfoText because this method is also named payTaxes.
        String[] splitOutput = farmOutput.split(":"); // Prefer returning a tax object instead of splitting a positional string.
        /* String taxInfo = "sales: " + this.totalValue * .1 +":"
                + "property: " + this.totalValue * .2 + ":"
                + "income: " + this.totalValue * .3 + ":"
                + "total: " + this.totalValue * .6;*/
        String total = splitOutput[7];
        String propertyTax  = splitOutput[3];
        System.out.println("Paying total tax: " + total + " property tax: " + propertyTax);
        System.out.println("Paid total tax: " + total + " property tax: " + propertyTax);

    }
}
