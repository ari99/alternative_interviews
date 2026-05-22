export enum TeaType {
    Green = "green",
    Black = "black",
    Herbal = "herbal",
}

export interface Cup {
    type: string;
    color: string;
    material: string;
    sizeMl: number;
    weightGrams: number;
}

export interface TeaTaxInfo {
    teaType: TeaType;
    salesTax: number;
    propertyTax: number;
    incomeTax: number;
    totalTax: number;
}

export interface TeaPourResult {
    teaType: TeaType;
    amountRemaining: number;
}
