import { Heading } from "@/components/atoms/Heading";
import { SalesDashboard } from "@/components/organisms/SalesDashboard";

export const metadata = {
  title: "Dashboard | Sales Analytics",
  description: "Interactive sales analytics dashboard for 2022, 2023, and 2024.",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <header className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-xl shadow-slate-200/50">
          <Heading
            title="Sales performance dashboard"
            subtitle="Interactive charts, summary metrics, and a sales threshold filter for data-driven decision making."
          />
        </header>
        <section className="space-y-8">
          <SalesDashboard />
        </section>
      </div>
    </main>
  );
}
