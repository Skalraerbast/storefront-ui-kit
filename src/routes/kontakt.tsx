import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakta oss — Lilla Hotellet" },
      { name: "description", content: "Kontakta Lilla Hotellet i Lund — vi hjälper dig personligen med frågor och önskemål." },
      { property: "og:title", content: "Kontakta oss — Lilla Hotellet" },
      { property: "og:description", content: "Kontakta Lilla Hotellet i Lund — vi hjälper dig personligen med frågor och önskemål." },
    ],
  }),
  component: KontaktPage,
});

const INPUT_CLASS =
  "w-full border border-[#dcd3c9] bg-white/30 px-5 py-4 font-sans text-base text-[#4A4A4A] outline-none transition-all duration-300 focus:border-[#c5a982] focus:bg-white/60";

const LABEL_CLASS =
  "mb-3 block font-sans text-xs font-bold uppercase tracking-[2px] text-[#4A4A4A]";

const BUTTON_CLASS =
  "bg-[#4A4A4A] px-6 py-5 font-sans text-sm font-bold uppercase tracking-[3px] text-[#f1e9e0] transition-all duration-500 hover:bg-[#2b2725] hover:tracking-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]";

function KontaktPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function handleClose() {
    setForm({ name: "", email: "", subject: "", message: "" });
    setIsSubmitted(false);
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-[#f1e9e0] px-5 py-24 font-sans text-[#4A4A4A]">
          <div className="relative mx-auto max-w-[800px]">
            {!isSubmitted ? (
              <div>
                <div className="mb-14 text-center">
                  <h1 className="mb-5 font-serif text-[32px] font-normal text-[#2b2725] sm:text-[42px]">
                    Kontakta Lilla Hotellet
                  </h1>
                  <p className="mx-auto max-w-[600px] font-sans text-lg leading-relaxed opacity-90">
                    Har du frågor inför din vistelse eller vill du boka något speciellt?
                    Skriv till oss så hjälper vi dig personligen.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-7 sm:grid-cols-2"
                  noValidate
                >
                  <div>
                    <label className={LABEL_CLASS} htmlFor="name">Namn</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ditt namn"
                      required
                      maxLength={100}
                      className={INPUT_CLASS}
                    />
                  </div>

                  <div>
                    <label className={LABEL_CLASS} htmlFor="email">E-post</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Din e-postadress"
                      required
                      maxLength={255}
                      className={INPUT_CLASS}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className={LABEL_CLASS} htmlFor="subject">Ärende</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="T.ex. Gruppbokning eller önskemål"
                      maxLength={200}
                      className={INPUT_CLASS}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className={LABEL_CLASS} htmlFor="message">Meddelande</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hur kan vi hjälpa dig?"
                      required
                      maxLength={2000}
                      className={INPUT_CLASS}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`${BUTTON_CLASS} mt-5 sm:col-span-2`}
                  >
                    Skicka förfrågan
                  </button>
                </form>
              </div>
            ) : (
              <div className="border border-[#c5a982] px-5 py-16 text-center">
                <h3 className="mb-5 font-serif text-[32px] text-[#2b2725]">
                  Vi har mottagit ditt meddelande
                </h3>
                <p className="mx-auto max-w-[600px] font-sans text-lg leading-relaxed opacity-90">
                  Tack för att du hör av dig. Vi återkommer till dig så snart vi kan,
                  oftast inom ett par timmar.
                </p>
                <button
                  onClick={handleClose}
                  className={`${BUTTON_CLASS} mt-8 inline-block w-auto px-10 py-4`}
                >
                  Stäng
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
