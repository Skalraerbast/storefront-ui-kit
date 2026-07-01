import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { z } from "zod";


/* ------------------------------------------------------------------ */
/* Types & data                                                       */
/* ------------------------------------------------------------------ */

export interface Room {
  id: string;
  name: string;
  description: string;
  weekdayPrice: number;
  weekendPrice: number;
  images: string[];
}

const PLACEHOLDER_IMG = (label: string) =>
  `https://placehold.co/800x600/e8dccb/2b2725?text=${encodeURIComponent(label)}`;

const DEFAULT_ROOMS: Room[] = [
  {
    id: "grand-lit",
    name: "Grand Lit",
    description: "Rymligt rum med bredare säng och lugn sekelskifteskänsla",
    weekdayPrice: 1440,
    weekendPrice: 1150,
    images: [
      PLACEHOLDER_IMG("Grand Lit 1"),
      PLACEHOLDER_IMG("Grand Lit 2"),
      PLACEHOLDER_IMG("Grand Lit 3"),
    ],
  },
  {
    id: "enkelrum",
    name: "Enkelrum",
    description: "Bekvämt enkelrum med skrivbord, WI-FI och eget badrum",
    weekdayPrice: 1340,
    weekendPrice: 1040,
    images: [
      PLACEHOLDER_IMG("Enkelrum 1"),
      PLACEHOLDER_IMG("Enkelrum 2"),
      PLACEHOLDER_IMG("Enkelrum 3"),
    ],
  },
  {
    id: "dubbelrum",
    name: "Dubbelrum",
    description: "Dubbelrum med två personers komfort, TV och eget badrum",
    weekdayPrice: 1590,
    weekendPrice: 1390,
    images: [
      PLACEHOLDER_IMG("Dubbelrum 1"),
      PLACEHOLDER_IMG("Dubbelrum 2"),
      PLACEHOLDER_IMG("Dubbelrum 3"),
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Validation schema                                                  */
/* ------------------------------------------------------------------ */

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Namn krävs").max(100),
  email: z.string().trim().email("Ogiltig e-postadress").max(255),
  rooms: z.string().min(1),
  roomType: z.string().min(1, "Välj rum"),
  guests: z.string().min(1),
  dateIn: z.string().min(1, "Ankomstdatum krävs"),
  dateOut: z.string().min(1, "Avresedatum krävs"),
  phone: z.string().trim().min(5, "Telefonnummer krävs").max(30),
  dinnerAddon: z.boolean(),
  comments: z.string().max(1000).optional(),
});

type BookingErrors = Partial<Record<keyof z.infer<typeof bookingSchema>, string>>;

/* ------------------------------------------------------------------ */
/* Room carousel card                                                 */
/* ------------------------------------------------------------------ */

function RoomCard({ room }: { room: Room }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + room.images.length) % room.images.length);
  const next = () => setIdx((i) => (i + 1) % room.images.length);

  return (
    <article className="flex flex-col overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8dccb]">
        {room.images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${room.name} bild ${i + 1}`}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <button
          onClick={prev}
          aria-label="Föregående bild"
          className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center bg-black/40 text-white transition hover:bg-black/60"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Nästa bild"
          className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center bg-black/40 text-white transition hover:bg-black/60"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 text-center">
        <h3 className="font-serif text-2xl text-[#2b2725]">{room.name}</h3>
        <p className="font-sans text-[15px] leading-relaxed text-[#4a443f]">
          {room.description}
        </p>
        <p className="font-sans text-sm text-[#8a847e]">
          Vardagspris {room.weekdayPrice} kr / Helgpris {room.weekendPrice} kr
        </p>
        <div className="mt-auto flex justify-center gap-3 pt-4">
          {room.id === "enkelrum" || room.id === "dubbelrum" ? (
            <Link
              to={room.id === "enkelrum" ? "/rum/enkelrum" : "/rum/dubbelrum"}
              className="border border-[#c5a982] px-5 py-2 text-xs uppercase tracking-[2px] text-[#2b2725] transition hover:bg-[#c5a982] hover:text-white"
            >
              Läs mer
            </Link>
          ) : (
            <button className="border border-[#c5a982] px-5 py-2 text-xs uppercase tracking-[2px] text-[#2b2725] transition hover:bg-[#c5a982] hover:text-white">
              Läs mer
            </button>
          )}
          <button className="bg-[#c5a982] px-5 py-2 text-xs uppercase tracking-[2px] text-white transition hover:bg-[#b0946f]">
            Välj rum
          </button>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Booking form                                                       */
/* ------------------------------------------------------------------ */

const FIELD_CLASS =
  "w-full border border-[#d8ccb8] bg-white px-4 py-3 font-sans text-[15px] text-[#2b2725] outline-none transition focus:border-[#c5a982]";
const LABEL_CLASS =
  "mb-1.5 block font-sans text-xs uppercase tracking-[2px] text-[#4a443f]";

function BookingForm({ rooms }: { rooms: Room[] }) {
  const [errors, setErrors] = useState<BookingErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = bookingSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      rooms: fd.get("rooms"),
      roomType: fd.get("roomType"),
      guests: fd.get("guests"),
      dateIn: fd.get("dateIn"),
      dateOut: fd.get("dateOut"),
      phone: fd.get("phone"),
      dinnerAddon: fd.get("dinnerAddon") === "on",
      comments: fd.get("comments") ?? "",
    });

    if (!parsed.success) {
      const fieldErrors: BookingErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof BookingErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    // Ready for Supabase submission — user will wire this up.
  }

  if (submitted) {
    return (
      <div className="border border-[#c5a982] bg-white p-10 text-center">
        <h3 className="mb-3 font-serif text-3xl italic text-[#2b2725]">
          Tack för din förfrågan!
        </h3>
        <p className="font-sans text-[#4a443f]">
          Vi återkommer personligen så snart vi kan för att bekräfta din bokning.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 border border-[#c5a982] px-6 py-2 text-xs uppercase tracking-[2px] text-[#2b2725] transition hover:bg-[#c5a982] hover:text-white"
        >
          Stäng
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 gap-5 md:grid-cols-2"
    >
      <div className="md:col-span-2">
        <label className={LABEL_CLASS} htmlFor="name">Namn</label>
        <input id="name" name="name" className={FIELD_CLASS} required maxLength={100} />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div className="md:col-span-2">
        <label className={LABEL_CLASS} htmlFor="email">E-post</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="namn@epost.se"
          className={FIELD_CLASS}
          required
          maxLength={255}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label className={LABEL_CLASS} htmlFor="rooms">Antal rum</label>
        <select id="rooms" name="rooms" className={FIELD_CLASS} defaultValue="1">
          <option value="1">1 rum</option>
          <option value="2">2 rum</option>
          <option value="3">3 rum</option>
          <option value="4+">Fler än 3 rum</option>
        </select>
      </div>

      <div>
        <label className={LABEL_CLASS} htmlFor="roomType">Rumstyp</label>
        <select id="roomType" name="roomType" className={FIELD_CLASS} defaultValue="">
          <option value="" disabled>Välj rum…</option>
          {rooms.map((r) => (
            <option key={r.id} value={r.id}>{r.name}</option>
          ))}
        </select>
        {errors.roomType && <p className="mt-1 text-xs text-red-600">{errors.roomType}</p>}
      </div>

      <div>
        <label className={LABEL_CLASS} htmlFor="guests">Antal personer totalt</label>
        <select id="guests" name="guests" className={FIELD_CLASS} defaultValue="1">
          <option value="1">1 person</option>
          <option value="2">2 personer</option>
          <option value="3">3 personer</option>
          <option value="4+">4+ personer</option>
        </select>
      </div>

      <div>
        <label className={LABEL_CLASS} htmlFor="phone">Telefonnummer</label>
        <input id="phone" name="phone" type="tel" className={FIELD_CLASS} required />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label className={LABEL_CLASS} htmlFor="dateIn">Datum in</label>
        <input id="dateIn" name="dateIn" type="date" className={FIELD_CLASS} required />
        {errors.dateIn && <p className="mt-1 text-xs text-red-600">{errors.dateIn}</p>}
      </div>

      <div>
        <label className={LABEL_CLASS} htmlFor="dateOut">Datum ut</label>
        <input id="dateOut" name="dateOut" type="date" className={FIELD_CLASS} required />
        {errors.dateOut && <p className="mt-1 text-xs text-red-600">{errors.dateOut}</p>}
      </div>

      {/* Dinner add-on */}
      <div className="md:col-span-2">
        <p className={LABEL_CLASS}>Tillägg: middag på Gamla Franska</p>
        <div className="border border-[#d8ccb8] bg-white p-5">
          <h4 className="font-serif text-lg text-[#2b2725]">
            3-rätters middag för 555 kr
          </h4>
          <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#4a443f]">
            Ett pris som endast gäller vid bokning via Lilla Hotellet. Förrätt,
            huvudrätt och efterrätt ingår — fisk och vegetariska alternativ finns
            tillgängliga. Du får en bokningslänk i din bekräftelse och reserverar
            enkelt din tid direkt hos restaurangen.
          </p>
          <p className="mt-3 font-sans text-[13px] text-[#8a847e]">
            Kök öppet: Mån–Tis 11.30–15.00 · Ons–Tor 11.30–20.00 · Fre–Lör 11.30–21.00
          </p>
          <p className="mt-3 font-sans text-[12px] italic text-[#8a847e]">
            Middagen bokas och betalas direkt med Gamla Franska. Avbokning och
            ändringar hanteras med restaurangen — Lilla Hotellet ansvarar inte
            för restaurangbokningen.
          </p>
          <label className="mt-4 flex items-start gap-3 font-sans text-[14px] text-[#2b2725]">
            <input
              type="checkbox"
              name="dinnerAddon"
              className="mt-1 h-4 w-4 accent-[#c5a982]"
            />
            <span>
              Ja tack, skicka mig bokningslänken till Gamla Franska
              <span className="mt-0.5 block text-[12px] text-[#8a847e]">
                Länken skickas med din bokningsbekräftelse via e-post.
              </span>
            </span>
          </label>
        </div>
      </div>

      <div className="md:col-span-2">
        <label className={LABEL_CLASS} htmlFor="comments">
          Kommentarer & önskemål
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={4}
          maxLength={1000}
          className={FIELD_CLASS}
        />
      </div>

      <div className="md:col-span-2 flex justify-center">
        <button
          type="submit"
          className="bg-[#2b2725] px-10 py-4 font-sans text-xs uppercase tracking-[3px] text-white transition hover:bg-[#c5a982]"
        >
          Skicka bokningsförfrågan
        </button>
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Main section                                                       */
/* ------------------------------------------------------------------ */

interface RoomsBookingSectionProps {
  rooms?: Room[];
}

export function RoomsBookingSection({ rooms = DEFAULT_ROOMS }: RoomsBookingSectionProps) {
  return (
    <section className="bg-[#f1e9e0] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center font-serif text-4xl italic text-[#2b2725] md:text-5xl">
          Våra Rum
        </h2>

        {/* Room grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Long-stay CTA */}
        <div className="my-20 border border-[#c5a982] bg-white/60 p-10 text-center">
          <h3 className="font-serif text-2xl italic text-[#2b2725]">
            Veckopendlar du eller behöver företagsboende?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-[#4a443f]">
            Vi erbjuder förmånliga priser för dig som behöver stanna en längre tid.
          </p>
          <a
            href="#langtid"
            className="mt-6 inline-block border border-[#c5a982] px-6 py-3 text-xs uppercase tracking-[2px] text-[#2b2725] transition hover:bg-[#c5a982] hover:text-white"
          >
            Läs om långtidsboende & offert
          </a>
        </div>

        {/* Booking form */}
        <div className="mx-auto max-w-3xl bg-[#f7f1e8] p-8 md:p-12">
          <h3 className="text-center font-serif text-3xl italic text-[#2b2725]">
            Bokningsförfrågan
          </h3>
          <div className="mt-4 mb-10 flex flex-wrap justify-center gap-x-8 gap-y-2 font-sans text-sm text-[#4a443f]">
            <span>★ Garanterat bästa pris</span>
            <span>♥ Personlig service</span>
          </div>
          <BookingForm rooms={rooms} />
        </div>

        {/* Welcome copy */}
        <div className="mx-auto mt-24 max-w-3xl text-center">
          <h2 className="font-serif text-3xl italic text-[#2b2725] md:text-4xl">
            Välkommen till Lilla Hotellet i Lund
          </h2>
          <div className="mt-8 space-y-5 font-sans text-[17px] leading-[1.8] text-[#4a443f]">
            <p className="italic text-[#8a847e]">
              – En personlig oas i hjärtat av den historiska universitetsstaden.
            </p>
            <p>
              Upplev charmen i att bo mitt bland Lunds kullerstensgator, med
              domkyrkan och universitetet precis runt hörnet. Lilla Hotellet är
              en hemtrevlig fristad där personlig service, varsam omtanke om
              miljön och en rofylld atmosfär står i centrum.
            </p>
            <p>
              Här möts du av varsamt inredda rum, en lummig innergård och en
              känsla av att komma hem, snarare än till ett hotell. Oavsett om du
              besöker oss för affärer eller nöje, erbjuder vi ett lugnt och
              centralt boende med omtanke om miljön, platsens historia och
              människan i fokus.
            </p>
            <p className="font-serif italic text-[#2b2725]">
              Välkommen till ditt hem i Lund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
