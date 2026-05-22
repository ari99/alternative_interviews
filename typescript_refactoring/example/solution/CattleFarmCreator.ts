import { FarmCreator } from "./FarmCreator";
import { FarmType } from "./FarmType";

export class CattleFarmCreator extends FarmCreator {
    public constructor(farmName: string) {
        super(farmName, FarmType.Cattle);
    }

    public addPlants(): void {
        console.log(`Planting grass for farm ${this.farmName}`);
    }

    protected createLandType(): void {
        this.addFarmPart("cow cow cow");
        console.log(`Adding some cows for farm ${this.farmName}`);
        console.log(`Cow care for farm ${this.farmName}`);
        this.numCreated += 3;
        console.log(`Total cows: ${this.numCreated}`);
    }

    protected getValueToAdd(): number {
        return 5000;
    }
}
