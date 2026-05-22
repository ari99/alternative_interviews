
export class FarmCreator {
    // This class mixes the shared farm workflow with cattle/fish/crops-specific behavior.
    // Create an abstract FarmCreator base class and concrete farm classes for each farm type.
    public totalValue: number = 0.0; // Should be private so callers cannot mutate internal accounting state directly.
    public farm: string = "";
    public numCows: number = 0;
    public numFish: number = 0;
    public numCrops: number = 0;

    // Define visibility explicitly so the public API is intentional.
    // farmName should be passed in a constructor so the object owns its required state.
    // Add parameter types so callers know the expected inputs.
    createLand(farmName, farmType) { // Add an explicit void return type.
        console.log(`Creating land for ${farmName}`);
        let valueToAdd = 0;  // Add a type annotation, or use const if the inferred type is obvious.
        let addLandCount = 100; // Move this magic number to a named constant shared by each branch.

        if(farmType == "Cattle") {   // Use a FarmType enum instead of raw strings to avoid typos.
                                      // This branch should move into a concrete CattleFarmCreator implementation.
            valueToAdd += 5000;
            let count = addLandCount; // Add a type annotation or use a for-loop counter scoped to the loop.
            while(count > 0){ // A for loop would make the iteration bounds and counter update easier to read.
                this.farm += "cow cow cow";
                console.log(`Adding some cows`); // Include farmName in the log so production logs identify the affected farm.
                console.log(`Cow care`); // Include farmName in the log so this message has useful context.
                this.numCows += 3;
                console.log(`Total cows: ${this.numCows}`);

                count--;
            }
        } else if(farmType == "Fish"){ // Use === so comparison does not rely on type coercion.
                                       // This branch should move into a concrete FishFarmCreator implementation.
            valueToAdd += 2000;
            let count = addLandCount;
            while(count > 0){ // A for loop would be clearer because the loop has a fixed number of iterations.
                this.farm += "fish";
                console.log(`Adding some cows`); // This message says cows even though the branch creates fish.
                this.numFish += 1;
                count--;
            }
        } else if(farmType == "Crops"){
            // This branch should move into a concrete CropsFarmCreator implementation.
            valueToAdd += 1000;
            let count = addLandCount;
            while(count > 0){ // A for loop would be clearer because the loop has a fixed number of iterations.
                this.farm += "crops";
                console.log(`Adding some crops`);
                console.log(`Water crops`); // Include farmName in the log so the action can be traced to a specific farm.
                console.log(`Collect seeds`); // Include farmName in the log so the action can be traced to a specific farm.
                this.numCrops += 2;
                count--;
            }
        }
        valueToAdd -= 10;
        valueToAdd += valueToAdd * 0.3; // Make rounding behavior explicit if this value represents currency or whole units.
        this.totalValue += valueToAdd;
    }

    // Define visibility explicitly so the public API is intentional.
    // Add parameter and return types so the method contract is clear.
    // farmName is passed but never used; either use it in logs or remove the parameter.
    addPlants(farmName, farmType) {
        if(farmType == "Cattle") {
            console.log("Planting grass");
        } else if(farmType == "Fish"){
            console.log("Planting algae");
        }  else if(farmType == "Crops"){
            console.log("Planting clover");
        }
    }

    // Define visibility explicitly so the public API is intentional.
    // Add parameter and return types so consumers know what this method returns.
    // payers is not used; remove it or include it in the tax calculation.
    payTaxes(payers) { // Return a structured tax object instead of a string that callers must parse.
        // Remove commented-out code that does not explain the current implementation.
        let taxInfo = `sales:${this.totalValue * 0.1}:` // Add a type annotation or rely on const inference.
            + `property:${this.totalValue * 0.2}:` // Use const because taxInfo is assigned once and never reassigned.
            + `income:${this.totalValue * 0.3}:`
            + `total:${this.totalValue * 0.6}`;

        return taxInfo; // Returning a named value is fine, but the name should reflect the structured data it represents.
    }
}
