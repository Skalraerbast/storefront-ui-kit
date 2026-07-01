import { Bell, Coffee, KeyRound, Car, Ban, PawPrint, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type InfoItem = {
  icon: LucideIcon;
  title: string;
  body: ReactNode;
};

const items: InfoItem[] = [
  {
    icon: Bell,
    title: "Reception & Bemanning",
    body: (
      <>
        Vi finns på plats vardagar <strong>07.00–14.00</strong> och helger{" "}
        <strong>08.00–14.00</strong>. För övriga tider nås vi alltid via telefon.
      </>
    ),
  },
  {
    icon: Coffee,
    title: "Frukost",
    body: (
      <>
        Njut av vår frukost vardagar <strong>07.00–09.00</strong> och helger{" "}
        <strong>08.00–10.00</strong>. Vi erbjuder lokala råvaror,
        säsongsanpassade produkter och hemlagat bröd.
      </>
    ),
  },
  {
    icon: KeyRound,
    title: "Incheckning",
    body: (
      <>
        Ankomst sker vanligtvis under receptionens öppettider. Vid{" "}
        <strong>sen ankomst</strong>, vänligen kontakta oss i förväg så löser vi
        en smidig incheckning.
      </>
    ),
  },
  {
    icon: Car,
    title: "Parkering",
    body: (
      <>
        Ett antal parkeringsplatser finns i direkt anslutning till hotellet.
        Pris: <strong>180 kr/dygn</strong>. Förboka gärna för att säkra plats.
      </>
    ),
  },
  {
    icon: Ban,
    title: "Rökfritt",
    body: (
      <>
        För allas trivsel är hela hotellets område, inklusive rum och innergård,
        helt rökfritt.
      </>
    ),
  },
  {
    icon: PawPrint,
    title: "Husdjur",
    body: (
      <>
        Vi älskar djur, men tyvärr är husdjur inte tillåtna på hotellet av
        hänsyn till allergiker.
      </>
    ),
  },
];

export function GoodToKnow() {
  return (
    <section className="bg-[#f1e9e0] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-4xl text-[#2b2725] sm:text-5xl">
            Bra att veta
          </h2>
          <p className="mt-6 text-sm font-semibold text-[#2b2725]">
            Lilla Hotellet
          </p>
          <p className="text-sm text-[#2b2725]/80">Bankgatan 7, 223 52 Lund</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-sm bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            >
              <Icon className="h-7 w-7 text-[#c5a982]" strokeWidth={1.75} />
              <h3 className="mt-6 font-display text-xl text-[#2b2725]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#2b2725]/85">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GoodToKnow;
