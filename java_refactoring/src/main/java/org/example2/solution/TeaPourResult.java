package org.example2.solution;

public class TeaPourResult {
    private final TeaType teaType;
    private final double amountRemaining;

    public TeaPourResult(TeaType teaType, double amountRemaining) {
        this.teaType = teaType;
        this.amountRemaining = amountRemaining;
    }

    public TeaType getTeaType() {
        return teaType;
    }

    public double getAmountRemaining() {
        return amountRemaining;
    }
}
