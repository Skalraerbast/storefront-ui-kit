import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/rum/grand-lit")({
  head: () => ({
    meta: [
      { title: "Grand Lit — Lilla Hotellet i Lund" },
      {
        name: "description",
        content:
          "Boka Grand Lit på Lilla Hotellet i Lund. Rymligt rum med 140 cm bred säng, TV, fåtölj, eget badrum och frukostbuffé.",
      },
      { property: "og:title", content: "Grand Lit — Lilla Hotellet" },
      {
        property: "og:description",
        content: "Unna dig lite extra utrymme.",
      },
    ],
  }),
  component: GrandLitPage,
});

const IMAGES = [
  { src: "/assets/rooms/grand-lit-1.svg", alt: "Grand Lit Lilla Hotellet bild 1" },
  { src: "/assets/rooms/grand-lit-2.svg", alt: "Grand Lit inredning bild 2" },
  { src: "/assets/rooms/grand-lit-3.svg", alt: "Grand Lit badrum bild 3" },
];

const FACTS = [
  {
    label: "140 cm bred säng",
    path: (
      <>
        <path d="M2 20h20" />
        <path d="M4 12h16a2 2 0 0 1 2 2v6H2v-6a2 2 0 0 1 2-2z" />
        <path d="M6 8v4" />
        <path d="M18 8v4" />
      </>
    ),
  },
  {
    label: "TV & Fåtölj",
    path: (
      <>
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
        <polyline points="17 2 12 7 7 2" />
      </>
    ),
  },
  {
    label: "Frukostbuffé",
    path: (
      <>
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      </>
    ),
  },
  {
    label: "Eget badrum",
    path: (
      <>
        <path d="M12 2v20" />
        <path d="M8 8h8" />
        <path d="M4 16h16" />
        <path d="M12 2a4 4 0 0 1 4 4" />
      </>
    ),
  },
];

interface BookingState {
  roomType: "Grand Lit";
  guests: "1-2";
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  phone: string;
  discount: string;
}

const EMPTY_FORM: BookingState = {
  roomType: "Grand Lit",
  guests: "1-2",
  name: "",
  email: "",
  checkIn: "",
  checkOut: "",
  phone: "",
  discount: "",
};

