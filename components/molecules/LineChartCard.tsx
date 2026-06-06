"use client";

import {
  CartesianGrid,
  Legend,
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
          <div className="h-2.5 w-2.5 rounded-full bg-sky-500" />
          <p className="text-base font-black text-slate-800">
            {`$${Number(value).toLocaleString()}`}
          </p>
        </div>
      </div>
    );
  }
  return null;
}

export function LineChartCard({ records }: LineChartCardProps) {
  return (
    <ChartCard title="Sales trend" description="Visualize the year-over-year trend with a smooth line chart.">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={records} margin={{ top: 10, right: 18, left: 16, bottom: 0 }}>
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
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            iconType="circle"
            iconSize={8}
            formatter={(value) => <span className="text-xs font-semibold text-slate-500 capitalize">{value}</span>}
          />
          <Line
            name="Sales"
            type="monotone"
            dataKey="sales"
            stroke="#0ea5e9"
            strokeWidth={4}
            dot={{ r: 5, fill: "#ffffff", stroke: "#0ea5e9", strokeWidth: 3 }}
            activeDot={{ r: 7, fill: "#0ea5e9", stroke: "#ffffff", strokeWidth: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
