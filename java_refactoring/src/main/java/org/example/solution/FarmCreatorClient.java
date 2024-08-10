package org.example.solution;

import org.example.solution.farmcreator.CattleFarmCreator;
import org.example.solution.farmcreator.CropsFarmCreator;
import org.example.solution.farmcreator.FarmCreator;
import org.example.solution.farmcreator.FishFarmCreator;

public class FarmCreatorClient {

    // use logger instead of system.out


    public static void main(String[] args) { //Shouldnt stay in the static context
        FarmCreatorClient farmCreatorClient = new FarmCreatorClient();
        farmCreatorClient.createFarmsAll();
    }

    public void createFarmsAll(){
        String cattleFarmName = "Farm1";
        FarmCreator cattleFarmCreator = new CattleFarmCreator(cattleFarmName);
        String cattleFarm = this.createFarm(cattleFarmCreator);
        System.out.println("Created farm: " + cattleFarm);

        String fishFarmName = "Farm2";
        FarmCreator fishFarmCreator = new FishFarmCreator(fishFarmName);
        String fishFarm = this.createFarm(fishFarmCreator);
        System.out.println("Created farm: " + fishFarm);

        String cropsFarmName = "Farm3";
        FarmCreator cropsFarmCreator = new CropsFarmCreator(cropsFarmName);
        String cropsFarm = this.createFarm(cropsFarmCreator);
        System.out.println("Created farm: " + cropsFarm);

    }

    private String createFarm(FarmCreator farmCreator){
        farmCreator = this.createLand(farmCreator);
        farmCreator = this.addPlants(farmCreator);
        TaxInfo taxInfo = farmCreator.createTaxes();
        this.payTaxes(taxInfo);
        return farmCreator.getFarm();
    }

    private FarmCreator createLand(FarmCreator farmCreator){
        int numLand = 30;
        System.out.println("Creating number of lands: " + numLand);

        for(int i=0 ; i < numLand; i++) {
            farmCreator.createLand();
        }
        return farmCreator; // preferable to not rely on pass by reference to keep the code more explainable
    }

    private FarmCreator addPlants(FarmCreator farmCreator){
        int numPlants = 20;
        System.out.println("Creating number of plants: " + numPlants);

        for(int i=0 ; i < numPlants; i++) {
            farmCreator.addPlants();
        }
        return farmCreator; // preferable to not rely on pass by reference to keep the code more explainable
    }


    // Moved out of static conext
    private void payTaxes(TaxInfo taxInfo) {
        System.out.println("paying taxes");

        System.out.println("Paying total tax: " + taxInfo.getTotalTax() + " property tax: " + taxInfo.getPropertyTax());
        System.out.println("Paid total tax: " + taxInfo.getTotalTax() + " property tax: " + taxInfo.getPropertyTax());

    }
}
