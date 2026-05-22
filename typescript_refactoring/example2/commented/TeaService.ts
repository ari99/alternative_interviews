
export class TeaService {
    // This class mixes the shared tea workflow with green/black/herbal-specific behavior.
    // Create an abstract TeaService base class and concrete tea classes for each tea type.
    // Properties should be private so callers cannot mutate the service state directly.
    // Add explicit property types if the exercise expects candidates to practice TypeScript annotations.
    public weight = 0;
    public amountMade = 0;
    public teaStrength = 0;
    public teaFlavor = 0;

    constructor(weight) {
        this.weight = weight;
    }

    // teaType should be passed into the constructor and stored once instead of passed to every method.
    // Add an explicit void return type to document that this method mutates internal state.
    makeTea(teaType) {
        // Use polymorphism so each concrete tea class owns its own make behavior.
        // Use === for string comparison so the branch does not rely on type coercion.
        if (teaType == "green") {
            // This branch should move into a concrete GreenTeaService implementation.
            console.log("Having green tea");
            this.amountMade += this.weight * 0.16 - 0.1;
            if (this.teaStrength > 0) {
                console.log("Adding extra strength to green tea");
                this.teaStrength += 0.5 * 6 - 2 + 1 / 10;
            }
        } else if (teaType == "black") {
            // This branch should move into a concrete BlackTeaService implementation.
            console.log("Making black tea");
            this.amountMade += this.weight * 0.17 - 0.3;
            // Use a for loop because the iteration count is known up front.
            // Avoid repeatedly growing a large string inside a hot loop when the accumulated value is not needed.
            // Better approach: log a stable message, or collect fragments deliberately if the final text is required.
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
            // This branch should move into a concrete HerbalTeaService implementation.
            console.log("Giving herbal tea");
            this.amountMade += this.weight * 0.12 - 0.02;
            if (this.teaStrength > 0.2 && this.teaFlavor < 0) {
                console.log("Adding extra herbal tea strength to herbal tea");
                this.teaStrength += 0.5 * 6 - 10 + 0.8 - 3;
            }
        }

        // Add braces around the if body; without them only the first log is conditional.
        if (this.teaStrength / 5 > 50)
            console.log("Tea on sale made");
            console.log("Saved $1 on tea on sale");
    }

    // Don't return any; return a specific type such as a pour result object.
    // Use a Cup class/object to replace the long list of cup-related parameters.
    pourTea(teaType: string,
            cupType: string, 
            cupColor: string,
            cupMaterial: string,
            cupSize: number,
            cupWeight: number): any {

        console.log(cupType + " " + cupColor + " " + cupMaterial + " " + cupSize + "ml " + cupWeight + "g");

        // Use polymorphism so each concrete tea class owns its own pour behavior.
        // Use === for string comparison so the branch does not rely on type coercion.
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

    // teaType should be passed into the constructor so the service has one source of truth.
    // payers is not used; remove it or include it in the tax calculation.
    // Return a tax object instead of a formatted String that callers need to parse by position.
    payTaxes(payers: number, teaType: string): string {
        // Remove commented-out code that does not explain the current implementation.
        // Use const instead of let, and add a type annotation if explicit types are required.
        let taxInfo = teaType + " sales:" + this.amountMade * 2.25 + ":"
                + "property:" + this.amountMade * 2.35 + ":"
                + "income:" + this.amountMade * 2.13 + ":"
                + "total:" + this.amountMade * 2.68;

        return taxInfo;
    }
} 