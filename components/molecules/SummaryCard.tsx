import { Card } from "@/components/atoms/Card";
import type { ReactNode } from "react";

interface SummaryCardProps {
  label: string;
  value: string;
  detail: string;
  theme?: "emerald" | "indigo" | "cyan";
  icon?: ReactNode;
}

export function SummaryCard({ label, value, detail, theme = "indigo", icon }: SummaryCardProps) {
  const themeStyles = {
    emerald: {
      bg: "bg-gradient-to-br from-emerald-50/70 to-teal-50/20 border-emerald-100/80 hover:border-emerald-200/90 shadow-emerald-50/50",
      iconBg: "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20",
    },
    indigo: {
      bg: "bg-gradient-to-br from-indigo-50/70 to-purple-50/20 border-indigo-100/80 hover:border-indigo-200/90 shadow-indigo-50/50",
      iconBg: "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20",
    },
    cyan: {
      bg: "bg-gradient-to-br from-cyan-50/70 to-sky-50/20 border-cyan-100/80 hover:border-cyan-200/90 shadow-cyan-50/50",
      iconBg: "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20",
    },
  }[theme];

  return (
    <Card className={`border border-slate-100/50 hover:border-slate-200 ${themeStyles.bg} flex flex-col justify-between overflow-hidden relative group`}>
      {/* Decorative background glow */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/40 blur-xl group-hover:scale-150 transition-all duration-500" />
      
      <div className="flex items-start justify-between gap-4 relative z-10">
        <div className="space-y-1.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
          <p className="text-3xl font-black tracking-tight text-slate-800 md:text-4xl leading-none">
            {value}
          </p>
        </div>
        {icon ? (
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${themeStyles.iconBg}`}>
            {icon}
          </div>
        ) : null}
      </div>
      
      <div className="mt-4 pt-3.5 border-t border-slate-200/40 relative z-10">
        <span className="text-xs font-semibold text-slate-500 leading-relaxed">
          {detail}
        </span>
      </div>
    </Card>
  );
}
