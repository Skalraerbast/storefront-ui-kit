import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConferenceSection } from "@/components/ConferenceSection";

export const Route = createFileRoute("/boka-konferens")({
  head: () => ({
    meta: [
      { title: "Boka konferens — Lilla Hotellet" },
      { name: "description", content: "Boka konferens på Lilla Hotellet i Lund — personlig service och centralt läge." },
      { property: "og:title", content: "Boka konferens — Lilla Hotellet" },
      { property: "og:description", content: "Boka konferens på Lilla Hotellet i Lund — personlig service och centralt läge." },
    ],
  }),
  component: BokaKonferensPage,
});

function BokaKonferensPage() {
  return (
    <>
      <Header />
      <main>
        <ConferenceSection />
      </main>
      <Footer />
    </>
  );
}
