import type { ReactNode } from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function Heading({ title, subtitle, children }: HeadingProps) {
  return (
    <div className="space-y-3.5">
      <div className="space-y-2.5">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-600 ring-1 ring-indigo-600/10">
          Sales Intelligence
        </span>
        <h1 className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
          {title}
        </h1>
      </div>
      {subtitle ? <p className="max-w-2xl text-sm leading-relaxed text-slate-500 font-medium">{subtitle}</p> : null}
      {children}
    </div>
  );
}
