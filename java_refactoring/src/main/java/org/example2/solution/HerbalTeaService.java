package org.example2.solution;

public class HerbalTeaService extends TeaService {
    public HerbalTeaService(int weight) {
        super(weight);
    }

    @Override
    protected TeaType getTeaType() {
        return TeaType.HERBAL;
    }

    @Override
    protected void makeTeaType() {
        System.out.println("Giving herbal tea");
        addAmountMade(getWeight() * .12 - .02);
        if (getTeaStrength() > .2 && getTeaFlavor() < 0) {
            System.out.println("Adding extra herbal tea strength to herbal tea");
            addTeaStrength(-9.2);
        }
    }

    @Override
    protected void pourTeaType() {
        System.out.println("Herbal tea is pouring");
        System.out.println("Herbal teas have been used since ancient times in Egypt, Greece, and China for medicinal and ritual purposes, long before true tea was widespread.");
        addAmountMade(-1.1);
    }
}
