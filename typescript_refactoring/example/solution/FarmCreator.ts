import { FarmType } from "./FarmType";
import { TaxInfo, calculateTaxes } from "./TaxInfo";

const ADD_LAND_COUNT = 100;

export abstract class FarmCreator {
    private totalValue = 0;
    private readonly farmParts: string[] = [];
    protected numCreated = 0;

    protected constructor(
        protected readonly farmName: string,
        public readonly farmType: FarmType,
    ) {}

    public createLand(): void {
        console.log(`Creating land for ${this.farmName} of type ${this.farmType}`);
        for (let count = 0; count < ADD_LAND_COUNT; count++) {
            this.createLandType();
        }
        this.addValueToTotal();
    }

    public abstract addPlants(): void;

    public getFarm(): string {
        return this.farmParts.join("");
    }

    public createTaxes(): TaxInfo {
        return calculateTaxes(this.totalValue);
    }

    protected addFarmPart(part: string): void {
        this.farmParts.push(part);
    }

    protected abstract createLandType(): void;
    protected abstract getValueToAdd(): number;

    private addValueToTotal(): void {
        const valueBeforeMarkup = this.getValueToAdd() - 10;
        this.totalValue += valueBeforeMarkup + Math.round(valueBeforeMarkup * 0.3);
    }
}
