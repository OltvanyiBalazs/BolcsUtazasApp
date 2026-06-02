import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/velemenyek")({
  head: () => ({
    meta: [
      { title: "Vélemények — Bölcs Utazás" },
      { name: "description", content: "Ügyfél visszajelzések a Bölcs Utazás szolgáltatásairól." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const { tr } = useLang();
  return (
    <SiteLayout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h1 className="font-display text-5xl font-semibold text-navy md:text-6xl">
            {tr("reviews_title")}
          </h1>

          <div className="mt-14 rounded-3xl border border-dashed border-border bg-muted/40 p-12">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold/15 text-gold">
              <MessageSquare className="size-7" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold text-navy">
              {tr("reviews_empty_t")}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-subtle">
              {tr("reviews_empty_d")}
            </p>
            <a
              href="#kapcsolat"
              className="mt-6 inline-block rounded-full bg-navy px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-gold hover:text-navy"
            >
              {tr("contact_title")}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
