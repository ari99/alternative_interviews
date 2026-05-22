package org.example2.solution;

public class TeaTaxInfo {
    private final TeaType teaType;
    private final double salesTax;
    private final double propertyTax;
    private final double incomeTax;
    private final double totalTax;

    public TeaTaxInfo(TeaType teaType, double amountMade) {
        this.teaType = teaType;
        this.salesTax = amountMade * 2.25;
        this.propertyTax = amountMade * 2.35;
        this.incomeTax = amountMade * 2.13;
        this.totalTax = amountMade * 2.68;
    }

    public TeaType getTeaType() {
        return teaType;
    }

    public double getPropertyTax() {
        return propertyTax;
    }

    public double getTotalTax() {
        return totalTax;
    }

    @Override
    public String toString() {
        return teaType + " sales:" + salesTax + ":"
                + "property:" + propertyTax + ":"
                + "income:" + incomeTax + ":"
                + "total:" + totalTax;
    }
}
