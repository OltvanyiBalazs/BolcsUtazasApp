import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Az oldal nem található</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A keresett oldal nem létezik vagy áthelyezésre került.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Az oldal nem töltődött be
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Kérlek próbáld újra.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
          >
            Újra
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Főoldal
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "h" },
      {
        name: "description",
        content:
          "Személyre szabott utazási tanácsadás: a legjobb repjegy és szállás kombók 3 munkanapon belül.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "h" },
      {
        property: "og:description",
        content: "Személyre szabott utazási tanácsadás 3 munkanap alatt.",
      },
      { name: "twitter:title", content: "h" },
      { name: "description", content: "hhh" },
      { property: "og:description", content: "hhh" },
      { name: "twitter:description", content: "hhh" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6d2f3e34-ffe8-4451-8fcc-cfdddc927f2c/id-preview-24452d68--03bc7d18-b114-4f77-9090-c8f24f5a860b.lovable.app-1780391527096.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6d2f3e34-ffe8-4451-8fcc-cfdddc927f2c/id-preview-24452d68--03bc7d18-b114-4f77-9090-c8f24f5a860b.lovable.app-1780391527096.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
