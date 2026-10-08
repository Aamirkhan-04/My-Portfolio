import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { title: "Mohammad Aamir — Full Stack Java Developer" },
      {
        name: "description",
        content:
          "Portfolio of Mohammad Aamir, a Full Stack Java Developer based in Mumbai, skilled in Java, Spring Boot, Hibernate, MySQL, React, REST APIs and Spring AI.",
      },
      { name: "author", content: "Mohammad Aamir" },
      { name: "theme-color", content: "#0C0C0C" },
      { property: "og:site_name", content: "Mohammad Aamir" },
      {
        property: "og:url",
        content: "https://mohammad-aamir-khan.netlify.app/",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Mohammad Aamir — Full Stack Java Developer" },
      { name: "twitter:title", content: "Mohammad Aamir — Full Stack Java Developer" },
      { property: "og:description", content: "Portfolio of Mohammad Aamir, a Full Stack Java Developer skilled in Java, Spring Boot, Hibernate, MySQL, React, REST APIs and Spring AI." },
      { name: "twitter:description", content: "Portfolio of Mohammad Aamir, a Full Stack Java Developer skilled in Java, Spring Boot, Hibernate, MySQL, React, REST APIs and Spring AI." },
      {
        property: "og:image",
        content: "https://mohammad-aamir-khan.netlify.app/og-image.png",
      },
      {
        name: "twitter:image",
        content: "https://mohammad-aamir-khan.netlify.app/og-image.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },

      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "shortcut icon", href: "/favicon.png", type: "image/png" },

      {
        rel: "canonical",
        href: "https://mohammad-aamir-khan.netlify.app/",
      },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Mohammad Aamir",
      alternateName: "Mohammad Aamir Portfolio",
      url: "https://mohammad-aamir-khan.netlify.app/",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohammad Aamir",
      url: "https://mohammad-aamir-khan.netlify.app/",
      image: "https://mohammad-aamir-khan.netlify.app/favicon.png",
      jobTitle: "Full Stack Java Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/Aamirkhan-04",
        "https://www.linkedin.com/in/mohammad-aamir-550a0b332/",
      ],
      knowsAbout: [
        "Java",
        "Spring Boot",
        "Spring Framework",
        "Hibernate",
        "JPA",
        "REST APIs",
        "MySQL",
        "React",
        "JavaScript",
        "TypeScript",
        "Spring AI",
      ],
    },
  ];

  return (
    <html lang="en">
      <head>
        <HeadContent />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
