interface StatusMessageProps {
  title: string;
  description: string;
  type?: "error" | "info";
}

export function StatusMessage({ title, description, type = "error" }: StatusMessageProps) {
  const isError = type === "error";
  return (
    <div
      className={`rounded-[2rem] border p-6 md:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 ${
        isError
          ? "border-rose-100 bg-rose-50/50 text-rose-900 shadow-rose-100/30"
          : "border-slate-100 bg-slate-50/50 text-slate-900 shadow-slate-100/30"
      }`}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
          isError ? "bg-rose-100 text-rose-600" : "bg-indigo-50 text-indigo-600"
        }`}
      >
        {isError ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        )}
      </div>
      <div>
        <h3 className="text-base font-bold tracking-tight">{title}</h3>
        <p className={`mt-0.5 text-sm ${isError ? "text-rose-700" : "text-slate-500 font-medium"}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
