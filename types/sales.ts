export interface SalesRecord {
  year: number;
  sales: number;
}

export interface SalesSummary {
  totalSales: number;
  averageSales: number;
  highestSalesYear: SalesRecord;
}
