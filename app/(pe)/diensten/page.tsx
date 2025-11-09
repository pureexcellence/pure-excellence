import Link from "next/link";

export default function DienstenPage() {
  return (
    <main className="min-h-screen bg-brand.gray text-brand.dark">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-brand.dark mb-3">
          Diensten
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Modulair inzetbaar. Start klein, schaal wanneer je wil.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Quick Scan (5 dagen)",
              desc: "Snel inzicht in bottlenecks, met meetbare verbeteracties en ROI-schatting.",
              cta: "Plan Quick Scan",
              href: "/contact",
            },
            {
              title: "Performance & Productivity",
              desc: "Dashboards, meetplannen en shopfloor-ritme. Van dataverzameling tot gedrag.",
              cta: "Bespreek je case",
              href: "/contact",
            },
            {
              title: "Planning & Capaciteit",
              desc: "Weekmatrix, skills-matrix en volumescenario’s. Voorzie onder- of overbezetting op tijd.",
              cta: "Vraag voorstel",
              href: "/contact",
            },
            {
              title: "Coaching Teamleads",
              desc: "Dagstart, KPI’s, visueel management en probleemoplossing.",
              cta: "Meer info",
              href: "/contact",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <h2 className="text-xl font-semibold mb-2 text-brand.dark">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
              <Link
                href={item.href}
                className="inline-block text-brand.blue font-medium hover:underline"
              >
                {item.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t mt-20 py-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Pure Excellence — Operational Excellence in Logistiek.
      </footer>
    </main>
  );
}