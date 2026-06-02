import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLang } from "@/lib/i18n";

const TIKTOK_URL = "https://www.tiktok.com/@bolcsutazas";
const EMAIL = "bolcsutazas@gmail.com";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.01a8.16 8.16 0 0 0 4.77 1.52V7.08a4.85 4.85 0 0 1-1.84-.39z" />
    </svg>
  );
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { lang, setLang, tr } = useLang();
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const trigger = () => {
      const el = document.getElementById("kapcsolat");
      if (!el) return;
      setHighlight(false);
      // restart animation
      requestAnimationFrame(() => requestAnimationFrame(() => setHighlight(true)));
      window.setTimeout(() => setHighlight(false), 2700);
    };
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href === "#kapcsolat") trigger();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const links = [
    { to: "/", label: tr("nav_home") },
    { to: "/szolgaltatasok", label: tr("nav_services") },
    { to: "/arlista", label: tr("nav_prices") },
    { to: "/velemenyek", label: tr("nav_reviews") },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src={logo} alt="Bölcs Utazás" className="h-11 w-11 object-contain" width={44} height={44} />
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold tracking-wide text-navy">
                Bölcs <span className="text-gold">Utazás</span>
              </div>
              <div className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-subtle sm:block">
                {tr("tagline")}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            {links.map((l) => {
              const active = path === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative transition-colors hover:text-gold ${
                    active ? "text-gold" : "text-navy/80"
                  }`}
                >
                  {l.label}
                  {active && <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "hu" ? "en" : "hu")}
              className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold tracking-wider text-navy transition-colors hover:border-gold hover:text-gold"
              aria-label="Language"
            >
              {tr("lang_switch")}
            </button>
            <a
              href="#kapcsolat"
              className="hidden rounded-full bg-navy px-4 py-2 text-xs font-semibold tracking-wider text-white transition-colors hover:bg-gold hover:text-navy md:inline-block"
            >
              {tr("nav_cta")}
            </a>
            <button
              className="md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-navy hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="#kapcsolat"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-navy px-4 py-3 text-center text-sm font-semibold text-white"
              >
                {tr("nav_cta")}
              </a>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer id="kapcsolat" className={`mt-24 border-t border-border bg-navy text-white ${highlight ? "contact-highlight" : ""}`}>
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-tight">
                {tr("contact_title")}
              </h2>
              <p className="mt-3 max-w-md text-sm text-white/70">{tr("contact_sub")}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-3 rounded-xl border border-white/15 px-5 py-4 transition-colors hover:border-gold"
              >
                <Mail className="size-5 text-gold" />
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                    {tr("contact_email_label")}
                  </div>
                  <div className="font-display text-base">{EMAIL}</div>
                </div>
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/15 px-5 py-4 transition-colors hover:border-gold"
              >
                <TikTokIcon className="size-5 text-gold" />
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                    TikTok
                  </div>
                  <div className="font-display text-base">@bolcsutazas</div>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
            <div>© {new Date().getFullYear()} Bölcs Utazás. {tr("footer_rights")}</div>
            <div className="font-display tracking-widest">{tr("tagline")}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
