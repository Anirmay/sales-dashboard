"use client";

import type { SalesRecord } from "@/types/sales";
import { BarChartCard } from "@/components/molecules/BarChartCard";
import { LineChartCard } from "@/components/molecules/LineChartCard";
import { PieChartCard } from "@/components/molecules/PieChartCard";

interface SalesChartsProps {
  records: SalesRecord[];
}

export function SalesCharts({ records }: SalesChartsProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
      <div className="space-y-6">
        <BarChartCard records={records} />
        <PieChartCard records={records} />
      </div>
      <LineChartCard records={records} />
    </div>
  );
}
