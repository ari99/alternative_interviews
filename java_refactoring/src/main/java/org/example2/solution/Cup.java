package org.example2.solution;

public class Cup {
    private final String type;
    private final String color;
    private final String material;
    private final int sizeMl;
    private final int weightGrams;

    public Cup(String type, String color, String material, int sizeMl, int weightGrams) {
        if (sizeMl <= 0 || weightGrams <= 0) {
            throw new IllegalArgumentException("Cup size and weight must be positive.");
        }
        this.type = type;
        this.color = color;
        this.material = material;
        this.sizeMl = sizeMl;
        this.weightGrams = weightGrams;
    }

    public String describe() {
        return type + " " + color + " " + material + " " + sizeMl + "ml " + weightGrams + "g";
    }
}
