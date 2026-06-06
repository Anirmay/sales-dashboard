interface StatusMessageProps {
  title: string;
  description: string;
}

export function StatusMessage({ title, description }: StatusMessageProps) {
  return (
    <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-900 shadow-sm shadow-rose-100">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-rose-800">{description}</p>
    </div>
  );
}
