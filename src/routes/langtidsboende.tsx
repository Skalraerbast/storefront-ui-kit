import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/langtidsboende")({
  head: () => ({
    meta: [
      { title: "Långtidsboende i Lund — Lilla Hotellet" },
      {
        name: "description",
        content:
          "Tillfälligt hem i centrala Lund för konsulter, forskare och företag. Frukost, Wi-Fi, städning och sänglinne ingår. Begär offert för längre vistelse.",
      },
      { property: "og:title", content: "Långtidsboende i Lund — Lilla Hotellet" },
      {
        property: "og:description",
        content:
          "Personligt boende med historisk charm i centrala Lund — nära ESS/Max IV, universitetet och sjukhuset.",
      },
    ],
  }),
  component: LangtidsboendePage,
});

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  arrival: string;
  departure: string;
  guests: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  arrival: "",
  departure: "",
  guests: "1",
  message: "",
};

function LangtidsboendePage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setSubmitted(false);
    setForm(initialForm);
  };

  return (
    <div className="min-h-screen bg-[#f1e9e0] text-[#4a443f]">
      <Header />

      {/* Hero */}
      <section className="relative">
        <img
          src="/assets/longstay-1.svg"
          alt="Långtidsboende på Lilla Hotellet i Lund"
          className="h-[45vh] w-full object-cover md:h-[60vh]"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="font-sans text-xs uppercase tracking-[4px] text-[#e8d9bf]">
            Longstay i Lund
          </p>
          <h1 className="mt-4 font-serif text-4xl italic md:text-6xl">
            Långtidsboende
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-sm md:text-base">
            Ett tillfälligt hem med historisk charm — mitt i centrala Lund.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="font-serif text-lg leading-relaxed md:text-xl">
          Söker du ett tillfälligt hem i Lund? Oavsett om du är konsult, forskare
          vid universitetet, arbetar på ESS/Max IV eller behöver ett tillfälligt
          boende under en flytt — Lilla Hotellet är en lugn oas mitt i staden.
          Hos oss är du inte bara en gäst i mängden, du bor i en personlig miljö
          med historisk charm, långt från de stora kedjornas sterila korridorer.
        </p>

        {/* Divider */}
        <div className="my-16 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#c5a982]" />
          <span className="h-2 w-2 rotate-45 bg-[#c5a982]" />
          <span className="h-px w-16 bg-[#c5a982]" />
        </div>

        <h2 className="font-serif text-3xl italic text-[#2b2725] md:text-4xl">
          Varför välja Lilla Hotellet för din longstay?
        </h2>
        <p className="mt-4 font-sans leading-relaxed">
          Att bo på hotell under en längre tid ställer höga krav på trivsel. Vi
          erbjuder ett boende som känns mer som ett hem.
        </p>

        <ul className="mt-10 space-y-6 font-sans">
          {[
            {
              title: "Centralt men lugnt",
              text: "Bo mitt i centrala Lund nära Mårtenstorget, men njut av tystnaden i våra gårdshus och vår lummiga trädgård.",
            },
            {
              title: "Frukost ingår",
              text: "Starta varje morgon med vår uppskattade frukostbuffé med hemlagade inslag — slipp stressen med att handla och laga frukost själv.",
            },
            {
              title: "Bekvämlighet",
              text: "Wi-Fi, städning och sänglinne ingår. Du kan fokusera på ditt jobb eller dina studier — vi sköter resten.",
            },
          ].map((item) => (
            <li key={item.title} className="flex gap-4">
              <span className="mt-2 h-2 w-2 flex-none rotate-45 bg-[#c5a982]" />
              <p>
                <strong className="font-serif text-lg italic text-[#2b2725]">
                  {item.title}:
                </strong>{" "}
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="my-16 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#c5a982]" />
          <span className="h-2 w-2 rotate-45 bg-[#c5a982]" />
          <span className="h-px w-16 bg-[#c5a982]" />
        </div>

        <h2 className="font-serif text-3xl italic text-[#2b2725] md:text-4xl">
          Perfekt för veckopendling och företag
        </h2>
        <p className="mt-4 font-sans leading-relaxed">
          För företag som söker boende för sina anställda erbjuder vi flexibla
          lösningar. Med gångavstånd till Lund C är det enkelt att pendla, och
          universitetet samt sjukhuset ligger inom bekvämt räckhåll. Våra rum i
          de charmiga 1800-talsbyggnaderna ger den återhämtning som krävs efter
          en lång arbetsdag.
        </p>

        <h2 className="mt-16 font-serif text-3xl italic text-[#2b2725] md:text-4xl">
          Förmånliga priser för längre vistelser
        </h2>
        <p className="mt-4 font-sans leading-relaxed">
          Vi vet att behoven kan variera från ett par veckor till flera månader.
          Därför erbjuder vi skräddarsydda priser för dig som stannar längre —
          begär offert nedan så återkommer vi med ett förslag.
        </p>
      </section>

      {/* Quote form */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl bg-[#f7f1e8] p-8 md:p-12">
          <h3 className="text-center font-serif text-3xl italic text-[#2b2725]">
            Begär offert
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-center font-sans text-sm text-[#4a443f]">
            Fyll i formuläret nedan så återkommer vi inom kort med ett
            skräddarsytt förslag för din vistelse.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 grid gap-6 md:grid-cols-2">
            <Field label="Namn *">
              <input required value={form.name} onChange={update("name")} className={inputCls} />
            </Field>
            <Field label="Företag">
              <input value={form.company} onChange={update("company")} className={inputCls} />
            </Field>
            <Field label="E-post *">
              <input required type="email" value={form.email} onChange={update("email")} className={inputCls} />
            </Field>
            <Field label="Telefon">
              <input value={form.phone} onChange={update("phone")} className={inputCls} />
            </Field>
            <Field label="Ankomst *">
              <input required type="date" value={form.arrival} onChange={update("arrival")} className={inputCls} />
            </Field>
            <Field label="Avresa *">
              <input required type="date" value={form.departure} onChange={update("departure")} className={inputCls} />
            </Field>
            <Field label="Antal gäster">
              <select value={form.guests} onChange={update("guests")} className={inputCls}>
                {["1", "2", "3", "4", "5+"].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </Field>
            <div className="md:col-span-2">
              <Field label="Meddelande">
                <textarea rows={4} value={form.message} onChange={update("message")} className={inputCls} />
              </Field>
            </div>

            <div className="md:col-span-2 flex flex-col items-center gap-4">
              <button
                type="submit"
                className="border border-[#c5a982] bg-[#4a443f] px-8 py-3 text-xs uppercase tracking-[3px] text-white transition hover:bg-[#c5a982] hover:tracking-[4px]"
              >
                Skicka offertförfrågan
              </button>
              <Link
                to="/"
                className="font-sans text-xs uppercase tracking-[2px] text-[#4a443f] underline underline-offset-4 hover:text-[#c5a982]"
              >
                ← Tillbaka till startsidan
              </Link>
            </div>
          </form>
        </div>
      </section>

      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="max-w-md bg-[#f1e9e0] p-10 text-center">
            <h4 className="font-serif text-3xl italic text-[#2b2725]">
              Tack för din förfrågan!
            </h4>
            <p className="mt-4 font-sans text-sm text-[#4a443f]">
              Vi återkommer inom kort med ett skräddarsytt förslag för din
              vistelse hos oss.
            </p>
            <button
              onClick={closeModal}
              className="mt-8 border border-[#c5a982] px-6 py-3 text-xs uppercase tracking-[2px] text-[#2b2725] transition hover:bg-[#c5a982] hover:text-white"
            >
              Stäng
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

const inputCls =
  "w-full border border-[#c5a982]/60 bg-white/70 px-4 py-3 font-sans text-sm text-[#2b2725] outline-none transition focus:border-[#c5a982] focus:bg-white";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-sans text-xs uppercase tracking-[2px] text-[#4a443f]">
        {label}
      </span>
      {children}
    </label>
  );
}
