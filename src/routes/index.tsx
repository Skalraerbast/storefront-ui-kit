import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { BrandButton } from "@/components/ui/BrandButton";
import { BrandInput } from "@/components/ui/BrandInput";
import { BrandCard } from "@/components/ui/BrandCard";
import { VisionSection } from "@/components/VisionSection";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden bg-header/90 px-6 py-24 text-header-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl tracking-wide sm:text-5xl lg:text-6xl">
            Välkommen hem till Lilla Hotellet
          </h1>
          <p className="mt-8 text-lg italic sm:text-xl">
            Ett personligt boutiquehotell med 26 unika rum i en historisk miljö.
          </p>
          <p className="mt-4 text-base text-header-foreground/85 sm:text-lg">
            Fem charmiga byggnader, omsorgsfullt inredda rum och ett lugnt boende
            för dig som vill bo centralt – men personligt.
          </p>
          <a
            href="/boka-rum"
            className="mt-10 inline-block border border-header-foreground px-8 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-header-foreground hover:text-header"
          >
            Boka rum
          </a>
        </div>
      </section>

      {/* UI kit preview – buttons, inputs, cards */}
      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.22em] text-gold">
              Designsystem
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              Återanvändbara komponenter
            </h2>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <BrandButton variant="primary">Boka nu</BrandButton>
            <BrandButton variant="outline">Läs mer</BrandButton>
            <BrandButton variant="ghost">Avbryt</BrandButton>
            <BrandButton size="lg">Skicka förfrågan</BrandButton>
            <BrandButton size="sm">Detaljer</BrandButton>
          </div>

          {/* Inputs */}
          <div className="mx-auto mt-16 grid max-w-2xl gap-6 sm:grid-cols-2">
            <BrandInput label="Namn" name="name" placeholder="Ditt namn" />
            <BrandInput
              label="E-post"
              name="email"
              type="email"
              placeholder="namn@exempel.se"
            />
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <BrandCard
              eyebrow="Boende"
              title="Grand Lit"
              description="Rymligt rum med dubbelsäng, klassiskt inredd i varma toner."
              price="fr. 1 495 kr"
              ctaLabel="Välj rum"
              imageUrl="https://placehold.co/800x600/f1e9e0/c5a982?text=Grand+Lit"
              imageAlt="Grand Lit"
            />
            <BrandCard
              eyebrow="Boende"
              title="Enkelrum"
              description="Mysigt enkelrum – perfekt för den ensamresande gästen."
              price="fr. 995 kr"
              ctaLabel="Välj rum"
              imageUrl="https://placehold.co/800x600/f1e9e0/c5a982?text=Enkelrum"
              imageAlt="Enkelrum"
            />
            <BrandCard
              eyebrow="Boende"
              title="Dubbelrum"
              description="Två separata sängar och gott om plats för resesällskapet."
              price="fr. 1 295 kr"
              ctaLabel="Välj rum"
              imageUrl="https://placehold.co/800x600/f1e9e0/c5a982?text=Dubbelrum"
              imageAlt="Dubbelrum"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

