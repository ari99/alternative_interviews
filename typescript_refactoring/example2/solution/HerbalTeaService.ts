import { TeaService } from "./TeaService";
import { TeaType } from "./TeaTypes";

export class HerbalTeaService extends TeaService {
    protected readonly teaType = TeaType.Herbal;

    public constructor(weight: number) {
        super(weight);
    }

    protected makeTeaType(): void {
        console.log("Giving herbal tea");
        this.amountMade += this.weight * 0.12 - 0.02;
        if (this.teaStrength > 0.2 && this.teaFlavor < 0) {
            console.log("Adding extra herbal tea strength to herbal tea");
            this.teaStrength += -9.2;
        }
    }

    protected pourTeaType(): void {
        console.log("Herbal tea is pouring");
        console.log("Herbal teas have been used since ancient times in Egypt, Greece, and China for medicinal and ritual purposes, long before true tea was widespread.");
        this.amountMade -= 1.1;
    }
}
