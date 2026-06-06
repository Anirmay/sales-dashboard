import { Input } from "@/components/atoms/Input";

interface FilterInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function FilterInput({ value, onChange }: FilterInputProps) {
  return (
    <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-100/30">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-slate-800 tracking-tight">Dynamic Sales Threshold</h3>
          <p className="text-xs text-slate-400 font-semibold">Refine analytics by filtering out sales below the threshold.</p>
        </div>
        <div className="flex flex-1 max-w-2xl flex-col sm:flex-row items-center gap-6 w-full">
          <div className="flex flex-col gap-2 flex-1 w-full">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Slide to adjust: <span className="text-indigo-600 font-extrabold font-mono">${value.toLocaleString()}</span>
            </span>
            <input
              type="range"
              min="0"
              max="100000"
              step="5000"
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <div className="w-full sm:w-auto sm:min-w-[180px]">
            <Input
              label="Or enter amount"
              type="number"
              value={value}
              min={0}
              onChange={(event) => onChange(Number(event.target.value))}
              className="font-mono font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
