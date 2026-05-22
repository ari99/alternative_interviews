import { TeaService } from './TeaService';


export class TeaClient {

    // Move workflow logic out of static context so it can be tested with dependencies.
    public static main(): void {
        // Extract the repeated tea preparation workflow into a function that accepts tea type, weight, and cup.
        let tea1 = new TeaService(120);
        tea1.makeTea("green");
        // Use a Cup class/object to replace the long list of cup-related parameters.
        tea1.pourTea("green", "mug", "white", "ceramic", 250, 300);
        TeaClient.payTaxes(tea1, "green");

        // Use const instead of let because this service reference is not reassigned; add a type annotation if required.
        let tea2 = new TeaService(100);
        tea2.makeTea("black");
        tea2.pourTea("black", "cup", "blue", "glass", 200, 250);
        TeaClient.payTaxes(tea2, "black");

        let tea3 = new TeaService(122);
        tea3.makeTea("herbal");
        tea3.pourTea("herbal", "teapot", "red", "metal", 500, 600);
        TeaClient.payTaxes(tea3, "black"); // BUG: this should use herbal so taxes are labeled with the correct tea type.
    }

    
    public static payTaxes(tea: TeaService, teaType: string): void {
        // The first parameter passed to TeaService.payTaxes is not used, so remove it or make the value meaningful.
        let teaOutput = tea.payTaxes(5, teaType);
        // Return a tax object instead of splitting a positional string and relying on array indexes.
        let splitOutput = teaOutput.split(":");
        let total = splitOutput[7];
        let propertyTax = splitOutput[3];
        console.log("Paying total tax: " + total + " property tax: " + propertyTax);
        console.log("Paid total tax: " + total + " property tax: " + propertyTax);
    }
} 