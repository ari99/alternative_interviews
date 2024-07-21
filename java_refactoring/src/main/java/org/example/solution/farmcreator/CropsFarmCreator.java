package org.example.solution.farmcreator;

import org.example.solution.FarmType;

public class CropsFarmCreator extends FarmCreator {


    public CropsFarmCreator(String farmName) {
        super(farmName, FarmType.fromString("crops"));
    }

    public int getValueToAdd() {
        return 1000;
    }

    //farmName should be passed in a constructor
    public void createLandType() {
        System.out.println("Creating land for " + this.farmName);
        for (int count = 0; count < FarmCreator.ADD_LAND_COUNT; count++) {
            this.farm.append( "crops");
            System.out.println("adding some crops");
            System.out.println("water crops"); // adding farmName to the log would make the log more informative
            System.out.println("collect seeds"); // adding farmName to the log would make the log more informative
            this.numCreated += 2;
        }
    }

    // farmName isnt used
    public void addPlants() {
        System.out.println("Planting clover");
    }



}
