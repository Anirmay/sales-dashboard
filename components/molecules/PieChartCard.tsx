"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { ValueType } from "recharts";
import { ChartCard } from "@/components/molecules/ChartCard";
import type { SalesRecord } from "@/types/sales";

const COLORS = ["#4338ca", "#22c55e", "#f97316"];

interface PieChartCardProps {
  records: SalesRecord[];
}

function formatSalesValue(value: ValueType | undefined) {
  const numericValue = Array.isArray(value)
    ? Number(value[0] ?? 0)
    : Number(value ?? 0);

  return `$${numericValue.toLocaleString()}`;
}

export function PieChartCard({ records }: PieChartCardProps) {
  return (
    <ChartCard title="Sales distribution" description="Review how each year contributes to total revenue.">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={records}
            dataKey="sales"
            nameKey="year"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={4}
            stroke="transparent"
          >
            {records.map((entry, index) => (
              <Cell key={`cell-${entry.year}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: ValueType | undefined) => [formatSalesValue(value), "Sales"]} />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
