// Missing proper type definitions
// Using 'let' instead of 'const' for values that shouldn't change
// Missing interface definitions
// Incorrect type annotations
// Performance issues with string concatenation
// Logic bugs and missing error handling

export class TeaService {
    // Public properties should be private
    public weight: number = 0;
    public amountMade: number = 0;
    public teaStrength: number = 0;
    public teaFlavor: number = 0;

    constructor(weight: number) {
        this.weight = weight;
    }

    // Missing return type annotation
    // Using == instead of === for string comparison
    // Missing type for teaType parameter
    makeTea(teaType: any) {
        if (teaType == "green") {
            console.log("Having green tea");
            // Incorrect calculation - should be floating point
            this.amountMade += this.weight * 0.16 - 0.1;
            if (this.teaStrength > 0) {
                console.log("Adding extra strength to green tea");
                // Complex calculation that could be simplified
                this.teaStrength += 0.5 * 6 - 2 + 1 / 10;
            }
        } else if (teaType == "black") {
            console.log("Making black tea");
            this.amountMade += this.weight * 0.17 - 0.3;
            // Using let instead of const for string that doesn't change
            let flavorString = "";
            let count = 0;
            // Inefficient while loop instead of for loop
            // Performance issue with string concatenation in loop
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

        // Missing braces for if statement - bug
        if (this.teaStrength / 5 > 50)
            console.log("Tea on sale made");
            console.log("Saved $1 on tea on sale");
    }

    // Returning 'any' instead of specific type
    // Too many parameters - should use an object
    // Missing proper type annotations
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

    // Unused parameter 'payers'
    // Returning string instead of proper object
    // Missing proper type annotations
    payTaxes(payers: number, teaType: string): string {
        // Unnecessary comment
        // this.amountMade * 2.25
        let taxInfo = teaType + " sales:" + this.amountMade * 2.25 + ":"
                + "property:" + this.amountMade * 2.35 + ":"
                + "income:" + this.amountMade * 2.13 + ":"
                + "total:" + this.amountMade * 2.68;

        return taxInfo;
    }
} 