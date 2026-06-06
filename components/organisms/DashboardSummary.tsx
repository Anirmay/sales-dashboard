import { SummaryCard } from "@/components/molecules/SummaryCard";
import type { SalesRecord } from "@/types/sales";

interface DashboardSummaryProps {
  records: SalesRecord[];
}

function formatCurrency(value: number) {
  return `$${value.toLocaleString()}`;
}

export function DashboardSummary({ records }: DashboardSummaryProps) {
  const totalSales = records.reduce((sum, record) => sum + record.sales, 0);
  const averageSales = records.length ? Math.round(totalSales / records.length) : 0;
  const highestSalesYear = records.length
    ? records.reduce((prev, current) => (current.sales > prev.sales ? current : prev), records[0])
    : { year: 0, sales: 0 };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <SummaryCard
        label="Total Sales"
        value={formatCurrency(totalSales)}
        detail="All years combined in the current report."
      />
      <SummaryCard
        label="Highest Sales Year"
        value={`${highestSalesYear.year}`}
        detail={`${formatCurrency(highestSalesYear.sales)} in the strongest year.`}
      />
      <SummaryCard
        label="Average Sales"
        value={formatCurrency(averageSales)}
        detail="Average revenue per year after filtering."
      />
    </div>
  );
}
