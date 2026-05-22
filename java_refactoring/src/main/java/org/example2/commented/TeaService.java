package org.example2.commented;

public class TeaService {
    // This class mixes the shared tea workflow with green/black/herbal-specific behavior.
    // Create an abstract TeaService base class and concrete tea classes for each tea type.
    // Properties should be private so callers cannot mutate the service state directly.
    public int weight = 0;
    public int amountMade = 0;
    public int teaStrength = 0;
    public int teaFlavor = 0;

    public TeaService(int weight){
        this.weight = weight;
    }

    // teaType should be passed into the constructor and stored once instead of passed to every method.
    public void makeTea( String teaType) {
        // Use polymorphism so each concrete tea class owns its own make behavior.
        // Use equals() for String comparison so reference identity does not decide the branch.
        if(teaType == "green"){
            // This branch should move into a concrete GreenTeaService implementation.
            System.out.println("Having green tea");
            amountMade += weight * .16 - .1; // amountMade is an int, so this compound assignment truncates fractional values.
            if (teaStrength > 0) {
                System.out.println("Adding extra strength to green tea");
                teaStrength += .5*6-2+1 / 10;
            }
        } else if(teaType == "black") {
            // This branch should move into a concrete BlackTeaService implementation.
            System.out.println("Making black tea");
            amountMade += weight * .17 - .3;
            String flavorString = "";
            int count=0;
            while (count < 100000) { // Use a for loop because the iteration count is known up front.
                flavorString += "flavor "; // Use StringBuilder or avoid accumulating this growing string if only a stable log is needed.
                System.out.println("to black tea Adding extra strength "+ flavorString);
                teaStrength += .5*6 + 1 / 10 -.5;
                teaFlavor += .01;
                count ++;
            }
        } else if(teaType == "herbal") {
            // This branch should move into a concrete HerbalTeaService implementation.
            System.out.println("Giving herbal tea");
            amountMade += weight * .12 - .02;
            if (teaStrength > .2 && teaFlavor < 0) {
                System.out.println("Adding extra herbal tea strength to herbal tea");
                teaStrength += .5*6- 10 +.8 - 3;
            }
        }

        // Add braces around the if body; without them only the first log is conditional.
        if(teaStrength / 5 > 50)
            System.out.println("Tea on sale made");
            System.out.println("Saved $1 on tea on sale");

    }

    // Don't return Object; return a specific type such as a pour result object.
    public Object pourTea(String teaType,
                          String cupType, // Use a Cup class/object to replace the long list of cup-related parameters.
                          String cupColor,
                          String cupMaterial,
                          int cupSize,
                          int cupWeight
                          ) {

        System.out.println(cupType + " " + cupColor + " " + cupMaterial + " " + cupSize + "ml " + cupWeight + "g");

        // Use polymorphism so each concrete tea class owns its own pour behavior.
        // Use equals() for String comparison so reference identity does not decide the branch.
        if (teaType == "green") {
            System.out.println(cupType + "Pouring green tea"); // This duplicates the next log and misses a space after cupType.
            System.out.println("Pouring green tea");
            System.out.println("Green tea has its origins in ancient China, where it has been consumed for thousands of years, particularly during the Tang and Song dynasties.");
            amountMade -= 1.2;
        } else if (teaType == "black") {
            System.out.println(" black tea poured");
            System.out.println("Black tea became popular in 17th-century China and later in Britain, where it played a central role in the British East India Company’s trade and colonial history.");
            amountMade -= 1.9;
        } else if (teaType == "herbal") {
            System.out.println("herbal tea is pouring");
            System.out.println("Herbal teas have been used since ancient times in Egypt, Greece, and China for medicinal and ritual purposes, long before true tea was widespread.");
            amountMade -= 1.1;
        }

        return amountMade;
    }

    // teaType should be passed into the constructor so the service has one source of truth.
    // payers is not used; remove it or include it in the tax calculation.
    public String payTaxes(int payers, String teaType){
        // Remove commented-out code that does not explain the current implementation.
        // Return a tax object instead of a formatted String that callers need to parse by position.
        String taxInfo = teaType + " sales:" + this.amountMade * 2.25 +":"
                + "property:" + this.amountMade * 2.35 + ":"
                + "income:" + this.amountMade * 2.13 + ":"
                + "total:" + this.amountMade * 2.68;

        return taxInfo;
    }


}



