package org.example2.solution;

import java.util.List;
import java.util.function.Supplier;

public class TeaClient {
    private static final List<TeaOrder> TEA_ORDERS = List.of(
            new TeaOrder(() -> new GreenTeaService(120), new Cup("mug", "white", "ceramic", 250, 300)),
            new TeaOrder(() -> new BlackTeaService(100), new Cup("cup", "blue", "glass", 200, 250)),
            new TeaOrder(() -> new HerbalTeaService(122), new Cup("teapot", "red", "metal", 500, 600))
    );

    public static void main(String[] args) {
        TeaClient client = new TeaClient();
        client.prepareOrders();
    }

    public void prepareOrders() {
        for (TeaOrder order : TEA_ORDERS) {
            TeaService tea = order.createTea();
            tea.makeTea();
            tea.pourTea(order.cup());
            payTaxes(tea.createTaxInfo());
        }
    }

    private void payTaxes(TeaTaxInfo taxInfo) {
        System.out.println("Paying total tax: " + taxInfo.getTotalTax() + " property tax: " + taxInfo.getPropertyTax());
        System.out.println("Paid total tax: " + taxInfo.getTotalTax() + " property tax: " + taxInfo.getPropertyTax());
    }

    private record TeaOrder(Supplier<TeaService> teaFactory, Cup cup) {
        private TeaService createTea() {
            return teaFactory.get();
        }
    }
}
