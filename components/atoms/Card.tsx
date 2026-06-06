import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  className?: string;
  children: ReactNode;
}

export function Card({ title, className = "", children }: CardProps) {
  return (
    <section className={`rounded-[2rem] border border-slate-100/80 bg-white p-6 md:p-7 shadow-xl shadow-slate-100/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/40 hover:border-slate-200/50 ${className}`}>
      {title ? (
        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold tracking-tight text-slate-900">{title}</h2>
        </div>
      ) : null}
      {children}
    </section>
  );
}
