package org.example.solution;

public class TaxInfo {
    private final double salesTax;
    private final double propertyTax;
    private final double incomeTax;
    private final double totalTax;

    public TaxInfo(double totalValue) {
        this.salesTax = totalValue * .1 ;
        this.propertyTax = totalValue * .2;
        this.incomeTax = totalValue * .3;
        this.totalTax = totalValue * .6;
    }

    public double getTotalTax() {
        return totalTax;
    }
    public double getPropertyTax() {
        return propertyTax;
    }

    @Override
    public String toString() {
        return "sales: " + salesTax + ":"
                + "property: " + propertyTax + ":"
                + "income: " + incomeTax + ":"
                + "total: " + totalTax;
    }


}
