import Link from "next/link";
import { Heading } from "@/components/atoms/Heading";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-14">
          <Heading
            title="Modern Sales Intelligence"
            subtitle="Explore a responsive sales dashboard built with Next.js, TypeScript, Tailwind CSS, and Recharts. Navigate to the analytics workspace to view charts, filters, and summary metrics."
          />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
            >
              View Dashboard
            </Link>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-slate-300">
              <p className="text-sm leading-6">
                Dashboard page includes bar, line, and pie charts with a dynamic sales threshold filter for 2022–2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
