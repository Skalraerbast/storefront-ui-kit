import { useEffect, useRef, useState } from "react";

interface VisionSectionProps {
  subtitle?: string;
  title?: string;
  text?: string;
}

export function VisionSection({
  subtitle = "Vår Vision",
  title = "Där historiens charm möter morgondagens vila.",
  text = "Lilla Hotellet är mer än bara en plats att sova på. Det är en hyllning till det personliga värdskapet, husens historia och de små medvetna val som gör den stora skillnaden. I våra fem varsamt bevarade byggnader skapar vi en oas där varje gäst får vara en del av platsens fortsatta berättelse, mitt i hjärtat av Lund.",
}: VisionSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -150px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="overflow-hidden bg-[#f1e9e0] px-5 py-24 text-center">
      <div
        ref={ref}
        className={`relative mx-auto max-w-[800px] transition-all duration-[1200ms] ease-out ${
          active ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="mb-5 block font-sans text-[13px] uppercase tracking-[4px] text-[#c5a982]">
          {subtitle}
        </span>

        <h2 className="mb-8 font-serif italic leading-tight text-[#2b2725] text-[clamp(32px,5vw,48px)]">
          {title}
        </h2>

        <div className="mb-10 font-sans text-[18px] leading-[1.8] text-[#4a443f]">
          <p>{text}</p>
        </div>

        <div className="relative mx-auto h-px w-[60px] bg-[#c5a982]">
          <span className="absolute left-[25px] top-[-5px] h-2.5 w-2.5 rotate-45 border border-[#c5a982] bg-[#f1e9e0]" />
        </div>
      </div>
    </section>
  );
}
