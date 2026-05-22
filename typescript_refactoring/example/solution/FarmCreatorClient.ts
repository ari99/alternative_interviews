import { CattleFarmCreator } from "./CattleFarmCreator";
import { CropsFarmCreator } from "./CropsFarmCreator";
import { FarmCreator } from "./FarmCreator";
import { FishFarmCreator } from "./FishFarmCreator";
import { TaxInfo } from "./TaxInfo";

const LAND_COUNT = 30;
const PLANT_COUNT = 20;

export class FarmCreatorClient {
    public static main(): void {
        const client = new FarmCreatorClient();
        client.createAllFarms();
    }

    public createAllFarms(): void {
        this.createFarm(new CattleFarmCreator("Farm1"));
        this.createFarm(new FishFarmCreator("Farm2"));
        this.createFarm(new CropsFarmCreator("Farm3"));
    }

    private createFarm(farmCreator: FarmCreator): void {
        console.log(`Creating number of lands: ${LAND_COUNT}`);
        for (let i = 0; i < LAND_COUNT; i++) {
            farmCreator.createLand();
        }

        console.log(`Creating number of plants: ${PLANT_COUNT}`);
        for (let i = 0; i < PLANT_COUNT; i++) {
            farmCreator.addPlants();
        }

        this.payTaxes(farmCreator.createTaxes());
        console.log(`Created farm: ${farmCreator.getFarm()}`);
    }

    private payTaxes(taxInfo: TaxInfo): void {
        console.log(`Paying total tax: ${taxInfo.totalTax} property tax: ${taxInfo.propertyTax}`);
        console.log(`Paid total tax: ${taxInfo.totalTax} property tax: ${taxInfo.propertyTax}`);
    }
}
