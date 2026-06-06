"use client";

import { useEffect, useMemo, useState } from "react";
import { FilterInput } from "@/components/molecules/FilterInput";
import { DashboardSummary } from "@/components/organisms/DashboardSummary";
import { SalesCharts } from "@/components/organisms/SalesCharts";
import { Spinner } from "@/components/atoms/Spinner";
import { StatusMessage } from "@/components/atoms/StatusMessage";
import type { SalesRecord } from "@/types/sales";
import { salesData } from "@/data/mockSalesData";

const loadData = async (): Promise<SalesRecord[]> => {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(salesData), 600);
  });
};

export function SalesDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [minimumSales, setMinimumSales] = useState(0);
  const [records, setRecords] = useState<SalesRecord[]>([]);

  useEffect(() => {
    async function initialize() {
      try {
        const data = await loadData();
        setRecords(data);
      } catch (err) {
        setError("Unable to load sales data. Please refresh the page.");
      } finally {
        setIsLoading(false);
      }
    }

    initialize();
  }, []);

  const filteredRecords = useMemo(
    () => records.filter((record) => record.sales >= minimumSales),
    [minimumSales, records],
  );

  if (isLoading) {
    return <Spinner />;
  }

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
