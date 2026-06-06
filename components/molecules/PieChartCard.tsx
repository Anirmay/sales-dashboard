"use client";

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartCard } from "@/components/molecules/ChartCard";
import type { SalesRecord } from "@/types/sales";

const COLORS = ["#6366f1", "#0ea5e9", "#10b981"]; // Indigo, Sky, Emerald

interface PieChartCardProps {
  records: SalesRecord[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: SalesRecord;
  }>;
  totalSales: number;
}

function CustomTooltip({ active, payload, totalSales }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const value = data.sales;
    const name = data.year;
    const percentage = totalSales > 0 ? ((value / totalSales) * 100).toFixed(1) : "0.0";
    return (
      <div className="rounded-2xl border border-slate-100/80 bg-white/95 p-3.5 shadow-xl shadow-slate-100/50 backdrop-blur-sm">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{`Year: ${name}`}</p>
        <div className="mt-1 flex flex-col gap-0.5">
          <p className="text-base font-black text-slate-800">
            {`$${Number(value).toLocaleString()}`}
          </p>
          <p className="text-xs font-semibold text-slate-500">
            {`${percentage}% of total`}
          </p>
        </div>
      </div>
    );
  }
  return null;
}

export function PieChartCard({ records }: PieChartCardProps) {
  const totalSales = records.reduce((sum, r) => sum + r.sales, 0);

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
            outerRadius={95}
            paddingAngle={4}
            stroke="transparent"
          >
            {records.map((entry, index) => (
              <Cell key={`cell-${entry.year}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip totalSales={totalSales} />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            iconSize={8}
            formatter={(value) => <span className="text-xs font-semibold text-slate-500 capitalize">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
