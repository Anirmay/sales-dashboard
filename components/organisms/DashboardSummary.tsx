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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <SummaryCard
        label="Total Sales"
        value={formatCurrency(totalSales)}
        detail="All years combined in the current report."
        theme="emerald"
        icon={
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
      <SummaryCard
        label="Highest Sales Year"
        value={`${highestSalesYear.year}`}
        detail={`${formatCurrency(highestSalesYear.sales)} in the strongest year.`}
        theme="indigo"
        icon={
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.252.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.772-.559-.372-1.81.588-1.81h4.906a1 1 0 00.95-.69l1.519-4.674z" />
          </svg>
        }
      />
      <SummaryCard
        label="Average Sales"
        value={formatCurrency(averageSales)}
        detail="Average revenue per year after filtering."
        theme="cyan"
        icon={
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        }
      />
    </div>
  );
}
