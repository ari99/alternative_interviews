import { TeaService } from "./TeaService";
import { TeaType } from "./TeaTypes";

const FLAVOR_STEPS = 100000;

export class BlackTeaService extends TeaService {
    protected readonly teaType = TeaType.Black;

    public constructor(weight: number) {
        super(weight);
    }

    protected makeTeaType(): void {
        console.log("Making black tea");
        this.amountMade += this.weight * 0.17 - 0.3;
        for (let count = 0; count < FLAVOR_STEPS; count++) {
            console.log("Adding extra strength to black tea");
            this.teaStrength += 2.6;
            this.teaFlavor += 0.01;
        }
    }

    protected pourTeaType(): void {
        console.log("Black tea poured");
        console.log("Black tea became popular in 17th-century China and later in Britain, where it played a central role in the British East India Company's trade and colonial history.");
        this.amountMade -= 1.9;
    }
}