function GrandLitPage() {
  const [idx, setIdx] = useState(0);
  const [form, setForm] = useState<BookingState>(EMPTY_FORM);
  const [showThanks, setShowThanks] = useState(false);

  const prev = () => setIdx((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setIdx((i) => (i + 1) % IMAGES.length);

  const update =
    (key: keyof Omit<BookingState, "roomType" | "guests">) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowThanks(true);
  };

  const closeThanks = () => {
    setShowThanks(false);
    setForm(EMPTY_FORM);
  };

  const inputClass =
    "w-full rounded-[2px] border border-[#dcd3c9] bg-white px-4 py-[15px] font-sans text-[15px] text-[#2b2725] outline-none transition focus:border-[#c5a982]";
  const labelClass =
    "mb-2 block font-sans text-xs font-semibold uppercase tracking-[1.5px] text-[#4a443f]";

  return (
    <>
      <Header />

      <main
        id="page-unique-grandlit"
        className="bg-[#f1e9e0] px-5 py-16 font-sans text-[#2b2725]"
      >
        <div className="mx-auto max-w-[1000px]">
          <Link
            to="/"
            className="mb-8 inline-flex items-center text-sm font-bold uppercase tracking-wide text-[#4a443f] transition hover:text-[#c5a982]"
          >
            ← Tillbaka till startsidan
          </Link>

          <h1 className="text-center font-serif text-[42px] font-normal text-[#2b2725]">
            Grand Lit
          </h1>
          <p className="mb-10 mt-2 text-center text-lg font-bold uppercase tracking-[2px] text-[#c5a982]">
            Unna dig lite extra utrymme
          </p>

          {/* Slider */}
          <div className="relative mb-12 h-[300px] w-full overflow-hidden rounded-[2px] md:h-[450px]">
            {IMAGES.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <button
              type="button"
              onClick={prev}
              aria-label="Föregående bild"
              className="absolute left-5 top-1/2 z-10 grid h-[50px] w-[50px] -translate-y-1/2 place-items-center rounded-full bg-white/80 text-2xl text-[#2b2725] transition hover:bg-white"
            >
              ❮
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Nästa bild"
              className="absolute right-5 top-1/2 z-10 grid h-[50px] w-[50px] -translate-y-1/2 place-items-center rounded-full bg-white/80 text-2xl text-[#2b2725] transition hover:bg-white"
            >
              ❯
            </button>
          </div>

          {/* Content grid */}
          <div className="mb-16 grid grid-cols-1 gap-[50px] md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="mb-5 font-serif text-[28px] text-[#2b2725]">
                Unna dig extra komfort
              </h2>
              <p className="mb-5 text-base leading-[1.7] text-[#4a443f]">
                Våra Grand Lit-rum är favoriten för dig som reser ensam men
                vill bre ut dig ordentligt. Rummet har en 140 cm bred säng.
              </p>
              <p className="text-base leading-[1.7] text-[#4a443f]">
                En perfekt kombination av personlig charm och lite extra
                svängrum — mitt i det historiska Lund, ett stenkast från
                domkyrkan och universitetet.
              </p>
            </div>

            <aside className="border border-[#dcd3c9] border-t-4 border-t-[#c5a982] bg-white p-[30px]">
              <h3 className="mb-5 font-serif text-[22px] text-[#2b2725]">
                Detta ingår
              </h3>
              <ul className="list-none p-0">
                {FACTS.map((f) => (
                  <li
                    key={f.label}
                    className="mb-[18px] flex items-center text-[15px] text-[#2b2725] last:mb-0"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="mr-[15px] h-5 w-5 flex-shrink-0"
                      fill="none"
                      stroke="#c5a982"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {f.path}
                    </svg>
                    {f.label}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          {/* Form */}
          <div className="rounded-[4px] bg-[#ebe4db] p-8 md:p-[50px]">
            <h2 className="mb-8 text-center font-serif text-[32px] text-[#2b2725]">
              Boka Grand Lit
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 md:grid-cols-2"
              noValidate
            >
              <div className="md:col-span-2">
                <label className={labelClass} htmlFor="gl-name">Namn</label>
                <input
                  id="gl-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelClass} htmlFor="gl-email">E-post</label>
                <input
                  id="gl-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="gl-in">Incheckning</label>
                <input
                  id="gl-in"
                  type="date"
                  required
                  value={form.checkIn}
                  onChange={update("checkIn")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="gl-out">Utcheckning</label>
                <input
                  id="gl-out"
                  type="date"
                  required
                  value={form.checkOut}
                  onChange={update("checkOut")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="gl-phone">Telefon</label>
                <input
                  id="gl-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={update("phone")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="gl-discount">Rabattkod</label>
                <input
                  id="gl-discount"
                  type="text"
                  value={form.discount}
                  onChange={update("discount")}
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full cursor-pointer bg-[#4A4A4A] p-5 font-sans text-sm font-bold uppercase tracking-[2px] text-white transition hover:bg-[#2b2725] md:col-span-2"
              >
                Skicka bokningsförfrågan
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Thank-you modal */}
      {showThanks && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-[500px] bg-white p-10 text-center">
            <h2 className="font-serif text-3xl text-[#2b2725]">Tack!</h2>
            <p className="mt-4 font-sans text-[#4a443f]">
              Vi återkommer strax med en bekräftelse på din bokningsförfrågan.
            </p>
            <button
              type="button"
              onClick={closeThanks}
              className="mt-6 cursor-pointer border-none bg-[#4A4A4A] px-6 py-3 font-sans text-sm font-bold uppercase tracking-[2px] text-white transition hover:bg-[#2b2725]"
            >
              Stäng
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
