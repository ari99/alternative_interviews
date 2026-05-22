export interface TaxInfo {
    salesTax: number;
    propertyTax: number;
    incomeTax: number;
    totalTax: number;
}

export function calculateTaxes(totalValue: number): TaxInfo {
    return {
        salesTax: totalValue * 0.1,
        propertyTax: totalValue * 0.2,
        incomeTax: totalValue * 0.3,
        totalTax: totalValue * 0.6,
    };
}
