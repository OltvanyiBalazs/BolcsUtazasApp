import { useLang } from "@/lib/i18n";

export default function PriceCards() {
  const { tr } = useLang();

  const tiers = [
    {
      key: "basic",
      name: tr("price_basic_t"),
      price: tr("price_basic_p"),
      desc: tr("price_basic_d"),
      badge: null as string | null,
      featured: false,
    },
    {
      key: "combo",
      name: tr("price_combo_t"),
      price: tr("price_combo_p"),
      desc: tr("price_combo_d"),
      badge: tr("price_featured"),
      featured: true,
    },
    {
      key: "vip",
      name: tr("price_vip_t"),
      price: tr("price_vip_p"),
      desc: tr("price_vip_d"),
      badge: "VIP",
      featured: false,
    },
    {
      key: "priority",
      name: tr("price_priority_t"),
      price: tr("price_priority_p"),
      desc: tr("price_priority_d"),
      badge: tr("price_extra"),
      featured: false,
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {tiers.map((t) => (
        <div
          key={t.key}
          className={`relative flex flex-col rounded-2xl border p-6 ${
            t.featured
              ? "border-gold bg-navy text-white shadow-xl"
              : "border-border bg-card text-foreground"
          }`}
        >
          {t.badge && (
            <span
              className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
                t.featured ? "bg-gold text-navy" : "bg-navy text-white"
              }`}
            >
              {t.badge}
            </span>
          )}
          <h3 className={`font-display text-xl font-semibold ${t.featured ? "text-white" : "text-navy"}`}>
            {t.name}
          </h3>
          <div className={`mt-2 font-display text-3xl font-bold ${t.featured ? "text-gold" : "text-navy"}`}>
            {t.price}
          </div>
          <p className={`mt-3 flex-1 text-sm leading-relaxed ${t.featured ? "text-white/80" : "text-subtle"}`}>
            {t.desc}
          </p>
          <a
            href="#kapcsolat"
            className={`mt-6 block rounded-full py-2.5 text-center text-xs font-semibold uppercase tracking-widest transition-colors ${
              t.featured
                ? "bg-gold text-navy hover:bg-white"
                : "bg-navy text-white hover:bg-gold hover:text-navy"
            }`}
          >
            {tr("price_order")}
          </a>
        </div>
      ))}
    </div>
  );
}
