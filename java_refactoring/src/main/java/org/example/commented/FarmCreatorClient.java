package org.example.commented;

public class FarmCreatorClient {

    // use logger instead of system.out


    public static void main(String[] args) { //probabyl shouldnt stay in the static context

        String firstFarmName = "Farm1";
        String secondFarmName = "Farm2";
        String thirdFarmName = "Farm3";

        final int numLand = 30;
        final int numPlants = 20;

        // Should be loop
        System.out.println("Creating number of lands: " + numLand + " num plants: " + numPlants);
        FarmCreator farm1 = new FarmCreator();
        for(int i=0 ; i < numLand; i++) {
            farm1.createLand(firstFarmName, "Cattle");
        }
        for(int i=0 ; i < numPlants; i++) {
            farm1.addPlants(firstFarmName, "Cattle");
        }
        FarmCreatorClient.payTaxes(farm1);

        System.out.println( numLand + " , " + numPlants); // uninformative log
        FarmCreator farm2 = new FarmCreator();
        for(int i=0 ; i < numLand; i++) {
            farm2.createLand(secondFarmName, "Fish");
        }
        for(int i=0 ; i < numPlants; i++) {
            farm2.createLand(secondFarmName, "Fish"); // BUG should be addPlants
        }
        FarmCreatorClient.payTaxes(farm2);



        System.out.println("Creating number of lands: " + numLand + " num plants: " + numPlants);
        FarmCreator farm3 = new FarmCreator();
        for(int i=0 ; i < numLand; i++) {
            farm3.createLand(secondFarmName, "Crops"); //BUG this should be thirdFarmName
        }
        for(int i=0 ; i < numPlants; i++) {
            farm3.addPlants(secondFarmName, "Crops");
        }
        FarmCreatorClient.payTaxes(farm3);  // after refactored to methods, this shouldnt be included, so the method
                                            // would have a more single purpose



    }

    //probably should have moved out of static conext
    public static void payTaxes(FarmCreator farm) {
        System.out.println("paying taxes");
                                            // unnamed number
        String farmOutput = farm.payTaxes(5);//should be named differently because the current method is payTaxes
        String[] splitOutput = farmOutput.split(":"); // should have used an object
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
