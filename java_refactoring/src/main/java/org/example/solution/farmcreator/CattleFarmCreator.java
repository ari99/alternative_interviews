package org.example.solution.farmcreator;

import org.example.solution.FarmType;

public class CattleFarmCreator  extends FarmCreator {

    public CattleFarmCreator(String farmName){
        super(farmName, FarmType.fromString("CATTLE"));
    }

    @Override
    public int getValueToAdd(){
        return 5000;
    }

    //farmName should be passed in a constructor
    @Override
    public void createLandType(){
        System.out.println("Creating land for " + this.farmName);
        for(int count=0; count < FarmCreator.ADD_LAND_COUNT; count++){
            this.farm.append("cow cow cow"); //stringbuilder should be used
            System.out.println("adding some cows "); // adding farmName to the log would make the log more informative
            System.out.println("cow care"); // adding farmName to the log would make the log more informative
            this.numCreated += 4;
            System.out.println("total cows " + numCreated);
        }
    }

    // farmName isnt used
    @Override
    public void addPlants(){
            System.out.println("planting grass");
    }



}
