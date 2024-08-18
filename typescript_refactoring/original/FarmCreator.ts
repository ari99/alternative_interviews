
export class FarmCreator {
    public totalValue: number = 0.0;
    public farm: string = "";
    public numCows: number = 0;
    public numFish: number = 0;
    public numCrops: number = 0;

    createLand(farmName, farmType) {
        console.log(`Creating land for ${farmName}`);
        let valueToAdd: number = 0;
        let addLandCount: number = 100;

        if(farmType == "Cattle") {
            valueToAdd += 5000;
            let count = addLandCount;
            while(count > 0){
                this.farm += "cow cow cow";
                console.log(`Adding some cows`);
                console.log(`Cow care}`);
                this.numCows += 4;
                console.log(`Total cows: ${this.numCows}`);

                count--;
            }
        } else if(farmType == "Fish"){
            valueToAdd += 2000;
            let count = addLandCount;
            while(count > 0){
                this.farm += "fish";
                console.log(`Adding some cows`);
                this.numFish += 1;
                count--;
            }
        } else if(farmType == "Crops"){
            valueToAdd += 1000;
            let count = addLandCount;
            while(count > 0){
                this.farm += "crops";
                console.log(`Adding some crops`);
                console.log(`Water crops`);
                console.log(`Collect seeds`);
                this.numCrops += 2;
                count--;
            }
        }
        valueToAdd -= 10;
        valueToAdd += valueToAdd * 0.3;
        this.totalValue += valueToAdd;
    }


    addPlants(farmName, farmType) {
        if(farmType === "Cattle") {
            console.log("Planting grass");
        } else if(farmType === "Fish"){
            console.log("Planting algae");
        }  else if(farmType === "Crops"){
            console.log("Planting clover");
        }
    }

    payTaxes(payers) {
        // this.totalValue * .1
        let taxInfo = `sales:${this.totalValue * 0.1}:`
            + `property:${this.totalValue * 0.2}:`
            + `income:${this.totalValue * 0.3}:`
            + `total:${this.totalValue * 0.6}`;

        return taxInfo;
    }
}
