import { Header } from "@/components/Header";
import type { ReactNode } from "react";

export function PageLayout({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-24 lg:px-12">
        {eyebrow && (
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-5xl tracking-wide text-foreground lg:text-6xl">
          {title}
        </h1>
        <div className="mt-8 text-lg text-muted-foreground">
          {children ?? <p>Innehåll kommer snart.</p>}
        </div>
      </main>
    </div>
  );
}
