import Link from "next/link";
import { Heading } from "@/components/atoms/Heading";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 sm:px-10 lg:px-16 flex items-center justify-center relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 relative z-10">
        <div className="rounded-[2.5rem] border border-slate-100 bg-white/80 p-8 sm:p-12 md:p-16 shadow-2xl shadow-slate-200/50 backdrop-blur-xl">
          <Heading
            title="Modern Sales Intelligence"
            subtitle="Explore a responsive sales dashboard built with Next.js, TypeScript, Tailwind CSS, and Recharts. Navigate to the analytics workspace to view interactive charts, range filters, and real-time summary metrics."
          />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:bg-indigo-500 hover:shadow-indigo-600/35 hover:-translate-y-0.5 cursor-pointer"
            >
              Enter Dashboard
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5 text-slate-500 flex-1">
              <p className="text-xs font-semibold leading-relaxed">
                Dashboard features interactive bar, line, and pie visualizations, real-time YoY growth ledger tables, and dynamic threshold sliders for 2022–2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
