
export class FarmCreator {
    public totalValue: number = 0.0; // shouldn't be public (encapsulation)
    public farm: string = "";
    public numCows: number = 0;
    public numFish: number = 0;
    public numCrops: number = 0;

    // farmName should be passed in a constructor
    // missing parameter types
    createLand(farmName, farmType) { // missing return type
        console.log(`Creating land for ${farmName}`);
        let valueToAdd: number = 0;
        let addLandCount: number = 100; // should be static/final constant

        if(farmType == "Cattle") {   // should have enum instead of string
            valueToAdd += 5000;
            let count = addLandCount; //missing type
            while(count > 0){ // should be for loop
                this.farm += "cow cow cow";
                console.log(`Adding some cows`); // adding farmName to the log would make the log more informative
                console.log(`Cow care`); // adding farmName to the log would make the log more informative
                this.numCows += 4;
                console.log(`Total cows: ${this.numCows}`);

                count--;
            }
        } else if(farmType == "Fish"){ // should be ===
            valueToAdd += 2000;
            let count = addLandCount;
            while(count > 0){ // should be for loop
                this.farm += "fish";
                console.log(`Adding some cows`); // should be fish
                this.numFish += 1;
                count--;
            }
        } else if(farmType == "Crops"){
            valueToAdd += 1000;
            let count = addLandCount;
            while(count > 0){ // should be for loop
                this.farm += "crops";
                console.log(`Adding some crops`);
                console.log(`Water crops`); // adding farmName to the log would make the log more informative
                console.log(`Collect seeds`); // adding farmName to the log would make the log more informative
                this.numCrops += 2;
                count--;
            }
        }
        valueToAdd -= 10;
        valueToAdd += valueToAdd * 0.3; // should make rounding explicit
        this.totalValue += valueToAdd;
    }

    // missing param and return types
    // farmName isn't used
    addPlants(farmName, farmType) {
        if(farmType === "Cattle") {
            console.log("Planting grass");
        } else if(farmType === "Fish"){
            console.log("Planting algae");
        }  else if(farmType === "Crops"){
            console.log("Planting clover");
        }
    }

    // missing param and return types
    // docstring comments       /// payers isn't used
    payTaxes(payers) { // should create an object
        // this.totalValue * .1  // unnecessary comment
        let taxInfo = `sales: ${this.totalValue * 0.1}:` //missing type
            + `property: ${this.totalValue * 0.2}:` // should be const
            + `income: ${this.totalValue * 0.3}:`
            + `total: ${this.totalValue * 0.6}`;

        return taxInfo; // preference to naming variable to be returned
    }
}
