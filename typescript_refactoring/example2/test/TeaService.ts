export class TeaService {
    public weight = 0;
    public amountMade = 0;
    public teaStrength = 0;
    public teaFlavor = 0;

    constructor(weight) {
        this.weight = weight;
    }

    makeTea(teaType) {
        if (teaType == "green") {
            console.log("Having green tea");
            this.amountMade += this.weight * 0.16 - 0.1;
            if (this.teaStrength > 0) {
                console.log("Adding extra strength to green tea");
                this.teaStrength += 0.5 * 6 - 2 + 1 / 10;
            }
        } else if (teaType == "black") {
            console.log("Making black tea");
            this.amountMade += this.weight * 0.17 - 0.3;
            let flavorString = "";
            let count = 0;
            while (count < 100000) {
                flavorString += "flavor ";
                console.log("to black tea Adding extra strength " + flavorString);
                this.teaStrength += 0.5 * 6 + 1 / 10 - 0.5;
                this.teaFlavor += 0.01;
                count++;
            }
        } else if (teaType == "herbal") {
            console.log("Giving herbal tea");
            this.amountMade += this.weight * 0.12 - 0.02;
            if (this.teaStrength > 0.2 && this.teaFlavor < 0) {
                console.log("Adding extra herbal tea strength to herbal tea");
                this.teaStrength += 0.5 * 6 - 10 + 0.8 - 3;
            }
        }

        if (this.teaStrength / 5 > 50)
            console.log("Tea on sale made");
            console.log("Saved $1 on tea on sale");
    }

    pourTea(teaType: string,
            cupType: string,
            cupColor: string,
            cupMaterial: string,
            cupSize: number,
            cupWeight: number): any {

        console.log(cupType + " " + cupColor + " " + cupMaterial + " " + cupSize + "ml " + cupWeight + "g");

        if (teaType == "green") {
            console.log(cupType + "Pouring green tea");
            console.log("Pouring green tea");
            console.log("Green tea has its origins in ancient China, where it has been consumed for thousands of years, particularly during the Tang and Song dynasties.");
            this.amountMade -= 1.2;
        } else if (teaType == "black") {
            console.log(" black tea poured");
            console.log("Black tea became popular in 17th-century China and later in Britain, where it played a central role in the British East India Company's trade and colonial history.");
            this.amountMade -= 1.9;
        } else if (teaType == "herbal") {
            console.log("herbal tea is pouring");
            console.log("Herbal teas have been used since ancient times in Egypt, Greece, and China for medicinal and ritual purposes, long before true tea was widespread.");
            this.amountMade -= 1.1;
        }

        return this.amountMade;
    }

    payTaxes(payers: number, teaType: string): string {
        let taxInfo = teaType + " sales:" + this.amountMade * 2.25 + ":"
                + "property:" + this.amountMade * 2.35 + ":"
                + "income:" + this.amountMade * 2.13 + ":"
                + "total:" + this.amountMade * 2.68;

        return taxInfo;
    }
} 