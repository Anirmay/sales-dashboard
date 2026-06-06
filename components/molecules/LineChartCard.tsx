"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard } from "@/components/molecules/ChartCard";
import type { SalesRecord } from "@/types/sales";

interface LineChartCardProps {
  records: SalesRecord[];
}

function formatSalesValue(value: unknown) {
  const numericValue = Array.isArray(value)
    ? Number(value[0] ?? 0)
    : Number(value ?? 0);

  return `$${numericValue.toLocaleString()}`;
}

export function LineChartCard({ records }: LineChartCardProps) {
  return (
    <ChartCard title="Sales trend" description="Visualize the year-over-year trend with a smooth line chart.">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={records} margin={{ top: 10, right: 18, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="year" tickLine={false} axisLine={false} tick={{ fill: "#475569" }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "#475569" }} />
          <Tooltip formatter={(value: unknown) => [formatSalesValue(value), "Sales"]} />
          <Line type="monotone" dataKey="sales" stroke="#0ea5e9" strokeWidth={4} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
