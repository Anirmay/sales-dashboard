"use client";

import { useState } from "react";
import type { SalesRecord } from "@/types/sales";
import { BarChartCard } from "@/components/molecules/BarChartCard";
import { LineChartCard } from "@/components/molecules/LineChartCard";
import { PieChartCard } from "@/components/molecules/PieChartCard";
import { Card } from "@/components/atoms/Card";

interface SalesChartsProps {
  records: SalesRecord[];
}

export function SalesCharts({ records }: SalesChartsProps) {
  const [activeChart, setActiveChart] = useState<"bar" | "line" | "pie">("bar");
  const validRecords = records ?? [];

  return (
    <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
      {/* Chart Section */}
      <div className="flex flex-col gap-6">
        {/* Switcher Controls */}
        <div className="rounded-[2.2rem] border border-slate-100/80 bg-white p-4 shadow-xl shadow-slate-100/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-sm font-extrabold text-slate-800 tracking-tight pl-2">Select Visualization:</span>
          <div className="flex items-center gap-1 rounded-2xl bg-slate-50 border border-slate-100/50 p-1">
            <button
              onClick={() => setActiveChart("bar")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeChart === "bar"
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-100/30"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Bar Chart
            </button>
            <button
              onClick={() => setActiveChart("line")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeChart === "line"
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-100/30"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Line Chart
            </button>
            <button
              onClick={() => setActiveChart("pie")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeChart === "pie"
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-100/30"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Pie Chart
            </button>
          </div>
        </div>

        {/* Selected Chart Card */}
        <div className="transition-all duration-300">
          {activeChart === "bar" && <BarChartCard records={validRecords} />}
          {activeChart === "line" && <LineChartCard records={validRecords} />}
          {activeChart === "pie" && <PieChartCard records={validRecords} />}
        </div>
      </div>

      {/* Sales Ledger & Growth analytics card */}
      <Card title="Sales Ledger & Growth" className="flex flex-col justify-between h-full min-h-[440px]">
        <div className="space-y-4">
          <p className="text-xs font-semibold text-slate-400 leading-relaxed">
            A tabular view of the filtered dataset with year-over-year (YoY) growth calculations.
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50">
            <table className="min-w-full divide-y divide-slate-100 text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-4 py-3">Year</th>
                  <th className="px-4 py-3">Sales</th>
                  <th className="px-4 py-3 text-right">YoY Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {validRecords.map((record) => {
                  let yoyGrowth: string | null = null;
                  const sorted = [...validRecords].sort((a, b) => a.year - b.year);
                  const sortedIndex = sorted.findIndex((r) => r.year === record.year);

                  if (sortedIndex > 0) {
                    const prevSales = sorted[sortedIndex - 1].sales;
                    if (prevSales > 0) {
                      const diff = record.sales - prevSales;
                      const pct = (diff / prevSales) * 100;
                      yoyGrowth = (pct >= 0 ? "+" : "") + pct.toFixed(1) + "%";
                    }
                  }

                  return (
                    <tr key={record.year} className="hover:bg-slate-100/30 transition-colors">
                      <td className="px-4 py-3.5 text-slate-900 font-bold">{record.year}</td>
                      <td className="px-4 py-3.5 font-mono font-semibold">${record.sales.toLocaleString()}</td>
                      <td className="px-4 py-3.5 text-right">
                        {yoyGrowth ? (
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold ${
                              yoyGrowth.startsWith("+")
                                ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10"
                                : "bg-rose-50 text-rose-700 ring-1 ring-rose-600/10"
                            }`}
                          >
                            {yoyGrowth}
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs font-semibold">Base Year</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insight section */}
        <div className="mt-6 rounded-2xl bg-indigo-50/40 p-4 border border-indigo-100/20">
          <h4 className="text-[10px] font-bold text-indigo-950 uppercase tracking-wider">Performance Insight</h4>
          <p className="mt-1 text-xs leading-relaxed text-slate-500 font-semibold">
            {validRecords.length > 1 ? (
              <>
                Sales expanded from <strong className="text-slate-700">${[...validRecords].sort((a, b) => a.sales - b.sales)[0].sales.toLocaleString()}</strong> to <strong className="text-slate-700">${[...validRecords].sort((a, b) => a.sales - b.sales)[validRecords.length - 1].sales.toLocaleString()}</strong> across the active years, demonstrating upward business momentum.
              </>
            ) : (
              "Insufficient data range to calculate year-over-year performance trend. Adjust filters to load more years."
            )}
          </p>
        </div>
      </Card>
    </div>
  );
}
