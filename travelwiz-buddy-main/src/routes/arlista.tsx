import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";
import PriceCards from "@/components/PriceCards";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/arlista")({
  head: () => ({
    meta: [
      { title: "Árlista — Bölcs Utazás" },
      { name: "description", content: "Transzparens árak: repjegy, szállás, VIP csomag." },
    ],
  }),
  component: PricesPage,
});

function PricesPage() {
  const { tr } = useLang();
  return (
    <SiteLayout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center">
            <h1 className="font-display text-5xl font-semibold text-navy md:text-6xl">
              {tr("prices_title")}
            </h1>
            <p className="mt-3 text-subtle">{tr("prices_sub")}</p>
          </div>
          <PriceCards />
          <p className="mt-10 text-center text-sm text-subtle">{tr("price_deadline")}</p>
        </div>
      </section>
    </SiteLayout>
  );
}
