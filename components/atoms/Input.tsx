import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <label className="flex w-full flex-col gap-2 text-sm text-slate-700">
      <span className="font-medium">{label}</span>
      <input
        className={`w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 ${className}`}
        {...props}
      />
    </label>
  );
}
