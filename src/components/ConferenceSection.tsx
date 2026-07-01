import { useState } from "react";

const INITIAL_FORM = {
  company: "",
  name: "",
  email: "",
  meetingType: "Heldag",
  date: "",
  guests: "",
  fikaTimes: "",
  lunchTime: "",
  message: "",
};

const LABEL_CLASS =
  "mb-2 text-[11px] font-bold uppercase tracking-wide text-[#4a443f]";
const FIELD_CLASS =
  "w-full border border-[#dcd3c9] bg-white p-[14px] text-[15px] text-[#2b2725] font-sans outline-none transition focus:border-[#c5a982]";
const BTN_MAIN =
  "inline-block bg-[#4A4A4A] px-[35px] py-[15px] text-[14px] font-bold uppercase tracking-[1px] text-white transition hover:opacity-90";

export function ConferenceSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [showThankYou, setShowThankYou] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Mock submit — connect to Supabase later.
    setShowThankYou(true);
    setForm(INITIAL_FORM);
  }

  return (
    <section className="bg-[#f1e9e0] px-5 py-20 font-sans text-[#2b2725]">
      <div className="mx-auto max-w-6xl">
        {/* Top row: image + text */}
        <div className="mb-20 flex flex-wrap items-center gap-[50px]">
          <div className="min-w-[300px] flex-1">
            <img
              src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80"
              alt="Konferensrum"
              className="block h-auto w-full shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            />
          </div>
          <div className="min-w-[300px] flex-1">
            <h2 className="mb-5 font-serif text-[38px] font-normal normal-case">
              Konferens i Lund med hemmakänsla!
            </h2>
            <p className="mb-8 text-[17px] leading-[1.8] text-[#4a443f]">
              Vårt konferensrum kombinerar klassisk interiör med modern teknik i
              en varsamt bevarad miljö, perfekt för små möten och kreativa
              sessioner. Här möts ni i en miljö som inspirerar till lugn, nya
              idéer och ett mer hållbart sätt att samlas.
            </p>
            <a href="#confBookingForm" className={BTN_MAIN}>
              SKICKA förfrågan
            </a>
          </div>
        </div>

        {/* Form title */}
        <div className="mb-10 text-center">
          <h2 className="mb-5 font-serif text-[38px] font-normal normal-case">
            Skapa plats för stora idéer
          </h2>
          <p className="text-[16px] text-[#4a443f]">
            Oavsett om det är ett styrelsemöte eller en kreativ workshop,
            skräddarsyr vi upplevelsen för er.
          </p>
        </div>

        {/* Form */}
        <form
          id="confBookingForm"
          onSubmit={handleSubmit}
          className="flex flex-wrap items-end gap-5 rounded bg-[#ebe4db] p-10"
        >
          <div className="flex min-w-full flex-1 flex-col md:min-w-[calc(33.333%-20px)]">
            <label className={LABEL_CLASS}>Företagets namn</label>
            <input
              type="text"
              required
              placeholder="Företag AB"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              className={FIELD_CLASS}
            />
          </div>

          <div className="flex min-w-full flex-1 flex-col md:min-w-[calc(33.333%-20px)]">
            <label className={LABEL_CLASS}>Ditt namn (Kontaktperson)</label>
            <input
              type="text"
              required
              placeholder="För- och efternamn"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={FIELD_CLASS}
            />
          </div>

          <div className="flex min-w-full flex-1 flex-col md:min-w-[calc(33.333%-20px)]">
            <label className={LABEL_CLASS}>E-post</label>
            <input
              type="email"
              required
              placeholder="Din e-post"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={FIELD_CLASS}
            />
          </div>

          <div className="flex min-w-full flex-1 flex-col md:min-w-[calc(33.333%-20px)]">
            <label className={LABEL_CLASS}>Mötestyp</label>
            <select
              value={form.meetingType}
              onChange={(e) => update("meetingType", e.target.value)}
              className={FIELD_CLASS}
            >
              <option>Heldag</option>
              <option>Halvdag</option>
              <option>Flera dagar</option>
            </select>
          </div>

          <div className="flex min-w-full flex-1 flex-col md:min-w-[calc(33.333%-20px)]">
            <label className={LABEL_CLASS}>Önskat datum</label>
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className={FIELD_CLASS}
            />
          </div>

          <div className="flex min-w-full flex-1 flex-col md:min-w-[calc(33.333%-20px)]">
            <label className={LABEL_CLASS}>Antal gäster</label>
            <input
              type="number"
              required
              placeholder="T.ex. 8"
              value={form.guests}
              onChange={(e) => update("guests", e.target.value)}
              className={FIELD_CLASS}
            />
          </div>

          <div className="flex min-w-full flex-1 flex-col md:min-w-[calc(33.333%-20px)]">
            <label className={LABEL_CLASS}>Önskade fikatider</label>
            <input
              type="text"
              placeholder="T.ex. 10:00 & 14:30"
              value={form.fikaTimes}
              onChange={(e) => update("fikaTimes", e.target.value)}
              className={FIELD_CLASS}
            />
          </div>

          <div className="flex min-w-full flex-1 flex-col md:min-w-[calc(33.333%-20px)]">
            <label className={LABEL_CLASS}>Önskad lunchtid</label>
            <input
              type="text"
              placeholder="T.ex. 12:00"
              value={form.lunchTime}
              onChange={(e) => update("lunchTime", e.target.value)}
              className={FIELD_CLASS}
            />
          </div>

          <div className="w-full">
            <hr className="border-[#dcd3c9]" />
          </div>

          <div className="flex w-full flex-col">
            <label className={LABEL_CLASS}>Särskilda önskemål</label>
            <textarea
              placeholder="Berätta om ni har önskemål om teknik, allergier eller andra detaljer..."
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={`${FIELD_CLASS} min-h-[100px] resize-y`}
            />
          </div>

          <button
            type="submit"
            className={`${BTN_MAIN} h-[49px] min-w-[200px]`}
          >
            Skicka förfrågan
          </button>
        </form>
      </div>

      {/* Thank-you modal */}
      {showThankYou && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowThankYou(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-w-[400px] bg-white p-10 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-serif text-2xl text-[#2b2725]">
              Tack för er förfrågan!
            </h2>
            <p className="mt-3 text-[#4a443f]">
              Vi återkommer med en offert för er konferens inom kort.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className={`${BTN_MAIN} mt-5 min-w-0 px-10 py-[10px]`}
            >
              Stäng
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
