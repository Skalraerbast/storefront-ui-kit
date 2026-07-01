import { useEffect, useState } from "react";

const IMAGES = [
  "/assets/hero/hotel-exterior.jpg",
  "/assets/hero/hotel-courtyard.jpg",
];

const INTERVAL_MS = 6000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={src}
            alt=""
            className={`h-full w-full object-cover ${
              i === index ? "animate-kenburns" : ""
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/55" />

      <style>{`
        @keyframes kenburns {
          0%   { transform: scale(1.05) translate(0, 0); }
          50%  { transform: scale(1.18) translate(-1.5%, -1%); }
          100% { transform: scale(1.05) translate(0, 0); }
        }
        .animate-kenburns {
          animation: kenburns ${INTERVAL_MS * 2}ms ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
