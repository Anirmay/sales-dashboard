import Link from "next/link";
import { Heading } from "@/components/atoms/Heading";
import { SalesDashboard } from "@/components/organisms/SalesDashboard";

export const metadata = {
  title: "Dashboard | Sales Analytics",
  description: "Interactive sales analytics dashboard for 2022, 2023, and 2024.",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 sm:px-10 lg:px-16 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-200/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-emerald-200/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl space-y-8 relative z-10">
        <header className="rounded-[2.5rem] border border-slate-100 bg-white/85 p-8 md:p-10 shadow-2xl shadow-slate-100/50 backdrop-blur-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Heading
            title="Sales performance dashboard"
            subtitle="Interactive charts, summary metrics, and a sales threshold filter for data-driven decision making."
          />
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-100 px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-800 cursor-pointer self-start md:self-auto"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </header>
        <section className="space-y-8">
          <SalesDashboard />
        </section>
      </div>
    </main>
  );
}
