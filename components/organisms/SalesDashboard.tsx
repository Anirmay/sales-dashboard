"use client";

import { useMemo, useState } from "react";
import { FilterInput } from "@/components/molecules/FilterInput";
import { DashboardSummary } from "@/components/organisms/DashboardSummary";
import { SalesCharts } from "@/components/organisms/SalesCharts";
import { StatusMessage } from "@/components/atoms/StatusMessage";
import type { SalesRecord } from "@/types/sales";
import { salesData } from "@/data/mockSalesData";

export function SalesDashboard() {
  const [minimumSales, setMinimumSales] = useState(0);
  const [records] = useState<SalesRecord[]>(salesData);
  const [error] = useState<string | null>(null);

  const filteredRecords = useMemo(
    () => records.filter((record) => record.sales >= minimumSales),
    [minimumSales, records],
  );

  if (error) {
    return <StatusMessage title="Data load failed" description={error} />;
  }

  if (!filteredRecords.length) {
    return (
      <div className="space-y-6">
        <FilterInput value={minimumSales} onChange={setMinimumSales} />
        <StatusMessage
          title="No results"
          description="No sales records match the current threshold. Adjust the minimum sales value to view chart data."
        />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <DashboardSummary records={filteredRecords} />
        <FilterInput value={minimumSales} onChange={setMinimumSales} />
      </div>
      <SalesCharts records={filteredRecords} />
    </div>
  );
}
