import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { BrandButton } from "@/components/ui/BrandButton";
import { StaffedHours } from "@/components/StaffedHours";
import { VisionSection } from "@/components/VisionSection";
import { WelcomeSection } from "@/components/WelcomeSection";



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

      {/* Bemannade tider – staffed hours info card */}
      <StaffedHours />

      {/* Vision section – editorial tokens with brand CTAs */}
      <VisionSection />
      <section className="bg-cream px-6 pb-24">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4">
          <BrandButton variant="primary">Boka ditt rum</BrandButton>
          <BrandButton variant="outline">Läs vår historia</BrandButton>
          <BrandButton variant="ghost">Kontakta oss</BrandButton>
        </div>
      </section>

      {/* Welcome / intro copy section */}
      <WelcomeSection />
    </div>
  );
}


