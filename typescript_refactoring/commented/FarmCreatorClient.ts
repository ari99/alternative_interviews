import {FarmCreator} from "./FarmCreator";

class FarmCreatorClient {

    // use logger instead of console.log

    public static main(): void { // probably shouldn't stay in the static context
        // should be const
        let firstFarmName: string = "Farm1";
        let secondFarmName: string = "Farm2";
        let thirdFarmName: string = "Farm3";

        let numLand: number = 30;
        let numPlants: number = 20;

        console.log(`Creating number of lands: ${numLand} num plants: ${numPlants}`);
        // The following repeated lines should be a function
        let farm1 = new FarmCreator(); // missing type //should be const
        for(let i = 0; i < numLand; i++) { //missing type
            farm1.createLand(firstFarmName, "Cattle");
        }
        for(let i = 0; i < numPlants; i++) {
            farm1.addPlants(firstFarmName, "Cattle");
        }
        // using "this" to call a static method is allowed in Typescipt,
        // however FarmCreator.payTaxes(farm1); would be preferable to make it clear it is a static
        // method
        this.payTaxes(farm1);
        console.log(`Created farm: ${farm1.farm}`);


        console.log(`${numLand} , ${numPlants}`); // uninformative log
        let farm2 = new FarmCreator();
        for(let i = 0; i < numLand; i++) {
            farm2.createLand(secondFarmName,"Fish");
        }
        for(let i = 0; i < numPlants; i++) {
            farm2.createLand(secondFarmName, "Fish"); // BUG should be addPlants
        }
        this.payTaxes(farm2);
        console.log(`Created farm: ${farm2.farm}`);


        console.log(`Creating number of lands: ${numLand} num plants: ${numPlants}`);
        let farm3 = new FarmCreator();
        for(let i = 0; i < numLand; i++) {
            farm3.createLand(secondFarmName,"Crops"); // BUG this should be thirdFarmName
        }
        for(let i = 0; i < numPlants; i++) {
            farm3.addPlants(secondFarmName,"Crops");
        }
        this.payTaxes(farm3); // after refactoring to methods, this shouldn't be included, so the method
                              // would have a more single purpose-
        console.log(`Created farm: ${farm3.farm}`);

    }

    // probably should move out static context
    public static payTaxes(farm: FarmCreator): void {
        console.log("Paying taxes");
        // unnamed number
        const farmOutput: string = farm.payTaxes(5); // should be named differently because the current method is payTaxes
        const splitOutput: string[] = farmOutput.split(":"); // should have used an object
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
