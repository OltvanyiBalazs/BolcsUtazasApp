import { createFileRoute } from "@tanstack/react-router";
import { Plane, Hotel, Crown, Star, Clock } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/szolgaltatasok")({
  head: () => ({
    meta: [
      { title: "Szolgáltatások — Bölcs Utazás" },
      { name: "description", content: "Részletes leírás az utazástervezési csomagokról." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { tr, lang } = useLang();

  const services = [
    {
      icon: Plane,
      title: tr("price_basic_t"),
      price: tr("price_basic_p"),
      bullets:
        lang === "hu"
          ? [
              "Egy adott úti célra és időpontra a legjobb repjegy VAGY szállás keresése",
              "2–3 opció eltérő ársávban",
              "Foglalási link és tippek mellékelve",
              "Ideális ha már megvan az egyik (pl. szállás), csak a másik hiányzik",
            ]
          : [
              "Best flight OR hotel search for one destination and date",
              "2–3 options in different price ranges",
              "Booking links and tips included",
              "Ideal when you already have one half of the trip",
            ],
    },
    {
      icon: Hotel,
      title: tr("price_combo_t"),
      price: tr("price_combo_p"),
      featured: true,
      bullets:
        lang === "hu"
          ? [
              "Repjegy + szállás komplett kombináció",
              "4 főig egységes 15 000 Ft, plusz fő esetén +3 000 Ft / fő",
              "3 variációt küldök (olcsó / kényelmes / kompromisszum)",
              "Transzfer és helyi közlekedési tippek",
            ]
          : [
              "Complete flight + hotel combination",
              "Flat fee up to 4 people, +€8 per additional person",
              "I send you 3 variations (cheap / comfortable / balanced)",
              "Transfer and local transport tips",
            ],
    },
    {
      icon: Crown,
      title: tr("price_vip_t"),
      price: tr("price_vip_p"),
      bullets:
        lang === "hu"
          ? [
              "Repjegy, szállás és transzfer egyben",
              "Napi bontású programterv a teljes ottlétedre",
              "Étterem- és látnivaló-ajánlások",
              "Személyes utánkövetés az utazás előtt",
            ]
          : [
              "Flights, hotel and transfer in one",
              "Day-by-day itinerary for your entire stay",
              "Restaurant and sights recommendations",
              "Personal follow-up before the trip",
            ],
    },
    {
      icon: Star,
      title: tr("price_priority_t"),
      price: tr("price_priority_p"),
      bullets:
        lang === "hu"
          ? [
              "Garantáltan a következő úti tervet a tiéddel kezdem",
              "Bármelyik fenti csomag mellé hozzávehető",
              "Ideális ha sürget az idő",
            ]
          : [
              "Your trip is guaranteed to be planned next",
              "Can be added to any package above",
              "Ideal when time is tight",
            ],
    },
  ];

  return (
    <SiteLayout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-12 text-center">
            <h1 className="font-display text-5xl font-semibold text-navy md:text-6xl">
              {tr("services_title")}
            </h1>
            <p className="mt-3 text-subtle">{tr("services_sub")}</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold text-gold">
              <Clock className="size-3.5" /> {tr("price_deadline")}
            </div>
          </div>

          <div className="space-y-6">
            {services.map(({ icon: Icon, title, price, bullets, featured }) => (
              <div
                key={title}
                className={`grid gap-6 rounded-2xl border p-7 md:grid-cols-[1fr_2fr] md:p-9 ${
                  featured ? "border-gold bg-navy text-white" : "border-border bg-card"
                }`}
              >
                <div className="flex flex-col">
                  <div
                    className={`flex size-12 items-center justify-center rounded-full ${
                      featured ? "bg-gold text-navy" : "bg-navy text-gold"
                    }`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <h2
                    className={`mt-4 font-display text-2xl font-semibold ${
                      featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {title}
                  </h2>
                  <div
                    className={`mt-1 font-display text-3xl font-bold ${
                      featured ? "text-gold" : "text-navy"
                    }`}
                  >
                    {price}
                  </div>
                </div>
                <ul className="space-y-3">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className={`flex items-start gap-3 text-sm leading-relaxed ${
                        featured ? "text-white/90" : "text-foreground/85"
                      }`}
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gold/40 bg-gold/5 p-7 text-center md:p-9">
            <h3 className="font-display text-2xl font-semibold text-navy">
              {tr("custom_title")}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">
              {tr("custom_d")}
            </p>
            <a
              href="#kapcsolat"
              className="mt-5 inline-block rounded-full bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gold hover:text-navy"
            >
              {tr("hero_cta")}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
