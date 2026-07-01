interface WelcomeSectionProps {
  title?: string;
  tagline?: string;
  paragraphs?: string[];
  closing?: string;
}

const DEFAULT_PARAGRAPHS = [
  "Upplev charmen i att bo mitt bland Lunds kullerstensgator, med domkyrkan och universitetet precis runt hörnet. Lilla Hotellet är en hemtrevlig fristad där personlig service, varsam omtanke om miljön och en rofylld atmosfär står i centrum.",
  "Här möts du av varsamt inredda rum, en lummig innergård och en känsla av att komma hem, snarare än till ett hotell. Oavsett om du besöker oss för affärer eller nöje, erbjuder vi ett lugnt och centralt boende med omtanke om miljön, platsens historia och människan i fokus.",
];

export function WelcomeSection({
  title = "Välkommen till Lilla Hotellet i Lund",
  tagline = "– En personlig oas i hjärtat av den historiska universitetsstaden.",
  paragraphs = DEFAULT_PARAGRAPHS,
  closing = "Välkommen till ditt hem i Lund.",
}: WelcomeSectionProps) {
  return (
    <section className="bg-[#f1e9e0] px-5 py-20">
      <div className="mx-auto max-w-[900px] bg-[#ede4d6]/60 px-6 py-16 sm:px-16 sm:py-20">
        <h2 className="text-center font-serif text-[clamp(28px,4vw,40px)] font-normal text-[#2b2725]">
          {title}
        </h2>

        <p className="mt-10 text-center font-sans text-[15px] font-bold text-[#2b2725]">
          {tagline}
        </p>

        <div className="mx-auto mt-8 max-w-[720px] space-y-6 text-center font-sans text-[15px] leading-[1.9] text-[#3a352f]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <p className="mt-10 text-center font-sans text-[15px] font-bold text-[#2b2725]">
          {closing}
        </p>
      </div>
    </section>
  );
}
