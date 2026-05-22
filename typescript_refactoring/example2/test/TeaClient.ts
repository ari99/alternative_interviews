import { TeaService } from './TeaService';

export class TeaClient {

    public static main(): void {
        let tea1 = new TeaService(120);
        tea1.makeTea("green");
        tea1.pourTea("green", "mug", "white", "ceramic", 250, 300);
        TeaClient.payTaxes(tea1, "green");

        let tea2 = new TeaService(100);
        tea2.makeTea("black");
        tea2.pourTea("black", "cup", "blue", "glass", 200, 250);
        TeaClient.payTaxes(tea2, "black");

        let tea3 = new TeaService(122);
        tea3.makeTea("herbal");
        tea3.pourTea("herbal", "teapot", "red", "metal", 500, 600);
        TeaClient.payTaxes(tea3, "black");
    }

    public static payTaxes(tea: TeaService, teaType: string): void {
        let teaOutput = tea.payTaxes(5, teaType);
        let splitOutput = teaOutput.split(":");
        let total = splitOutput[7];
        let propertyTax = splitOutput[3];
        console.log("Paying total tax: " + total + " property tax: " + propertyTax);
        console.log("Paid total tax: " + total + " property tax: " + propertyTax);
    }
} 