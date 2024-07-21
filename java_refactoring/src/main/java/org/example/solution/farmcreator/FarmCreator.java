package org.example.solution.farmcreator;

import org.example.solution.FarmType;
import org.example.solution.TaxInfo;

public abstract class FarmCreator {
    private double totalValue = 0.0; // shouldnt be public (encapsulation)
    protected StringBuilder farm = new StringBuilder(); // should be a stringbuilder
    protected static final int ADD_LAND_COUNT = 100; // should be static/final constant
    protected int numCreated = 0;
    protected final String farmName;
    private final FarmType farmType;



    public FarmCreator(String farmName, FarmType farmType){
        this.farmName = farmName;
        this.farmType = farmType;
    }

    public abstract void createLandType();
    public abstract void addPlants();
    protected abstract int getValueToAdd();

    public FarmType getFarmType(){
        return this.farmType;
    }

    public String getFarm(){
        return this.farm.toString();
    }

    //farmName should be passed in a constructor
    public void createLand(){
        System.out.println("Creating land for " + farmName + " of type " + farmType);
        this.createLandType();
        this.addValueToTotal();
    }

    private void addValueToTotal(){
        int valueToAdd = this.getValueToAdd();
        valueToAdd -= 10;
        valueToAdd += (int)Math.round(valueToAdd * .3);
        totalValue += valueToAdd;
    }

    // docstring comments       ///payers isnt used
    public TaxInfo createTaxes(){ // should create an object
        TaxInfo taxInfo = new TaxInfo(this.totalValue);
        return taxInfo; // preference to naming variable to be returned
    }


}
