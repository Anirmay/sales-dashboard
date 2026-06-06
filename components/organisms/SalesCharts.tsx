"use client";

import type { SalesRecord } from "@/types/sales";
import { BarChartCard } from "@/components/molecules/BarChartCard";
import { LineChartCard } from "@/components/molecules/LineChartCard";
import { PieChartCard } from "@/components/molecules/PieChartCard";

interface SalesChartsProps {
  records: SalesRecord[];
}

export function SalesCharts({ records }: SalesChartsProps) {
  const validRecords = records ?? [];

  return (
    <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
      <div className="space-y-6">
        <BarChartCard records={validRecords} />
        <PieChartCard records={validRecords} />
      </div>
      <LineChartCard records={validRecords} />
    </div>
  );
}
