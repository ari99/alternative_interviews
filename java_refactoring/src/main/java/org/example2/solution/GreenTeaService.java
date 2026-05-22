package org.example2.solution;

public class GreenTeaService extends TeaService {
    public GreenTeaService(int weight) {
        super(weight);
    }

    @Override
    protected TeaType getTeaType() {
        return TeaType.GREEN;
    }

    @Override
    protected void makeTeaType() {
        System.out.println("Having green tea");
        addAmountMade(getWeight() * .16 - .1);
        if (getTeaStrength() > 0) {
            System.out.println("Adding extra strength to green tea");
            addTeaStrength(1.1);
        }
    }

    @Override
    protected void pourTeaType() {
        System.out.println("Pouring green tea");
        System.out.println("Green tea has its origins in ancient China, where it has been consumed for thousands of years, particularly during the Tang and Song dynasties.");
        addAmountMade(-1.2);
    }
}
