import Container from "@/components/pe/Container";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-white to-slate-50">
        <Container className="py-16 md:py-24">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-pe-ink md:text-5xl">
            Pure Excellence — maak je logistiek <span className="text-pe-primary">zichtbaar, schaalbaar en winstgevend</span>
          </h1>
          <p className="mt-5 max-w-2xl text-slate-600">
            25 jaar logistieke ervaring vertaald naar slimme tools en no-nonsense diensten:
            dashboards, quick scans, planning, productiviteit en coaching.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/scan" className="rounded bg-pe-primary px-4 py-2 text-white hover:bg-pe-primary/90">Start een gratis Quick Scan</Link>
            <Link href="/diensten" className="rounded border px-4 py-2 text-pe-ink hover:bg-slate-50">Bekijk diensten</Link>
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        <h2 className="text-xl font-semibold">Wat je krijgt</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { t:"Performance dashboards", d:"Realtime inzichten in productiviteit, bezetting en output." },
            { t:"Planning & capaciteitsadvies", d:"Weekmatrixen, volumepatronen en scenario’s." },
            { t:"Quick scan", d:"Binnen 5 dagen een plan met concrete winstpunten." },
          ].map((c) => (
            <div key={c.t} className="rounded-lg border p-5">
              <h3 className="font-medium">{c.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}