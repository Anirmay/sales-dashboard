import { Input } from "@/components/atoms/Input";

interface FilterInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function FilterInput({ value, onChange }: FilterInputProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-100">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Sales filter</p>
          <p className="text-sm text-slate-500">Enter a minimum sales threshold to refine the dashboard.</p>
        </div>
        <Input
          label="Minimum sales"
          type="number"
          value={value}
          min={0}
          onChange={(event) => onChange(Number(event.target.value))}
          className="max-w-[210px]"
        />
      </div>
    </div>
  );
}
