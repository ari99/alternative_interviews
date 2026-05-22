import { FarmCreator } from "./FarmCreator";
import { FarmType } from "./FarmType";

export class FishFarmCreator extends FarmCreator {
    public constructor(farmName: string) {
        super(farmName, FarmType.Fish);
    }

    public addPlants(): void {
        console.log(`Planting algae for farm ${this.farmName}`);
    }

    protected createLandType(): void {
        this.addFarmPart("fish");
        console.log(`Adding some fish for farm ${this.farmName}`);
        this.numCreated += 1;
    }

    protected getValueToAdd(): number {
        return 2000;
    }
}
