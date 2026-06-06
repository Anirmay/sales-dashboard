import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  className?: string;
  children: ReactNode;
}

export function Card({ title, className = "", children }: CardProps) {
  return (
    <section className={`rounded-3xl border border-zinc-200 bg-white/95 p-6 shadow-lg shadow-zinc-200/40 ${className}`}>
      {title ? (
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        </div>
      ) : null}
      {children}
    </section>
  );
}
