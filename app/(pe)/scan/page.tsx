import Container from "@/components/pe/Container";
import Link from "next/link";

export default function Page() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-bold">Quick Scan</h1>
      <p className="mt-2 text-slate-600">
        In 5 werkdagen brengen we volumes, bezetting, flow en besturing scherp in kaart.
        Je krijgt een helder rapport met prioriteiten en impact.
      </p>

      <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm text-slate-700">
        <li>Intake + data (2 uur)</li>
        <li>Gemba walk & interviews</li>
        <li>Analyse & visualisaties</li>
        <li>Terugkoppeling met short-list van acties</li>
      </ol>

      <Link href="/contact" className="mt-8 inline-flex rounded bg-pe-primary px-4 py-2 text-white">Plan een intake</Link>
    </Container>
  );
}