package org.example.solution.farmcreator;

import org.example.solution.FarmType;
import org.example.solution.farmcreator.FarmCreator;

public class FishFarmCreator extends FarmCreator {


    public FishFarmCreator(String farmName) {
        super(farmName, FarmType.fromString("fish"));
    }

    @Override
    public int getValueToAdd() {
        return 1000;
    }

    //farmName should be passed in a constructor
    @Override
    public void createLandType() {
        System.out.println("Creating land for " + this.farmName);
        for (int count = 0; count < FarmCreator.ADD_LAND_COUNT; count++) {
            this.farm.append( "crops");
            System.out.println("adding some crops " + this.farmName); // adding farmName to the log would make the log more informative
            this.numCreated += 2;
        }
    }

    @Override
    public void addPlants() {
        System.out.println("Planting clover " + this.farmName);
    }
}
