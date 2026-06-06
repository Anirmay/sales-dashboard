import type { ReactNode } from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function Heading({ title, subtitle, children }: HeadingProps) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-600">
          Sales dashboard
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h1>
      </div>
      {subtitle ? <p className="max-w-2xl text-sm leading-6 text-slate-600">{subtitle}</p> : null}
      {children}
    </div>
  );
}
