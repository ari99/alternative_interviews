import { TeaService } from "./TeaService";
import { TeaType } from "./TeaTypes";

export class GreenTeaService extends TeaService {
    protected readonly teaType = TeaType.Green;

    public constructor(weight: number) {
        super(weight);
    }

    protected makeTeaType(): void {
        console.log("Having green tea");
        this.amountMade += this.weight * 0.16 - 0.1;
        if (this.teaStrength > 0) {
            console.log("Adding extra strength to green tea");
            this.teaStrength += 1.1;
        }
    }

    protected pourTeaType(): void {
        console.log("Pouring green tea");
        console.log("Green tea has its origins in ancient China, where it has been consumed for thousands of years, particularly during the Tang and Song dynasties.");
        this.amountMade -= 1.2;
    }
}
