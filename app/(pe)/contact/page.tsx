import Container from "@/components/pe/Container";

export default function Page() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-slate-600">Liever eerst sparren? Laat je gegevens achter.</p>

      {/* Simpel mailto-form (vervang later door Formspree of endpoint) */}
      <form action="mailto:info@pureexcellence.be" method="post" encType="text/plain" className="mt-6 max-w-lg space-y-4">
        <input name="naam" placeholder="Naam" className="w-full rounded border px-3 py-2" />
        <input name="email" type="email" placeholder="E-mail" className="w-full rounded border px-3 py-2" />
        <textarea name="bericht" placeholder="Waarmee helpen we?" rows={4} className="w-full rounded border px-3 py-2" />
        <button className="rounded bg-pe-primary px-4 py-2 text-white">Verstuur</button>
      </form>

      <p className="mt-6 text-sm text-slate-500">Of mail rechtstreeks: <a href="mailto:info@pureexcellence.be">info@pureexcellence.be</a></p>
    </Container>
  );
}