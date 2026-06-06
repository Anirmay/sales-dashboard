import { Card } from "@/components/atoms/Card";

interface SummaryCardProps {
  label: string;
  value: string;
  detail: string;
}

export function SummaryCard({ label, value, detail }: SummaryCardProps) {
  return (
    <Card className="bg-slate-950 text-white">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{label}</p>
        <p className="text-3xl font-semibold">{value}</p>
        <p className="text-sm text-slate-300">{detail}</p>
      </div>
    </Card>
  );
}
