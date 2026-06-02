import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plane, Compass, Clock, Heart } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";
import santorini from "@/assets/dest-santorini.jpg";
import paris from "@/assets/dest-paris.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import tokyo from "@/assets/dest-tokyo.jpg";
import bali from "@/assets/dest-bali.jpg";
import newyork from "@/assets/dest-newyork.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bölcs Utazás — Tanácsadás. Tervezés. Élmények." },
      {
        name: "description",
        content:
          "Balázs vagyok. Megtalálom neked a legjobb repjegy és szállás kombókat 3 munkanapon belül.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Panorama />
      <About />
      <NearbyAirports />
      <WhyMe />
      <HowItWorks />
      <WhatYouGet />
      <CustomRequest />
      <Legal />
    </SiteLayout>
  );
}

function NearbyAirports() {
  const { tr } = useLang();
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5">
        <div className="rounded-2xl border border-gold/40 bg-gold/5 p-8 md:p-10">
          <div className="flex items-center gap-3">
            <Plane className="size-5 text-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Bécs · Pozsony · Prága
            </span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
            {tr("nearby_title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">{tr("nearby_d")}</p>
        </div>
      </div>
    </section>
  );
}

function CustomRequest() {
  const { tr } = useLang();
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
          {tr("custom_title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-subtle">
          {tr("custom_d")}
        </p>
        <a
          href="#kapcsolat"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
        >
          {tr("hero_cta")} <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function Hero() {
  const { tr } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            {tr("hero_eyebrow")}
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-navy md:text-7xl">
            {tr("hero_title")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-subtle md:text-lg">
            {tr("hero_sub")}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#kapcsolat"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy/10 transition-all hover:bg-gold hover:text-navy"
            >
              {tr("hero_cta")} <ArrowRight className="size-4" />
            </a>
            <Link
              to="/arlista"
              className="rounded-full border border-navy/20 px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
            >
              {tr("hero_secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Panorama() {
  const images = [
    { src: santorini, alt: "Santorini" },
    { src: paris, alt: "Paris" },
    { src: maldives, alt: "Maldives" },
    { src: tokyo, alt: "Tokyo" },
    { src: bali, alt: "Bali" },
    { src: newyork, alt: "New York" },
  ];
  const { tr } = useLang();
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex flex-col items-center text-center">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
            {tr("dest_title")}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-subtle">{tr("dest_sub")}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {images.map((img, i) => (
            <div
              key={img.alt}
              className={`group relative overflow-hidden rounded-xl ${
                i === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-3 left-4 font-display text-lg font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { tr } = useLang();
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px flex-1 bg-gold/40" />
          <Plane className="size-5 text-gold" />
          <span className="h-px flex-1 bg-gold/40" />
        </div>
        <h2 className="text-center font-display text-4xl font-semibold text-navy md:text-5xl">
          {tr("about_title")}
        </h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-semibold first-letter:leading-none first-letter:text-gold">
            {tr("about_p1")}
          </p>
          <p>{tr("about_p2")}</p>
          <p>{tr("about_p3")}</p>
          <p>{tr("about_p4")}</p>
          <p className="font-display text-xl italic text-navy">{tr("about_p5")}</p>
          <p>{tr("about_p6")}</p>
        </div>
      </div>
    </section>
  );
}

function WhyMe() {
  const { tr } = useLang();
  const items = [
    { icon: Heart, t: tr("why_1_t"), d: tr("why_1_d") },
    { icon: Clock, t: tr("why_2_t"), d: tr("why_2_d") },
    { icon: Plane, t: tr("why_3_t"), d: tr("why_3_d") },
    { icon: Compass, t: tr("why_4_t"), d: tr("why_4_d") },
  ];
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center font-display text-4xl font-semibold text-navy">
          {tr("why_title")}
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold">
              <div className="flex size-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { tr } = useLang();
  const steps = [
    { t: tr("how_1_t"), d: tr("how_1_d") },
    { t: tr("how_2_t"), d: tr("how_2_d") },
    { t: tr("how_3_t"), d: tr("how_3_d") },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center font-display text-4xl font-semibold text-navy">
          {tr("how_title")}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.t} className="relative rounded-2xl border border-border bg-card p-7">
              <div className="absolute -top-4 left-6 flex size-9 items-center justify-center rounded-full bg-navy font-display text-base font-bold text-gold">
                {i + 1}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-subtle">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  const { tr } = useLang();
  const items = [tr("what_1"), tr("what_2"), tr("what_3"), tr("what_4"), tr("what_5")];
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-4xl font-semibold">{tr("what_title")}</h2>
          <a
            href="#kapcsolat"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white"
          >
            {tr("hero_cta")} <ArrowRight className="size-4" />
          </a>
        </div>
        <ul className="space-y-4">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-3 border-b border-white/10 pb-4 text-base">
              <span className="mt-1 size-2 shrink-0 rounded-full bg-gold" />
              <span className="text-white/90">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Legal() {
  const { tr } = useLang();
  const items = [
    { t: tr("legal_1_t"), d: tr("legal_1_d") },
    { t: tr("legal_2_t"), d: tr("legal_2_d") },
    { t: tr("legal_3_t"), d: tr("legal_3_d") },
    { t: tr("legal_4_t"), d: tr("legal_4_d") },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-5">
        <h2 className="font-display text-3xl font-semibold text-navy">{tr("legal_title")}</h2>
        <div className="mt-8 space-y-6">
          {items.map((i) => (
            <div key={i.t} className="rounded-xl border border-border bg-muted/40 p-5">
              <h3 className="font-semibold text-navy">{i.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
