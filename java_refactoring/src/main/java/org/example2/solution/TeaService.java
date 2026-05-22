package org.example2.solution;

public abstract class TeaService {
    private final int weight;
    private double amountMade = 0;
    private double teaStrength = 0;
    private double teaFlavor = 0;

    protected TeaService(int weight) {
        if (weight <= 0) {
            throw new IllegalArgumentException("Tea weight must be positive.");
        }
        this.weight = weight;
    }

    public final void makeTea() {
        makeTeaType();
        if (teaStrength / 5 > 50) {
            System.out.println("Tea on sale made");
            System.out.println("Saved $1 on tea on sale");
        }
    }

    public final TeaPourResult pourTea(Cup cup) {
        System.out.println(cup.describe());
        pourTeaType();
        return new TeaPourResult(getTeaType(), amountMade);
    }

    public final TeaTaxInfo createTaxInfo() {
        return new TeaTaxInfo(getTeaType(), amountMade);
    }

    protected abstract TeaType getTeaType();

    protected abstract void makeTeaType();

    protected abstract void pourTeaType();

    protected final int getWeight() {
        return weight;
    }

    protected final double getTeaStrength() {
        return teaStrength;
    }

    protected final double getTeaFlavor() {
        return teaFlavor;
    }

    protected final void addAmountMade(double amount) {
        amountMade += amount;
    }

    protected final void addTeaStrength(double amount) {
        teaStrength += amount;
    }

    protected final void addTeaFlavor(double amount) {
        teaFlavor += amount;
    }
}
