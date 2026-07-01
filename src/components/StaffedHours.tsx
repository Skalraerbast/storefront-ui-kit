import { Clock } from "lucide-react";

interface HourRow {
  label: string;
  time: string;
}

interface SpecialNote {
  title: string;
  detail: string;
}

interface StaffedHoursProps {
  heading?: string;
  hours?: HourRow[];
  specialHeading?: string;
  specialNotes?: SpecialNote[];
  footnote?: string;
}

const DEFAULT_HOURS: HourRow[] = [
  { label: "Vardagar", time: "kl. 07.00 – 14.00" },
  { label: "Helger", time: "kl. 08.00 – 14.00" },
];

const DEFAULT_NOTES: SpecialNote[] = [
  { title: "Midsommarhelgen (19–21 juni):", detail: "Helt stängt" },
  { title: "Sommarstängt:", detail: "17 juli – 31 juli" },
];

export function StaffedHours({
  heading = "Bemannade tider",
  hours = DEFAULT_HOURS,
  specialHeading = "Avvikande tider & Sommarstängt",
  specialNotes = DEFAULT_NOTES,
  footnote = "Planerar ni att ankomma efter kl. 14.00? Vänligen kontakta oss via mejl i förväg för smidig incheckning.",
}: StaffedHoursProps) {
  return (
    <div className="mx-auto my-12 max-w-[750px] rounded-sm bg-[#f1e9e0] p-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div className="relative border border-[#c5a982] bg-[#f1e9e0] px-6 py-11 text-center">
        <div className="mb-5 flex justify-center">
          <Clock
            className="h-[35px] w-[35px] text-[#c5a982]"
            strokeWidth={1.2}
          />
        </div>

        <h3 className="m-0 mb-5 font-serif text-2xl font-normal uppercase tracking-[3px] text-[#2E2A39]">
          {heading}
        </h3>

        <div className="font-sans text-[17px] leading-[2] tracking-[0.5px] text-[#4A4A4A]">
          {hours.map((row, i) => (
            <div
              key={row.label}
              className={i === hours.length - 1 ? "mb-6" : "mb-2"}
            >
              {row.label}:{" "}
              <span className="border-b-2 border-[#c5a982] pb-0.5 font-bold text-[#2E2A39]">
                {row.time}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-[#e0d4c3] pt-5 font-sans">
          <h4 className="m-0 mb-2.5 font-serif text-sm font-normal uppercase tracking-[2px] text-[#c5a982]">
            {specialHeading}
          </h4>
          <div className="text-[15px] leading-relaxed text-[#4A4A4A]">
            {specialNotes.map((note) => (
              <p key={note.title} className="my-1">
                <strong>{note.title}</strong> {note.detail}
              </p>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-7 max-w-[500px] font-sans text-sm italic text-[#8a847e]">
          {footnote.split("Vänligen").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <br />
                Vänligen
              </span>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </p>
      </div>
    </div>
  );
}
