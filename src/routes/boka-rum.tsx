import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RoomsBookingSection } from "@/components/RoomsBookingSection";

export const Route = createFileRoute("/boka-rum")({
  head: () => ({
    meta: [
      { title: "Boka rum — Lilla Hotellet" },
      { name: "description", content: "Boka rum på Lilla Hotellet i Lund — Grand Lit, Enkelrum och Dubbelrum." },
      { property: "og:title", content: "Boka rum — Lilla Hotellet" },
      { property: "og:description", content: "Boka rum på Lilla Hotellet i Lund — Grand Lit, Enkelrum och Dubbelrum." },
    ],
  }),
  component: BokaRumPage,
});

function BokaRumPage() {
  return (
    <>
      <Header />
      <main>
        <RoomsBookingSection />
      </main>
      <Footer />
    </>
  );
}
