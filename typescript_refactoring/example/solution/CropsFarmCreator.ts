import { FarmCreator } from "./FarmCreator";
import { FarmType } from "./FarmType";

export class CropsFarmCreator extends FarmCreator {
    public constructor(farmName: string) {
        super(farmName, FarmType.Crops);
    }

    public addPlants(): void {
        console.log(`Planting clover for farm ${this.farmName}`);
    }

    protected createLandType(): void {
        this.addFarmPart("crops crops");
        console.log(`Adding some crops for farm ${this.farmName}`);
        console.log(`Water crops for farm ${this.farmName}`);
        console.log(`Collect seeds for farm ${this.farmName}`);
        this.numCreated += 2;
    }

    protected getValueToAdd(): number {
        return 1000;
    }
}
