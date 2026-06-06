"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard } from "@/components/molecules/ChartCard";
import type { SalesRecord } from "@/types/sales";

interface BarChartCardProps {
  records: SalesRecord[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number | string;
  }>;
  label?: string | number;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="rounded-2xl border border-slate-100/80 bg-white/95 p-3.5 shadow-xl shadow-slate-100/50 backdrop-blur-sm">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{`Year: ${label}`}</p>
        <div className="mt-1 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
          <p className="text-base font-black text-slate-800">
            {`$${Number(value).toLocaleString()}`}
          </p>
        </div>
      </div>
    );
  }
  return null;
}

export function BarChartCard({ records }: BarChartCardProps) {
  return (
    <ChartCard title="Yearly sales" description="Compare sales growth across three years using the bar chart.">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={records} margin={{ top: 10, right: 16, left: 16, bottom: 0 }}>
          <defs>
            <linearGradient id="barSalesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity={0.7} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f8fafc" }} />
          <Legend
            verticalAlign="top"
            height={36}
            iconType="circle"
            iconSize={8}
            formatter={(value) => <span className="text-xs font-semibold text-slate-500 capitalize">{value}</span>}
          />
          <Bar name="Sales" dataKey="sales" fill="url(#barSalesGradient)" radius={[8, 8, 0, 0]} barSize={48} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
