package org.example2.solution;

public class BlackTeaService extends TeaService {
    private static final int FLAVOR_STEPS = 100000;

    public BlackTeaService(int weight) {
        super(weight);
    }

    @Override
    protected TeaType getTeaType() {
        return TeaType.BLACK;
    }

    @Override
    protected void makeTeaType() {
        System.out.println("Making black tea");
        addAmountMade(getWeight() * .17 - .3);
        for (int count = 0; count < FLAVOR_STEPS; count++) {
            System.out.println("Adding extra strength to black tea");
            addTeaStrength(2.6);
            addTeaFlavor(.01);
        }
    }

    @Override
    protected void pourTeaType() {
        System.out.println("Black tea poured");
        System.out.println("Black tea became popular in 17th-century China and later in Britain, where it played a central role in the British East India Company's trade and colonial history.");
        addAmountMade(-1.9);
    }
}
