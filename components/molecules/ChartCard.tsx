import type { ReactNode } from "react";
import { Card } from "@/components/atoms/Card";

interface ChartCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function ChartCard({ title, description, children }: ChartCardProps) {
  return (
    <Card>
      <div className="mb-4 flex items-start justify-between gap-4 sm:items-center">
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>
      <div className="h-[320px]">{children}</div>
    </Card>
  );
}
