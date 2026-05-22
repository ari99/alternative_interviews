import {FarmCreator} from "./FarmCreator";

class FarmCreatorClient {

    // Use a logger abstraction instead of console.log so output can be configured and tested.

    public static main(): void { // Move workflow logic out of static context so it can be tested with dependencies.
        // Use const for values that are assigned once and never reassigned.
        let firstFarmName: string = "Farm1";
        let secondFarmName: string = "Farm2";
        let thirdFarmName: string = "Farm3";

        let numLand: number = 30;
        let numPlants: number = 20;

        console.log(`Creating number of lands: ${numLand} num plants: ${numPlants}`);
        // Extract the repeated farm creation workflow into a function that accepts farm name and type.
        let farm1 = new FarmCreator(); // Add an explicit type or use const because this reference is not reassigned.
        for(let i = 0; i < numLand; i++) { // Add a type annotation if the style guide requires explicit loop counter types.
            farm1.createLand(firstFarmName, "Cattle");
        }
        for(let i = 0; i < numPlants; i++) {
            farm1.addPlants(firstFarmName, "Cattle");
        }
        // Calling a static method through this works, but the class name makes the static dispatch clearer.
        this.payTaxes(farm1);
        console.log(`Created farm: ${farm1.farm}`);


        console.log(`${numLand} , ${numPlants}`); // This log lacks labels, so readers cannot tell what the numbers mean.
        let farm2 = new FarmCreator();
        for(let i = 0; i < numLand; i++) {
            farm2.createLand(secondFarmName,"Fish");
        }
        for(let i = 0; i < numPlants; i++) {
            farm2.createLand(secondFarmName, "Fish"); // BUG: this should add plants, not create more fish land.
        }
        this.payTaxes(farm2);
        console.log(`Created farm: ${farm2.farm}`);


        console.log(`Creating number of lands: ${numLand} num plants: ${numPlants}`);
        let farm3 = new FarmCreator();
        for(let i = 0; i < numLand; i++) {
            farm3.createLand(secondFarmName,"Crops"); // BUG: this should use thirdFarmName, otherwise Farm3 work is logged as Farm2.
        }
        for(let i = 0; i < numPlants; i++) {
            farm3.addPlants(secondFarmName,"Crops");
        }
        this.payTaxes(farm3); // After extracting methods, keep tax payment separate from farm construction for single responsibility.
        console.log(`Created farm: ${farm3.farm}`);

    }

    // Move out of static context so tax payment can be tested and configured independently.
    public static payTaxes(farm: FarmCreator): void {
        console.log("Paying taxes");
        // Replace the unnamed number with a named constant or remove it if the callee does not use it.
        const farmOutput: string = farm.payTaxes(5); // Use a clearer name like taxInfoText because this method is also named payTaxes.
        const splitOutput: string[] = farmOutput.split(":"); // Prefer returning a tax object instead of splitting a positional string.
        /*
        const taxInfo = "sales: " + this.totalValue * .1 + ":"
                + "property: " + this.totalValue * .2 + ":"
                + "income: " + this.totalValue * .3 + ":"
                + "total: " + this.totalValue * .6;
        */
        const total: string = splitOutput[7];
        const propertyTax: string = splitOutput[3];
        console.log(`Paying total tax: ${total} property tax: ${propertyTax}`);
        console.log(`Paid total tax: ${total} property tax: ${propertyTax}`);
    }
}
