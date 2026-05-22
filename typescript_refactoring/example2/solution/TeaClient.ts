import { BlackTeaService } from "./BlackTeaService";
import { GreenTeaService } from "./GreenTeaService";
import { HerbalTeaService } from "./HerbalTeaService";
import { TeaService } from "./TeaService";
import { Cup, TeaTaxInfo } from "./TeaTypes";

const teaOrders: Array<{ createTea: () => TeaService; cup: Cup }> = [
    {
        createTea: () => new GreenTeaService(120),
        cup: { type: "mug", color: "white", material: "ceramic", sizeMl: 250, weightGrams: 300 },
    },
    {
        createTea: () => new BlackTeaService(100),
        cup: { type: "cup", color: "blue", material: "glass", sizeMl: 200, weightGrams: 250 },
    },
    {
        createTea: () => new HerbalTeaService(122),
        cup: { type: "teapot", color: "red", material: "metal", sizeMl: 500, weightGrams: 600 },
    },
];

export class TeaClient {
    public static main(): void {
        const client = new TeaClient();
        client.prepareOrders();
    }

    public prepareOrders(): void {
        for (const order of teaOrders) {
            const tea = order.createTea();
            tea.makeTea();
            tea.pourTea(order.cup);
            this.payTaxes(tea.createTaxInfo());
        }
    }

    private payTaxes(taxInfo: TeaTaxInfo): void {
        console.log(`Paying total tax: ${taxInfo.totalTax} property tax: ${taxInfo.propertyTax}`);
        console.log(`Paid total tax: ${taxInfo.totalTax} property tax: ${taxInfo.propertyTax}`);
    }
}
