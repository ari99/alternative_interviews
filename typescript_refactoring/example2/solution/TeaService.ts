import { Cup, TeaPourResult, TeaTaxInfo, TeaType } from "./TeaTypes";

export abstract class TeaService {
    protected amountMade = 0;
    protected teaStrength = 0;
    protected teaFlavor = 0;

    protected constructor(protected readonly weight: number) {
        if (weight <= 0) {
            throw new Error("Tea weight must be positive.");
        }
    }

    public makeTea(): void {
        this.makeTeaType();
        if (this.teaStrength / 5 > 50) {
            console.log("Tea on sale made");
            console.log("Saved $1 on tea on sale");
        }
    }

    public pourTea(cup: Cup): TeaPourResult {
        this.validateCup(cup);
        console.log(`${cup.type} ${cup.color} ${cup.material} ${cup.sizeMl}ml ${cup.weightGrams}g`);
        this.pourTeaType();

        return {
            teaType: this.teaType,
            amountRemaining: this.amountMade,
        };
    }

    public createTaxInfo(): TeaTaxInfo {
        return {
            teaType: this.teaType,
            salesTax: this.amountMade * 2.25,
            propertyTax: this.amountMade * 2.35,
            incomeTax: this.amountMade * 2.13,
            totalTax: this.amountMade * 2.68,
        };
    }

    protected abstract readonly teaType: TeaType;

    protected abstract makeTeaType(): void;

    protected abstract pourTeaType(): void;

    private validateCup(cup: Cup): void {
        if (cup.sizeMl <= 0 || cup.weightGrams <= 0) {
            throw new Error("Cup size and weight must be positive.");
        }
    }
}
