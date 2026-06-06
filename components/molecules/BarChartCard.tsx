"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { TooltipValueType } from "recharts";
import { ChartCard } from "@/components/molecules/ChartCard";
import type { SalesRecord } from "@/types/sales";

interface BarChartCardProps {
  records: SalesRecord[];
}

function formatSalesValue(value: TooltipValueType | undefined) {
  const numericValue = Array.isArray(value)
    ? Number(value[0] ?? 0)
    : Number(value ?? 0);

  return `$${numericValue.toLocaleString()}`;
}

export function BarChartCard({ records }: BarChartCardProps) {
  return (
    <ChartCard title="Yearly sales" description="Compare sales growth across three years using the bar chart.">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={records} margin={{ top: 10, right: 16, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="year" tickLine={false} axisLine={false} tick={{ fill: "#475569" }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "#475569" }} />
          <Tooltip formatter={(value) => [formatSalesValue(value), "Sales"]} />
          <Bar dataKey="sales" fill="#6366f1" radius={[12, 12, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
