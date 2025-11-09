// app/(pe)/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
            Pure Excellence
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Operational Excellence <span className="text-blue-700">voor mensen & processen</span>
          </h1>
          <p className="mt-5 text-lg leading-7 text-gray-700">
            25 jaar ervaring in logistieke omgevingen — van operationeel- en site management tot
            kwaliteitsmanagement en projectmanagement. We maken prestaties zichtbaar, borgen eigenaarschap
            met action trackers en vertalen strategie naar dagelijks gedrag. Licht, modulair en zonder zware IT.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/scan"
              className="rounded-lg bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700"
            >
              Plan een Quick Scan
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 px-5 py-3 text-gray-800 hover:bg-gray-50"
            >
              Neem contact op
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Snel resultaat, herhaalbaar gemaakt met duidelijke rollen, afspraken en werkbare tools.
          </p>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-3">
          {[
            "Quick Scan → helder plan binnen 5 dagen",
            "Action trackers en ownership-cycli met aantoonbare resultaten",
            "Start klein, schaal wat werkt – zonder zware IT",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-blue-600" />
              <p className="text-sm text-gray-700">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diensten */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold text-gray-900">Diensten</h2>
        <p className="mt-2 max-w-3xl text-gray-600">
          Modular en resultaatgericht. We starten waar de impact het grootst is en bouwen stap voor
          stap op. Focus op logistiek met inzetbare expertise in{" "}
          <strong>Kwaliteitsmanagement (QMS-opzet, procedures, instructies)</strong> en{" "}
          <strong>Projectmanagement</strong>.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card
            title="Quick Scan (5 dagen)"
            text="Snel inzicht in bottlenecks, volumes, skills en datadiscipline — inclusief 90-dagen-actieplan."
            href="/scan"
            cta="Plan Quick Scan →"
          />
          <Card
            title="Performance & Productivity"
            text="Dashboards en action trackers die gedrag versterken. Van ad-hoc naar voorspelbaar presteren."
            href="/diensten#performance"
            cta="Bekijk aanpak →"
          />
          <Card
            title="Planning & Capaciteit"
            text="Weekmatrix, skills-matrix en volumescenario’s. De juiste mensen op het juiste moment."
            href="/diensten#planning"
            cta="Meer over planning →"
          />
          <Card
            title="Kwaliteitsmanagement (QMS-opzet)"
            text="Opzetten en documenteren van QMS: processen, SOP’s/werkinstructies, formulieren & training. Geen audits uitvoeren — wél borging creëren."
            href="/diensten#quality"
            cta="QMS-opzet bekijken →"
          />
          <Card
            title="Projectmanagement"
            text="Lean/Kaizen-projecten, implementaties en change met duidelijke ROI-prioritering en governance."
            href="/diensten#projects"
            cta="Projectaanpak →"
          />
          <Card
            title="Coaching Teamleads"
            text="Rollen, ritmes en probleemoplossing. Teamleads die sturen op feiten en voorbeeldgedrag tonen."
            href="/diensten#coaching"
            cta="Hoe werkt dit? →"
          />
        </div>
      </section>

      {/* Professionele, projectmatige werkwijze */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold text-gray-900">Werkwijze — van scan naar duurzame borging</h2>
          <p className="mt-2 max-w-3xl text-gray-600">
            Transparant, gefaseerd en tempo-vast. Elke fase kent een duidelijk doel, meetbare resultaten
            en concrete deliverables.
          </p>

          <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Phase
              nr="0"
              title="Intake & ambitie"
              time="0,5 dag"
              goal="Gezamenlijke doelstellingen en scope scherpstellen."
              deliverables={[
                "Ambitie & succescriteria (impact, KPI’s, constraints)",
                "Scope & randvoorwaarden",
                "Planning en governance-voorstel",
              ]}
              success={["Heldere scope", "Eigenaarschap bij kernteam", "Realistische planning"]}
            />
            <Phase
              nr="1"
              title="Quick Scan"
              time="5 dagen"
              goal="Feitenbasis: volumes, skills, procesflow, datadiscipline en quick wins."
              deliverables={[
                "Observaties & bottleneck-map",
                "Baseline KPI’s + datakwaliteitsscan",
                "90-dagen-actieplan met prioriteiten",
              ]}
              success={["Draagvlak door feiten", "Top-3 verbeterkansen", "Samen gekozen prioriteiten"]}
            />
            <Phase
              nr="2"
              title="Design Sprint"
              time="2–3 weken"
              goal="Vertalen naar werkbaar operating model."
              deliverables={[
                "Rollen & RACI’s",
                "Action-tracker structuur (eigenaars, cadans, definities)",
                "SOP’s/werkinstructies (v1) + formulierenset",
              ]}
              success={["Heldere verantwoordelijkheden", "Werkbare templates", "Ready voor pilot"]}
            />
            <Phase
              nr="3"
              title="Pilot & Enablement"
              time="6–8 weken"
              goal="Bewezen resultaat met begeleide uitvoering."
              deliverables={[
                "Dagelijks/wekelijkse action-reviews",
                "Training teamleads + on-the-job coaching",
                "Meetplan + evidence (before/after)",
              ]}
              success={[
                "Meetbaar resultaat (KPI-verbetering)",
                "Gedragsverankering via trackers",
                "Lessons learned voor uitrol",
              ]}
            />
            <Phase
              nr="4"
              title="Scale & Standardize"
              time="4–6 weken"
              goal="Wat werkt, standaardiseren en opschalen."
              deliverables={[
                "QMS: processen, SOP’s, forms beheerd",
                "Roll-out kit (training, templates, checklists)",
                "Change-plan per afdeling/locatie",
              ]}
              success={["Eenduidige werkwijze", "Versnelling uitrol", "Minder variatie, meer voorspelbaarheid"]}
            />
            <Phase
              nr="5"
              title="Run & Improve"
              time="maandelijks (light)"
              goal="Borging via lichte governance en continue verbetering."
              deliverables={[
                "Maandelijkse performance review",
                "Roadmap-update + prioritering",
                "Coaching key owners",
              ]}
              success={["Stabiele resultaten", "Transparante voortgang", "Continu verbeteren als gewoonte"]}
            />
          </ol>

          {/* Governance blok */}
          <div className="mt-10 rounded-xl border border-blue-100 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Projectgovernance die werkt</h3>
            <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-3">
              <BulletCard
                title="Heldere RACI"
                bullets={["Sponsor, proceseigenaar, teamlead, support", "Beslis- en escalatielijnen duidelijk"]}
              />
              <BulletCard
                title="Cadans & ritme"
                bullets={["Weekreview van action tracker", "Maandelijkse projectboard", "Kwartaalreset op KPI’s"]}
              />
              <BulletCard
                title="Transparantie"
                bullets={["KPI’s en voortgang visueel", "Evidence-based beslissingen", "Lessons learned gedeeld"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Toepassingsgebieden */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="text-2xl font-semibold text-gray-900">Waar passen we dit toe?</h2>
        <p className="mt-2 max-w-3xl text-gray-600">
          De Pure-Excellence-aanpak is ontworpen voor procesgedreven omgevingen. We starten in logistiek
          en breiden uit richting kwaliteits- en projectvraagstukken die performance versterken.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <SectorCard
            title="Logistiek"
            bullets={["Magazijnen & DC’s", "E-commerce & retail", "Transport & cross-dock"]}
            href="/diensten#logistiek"
          />
          <SectorCard
            title="Kwaliteitsmanagement"
            bullets={[
              "QMS design & implementatie",
              "SOP’s/werkinstructies & formulieren",
              "Training & borging (geen audits)",
            ]}
            href="/diensten#quality"
          />
          <SectorCard
            title="Projectmanagement"
            bullets={[
              "Implementaties & roll-outs",
              "Lean/Kaizen-projecten",
              "Change met ROI-prioritering",
            ]}
            href="/diensten#projects"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl bg-blue-600 px-6 py-10 text-white md:px-10">
          <h3 className="text-2xl font-bold">Klaar voor voorspelbare prestaties?</h3>
          <p className="mt-2 max-w-3xl text-blue-100">
            Start met een Quick Scan en ontvang binnen vijf dagen een helder actieplan voor de komende
            90 dagen — met focus op logistiek, QMS-opzet en projectrealisatie.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/scan"
              className="rounded-lg bg-white px-5 py-3 font-medium text-blue-700 hover:bg-blue-50"
            >
              Plan Quick Scan
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/40 px-5 py-3 font-medium hover:bg-white/10"
            >
              Stel je vraag
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ——— Kleine, herbruikbare components ——— */

function Card({
  title,
  text,
  href,
  cta,
}: {
  title: string;
  text: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{text}</p>
      <Link href={href} className="mt-4 inline-flex text-blue-700 hover:underline">
        {cta}
      </Link>
    </div>
  );
}

function SectorCard({
  title,
  bullets,
  href,
}: {
  title: string;
  bullets: string[];
  href: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
            {b}
          </li>
        ))}
      </ul>
      <Link href={href} className="mt-4 inline-flex text-blue-700 hover:underline">
        Bekijk voorbeelden →
      </Link>
    </div>
  );
}

function Phase({
  nr,
  title,
  time,
  goal,
  deliverables,
  success,
}: {
  nr: string;
  title: string;
  time: string;
  goal: string;
  deliverables: string[];
  success: string[];
}) {
  return (
    <li className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            {nr}
          </span>
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        </div>
        <span className="text-xs text-gray-500">{time}</span>
      </div>

      <p className="mt-3 text-sm text-gray-700">
        <span className="font-medium">Doel: </span>
        {goal}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Deliverables</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            {deliverables.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Succescriteria</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            {success.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

function BulletCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-lg border border-gray-200 p-5">
      <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
      <ul className="mt-2 space-y-1 text-sm text-gray-600">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}