package org.example.solution;

// This class isn't being used currently but included for demonstration purposes
public enum FarmType {
    CATTLE,
    FISH,
    CROPS;

    public boolean equalsIgnoreCase(String other) {
        return this.name().equalsIgnoreCase(other);
    }

    public static FarmType fromString(String value) {
        for (FarmType type : FarmType.values()) {
            if (type.equalsIgnoreCase(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException("No enum constant for value: " + value);
    }

}
