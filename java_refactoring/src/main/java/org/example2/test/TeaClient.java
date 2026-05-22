package org.example2.test;


public class TeaClient {

    public static void main(String[] args) {

        TeaService tea1 = new TeaService(120);
        tea1.makeTea("green");
        tea1.pourTea("green", "mug", "white", "ceramic", 250, 300);
        TeaClient.payTaxes(tea1, "green");

        TeaService tea2 = new TeaService(100);
        tea2.makeTea("black");
        tea2.pourTea("black", "cup", "blue", "glass", 200, 250);
        TeaClient.payTaxes(tea2, "black");

        TeaService tea3 = new TeaService(122);
        tea3.makeTea("herbal");
        tea3.pourTea("herbal", "teapot", "red", "metal", 500, 600);
        TeaClient.payTaxes(tea3, "black");

    }


    public static void payTaxes(TeaService tea, String teaType) {
        String teaOutput = tea.payTaxes(5, teaType);
        String[] splitOutput = teaOutput.split(":");
        String total = splitOutput[7];
        String propertyTax  = splitOutput[3];
        System.out.println("Paying total tax: " + total + " property tax: " + propertyTax);
        System.out.println("Paid total tax: " + total + " property tax: " + propertyTax);

    }

}