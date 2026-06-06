import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <label className="flex w-full flex-col gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
      <span>{label}</span>
      <input
        className={`w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none transition-all duration-200 hover:border-slate-300 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 ${className}`}
        {...props}
      />
    </label>
  );
}
