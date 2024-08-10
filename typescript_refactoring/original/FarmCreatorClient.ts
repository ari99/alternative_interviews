import {FarmCreator} from "./FarmCreator";

class FarmCreatorClient {

    public static main(): void {

        let firstFarmName: string = "Farm1";
        let secondFarmName: string = "Farm2";
        let thirdFarmName: string = "Farm3";

        let numLand: number = 30;
        let numPlants: number = 20;

        console.log(`Creating number of lands: ${numLand} num plants: ${numPlants}`);

        let farm1 = new FarmCreator();
        for(let i = 0; i < numLand; i++) {
            farm1.createLand(firstFarmName, "Cattle");
        }
        for(let i = 0; i < numPlants; i++) {
            farm1.addPlants(firstFarmName, "Cattle");
        }
        this.payTaxes(farm1);
        console.log(`Created farm: ${farm1.farm}`);


        console.log(`${numLand} , ${numPlants}`);
        let farm2 = new FarmCreator();
        for(let i = 0; i < numLand; i++) {
            farm2.createLand(secondFarmName,"Fish");
        }
        for(let i = 0; i < numPlants; i++) {
            farm2.createLand(secondFarmName, "Fish");
        }
        this.payTaxes(farm2);
        console.log(`Created farm: ${farm2.farm}`);


        console.log(`Creating number of lands: ${numLand} num plants: ${numPlants}`);
        let farm3 = new FarmCreator();
        for(let i = 0; i < numLand; i++) {
            farm3.createLand(secondFarmName,"Crops");
        }
        for(let i = 0; i < numPlants; i++) {
            farm3.addPlants(secondFarmName,"Crops");
        }
        this.payTaxes(farm3);
        console.log(`Created farm: ${farm3.farm}`);

    }


    public static payTaxes(farm: FarmCreator): void {
        console.log("Paying taxes");

        const farmOutput: string = farm.payTaxes(5);
        const splitOutput: string[] = farmOutput.split(":");
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
