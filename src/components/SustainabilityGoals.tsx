type Goal = {
  title: string;
  actions: string[];
};

interface SustainabilityGoalsProps {
  eyebrow?: string;
  title?: string;
  intro?: string;
  goals?: Goal[];
}

const defaultGoals: Goal[] = [
  {
    title: "All frukost ska vara lokal och ekologisk",
    actions: [
      "Endast lokala och ekologiska råvaror på frukostbordet",
      "Säsongsanpassad meny för att minska matsvinn",
      "Samarbete med lokala leverantörer och producenter",
    ],
  },
  {
    title: "Minska hotellets vattenförbrukning",
    actions: [
      "Snålspolande kranar och duschar i alla rum",
      "Gäster uppmuntras återanvända handdukar",
      "Löpande översyn av förbrukning per rum",
    ],
  },
  {
    title: "Uppmuntra hållbart resande till och från hotellet",
    actions: [
      "Aktivt tipsa gäster om tåg och cykel",
      "Samarbeta med lokala aktörer framför nationella kedjor",
      "Erbjuda cykelförvaring och lokala kartor",
    ],
  },
];

export function SustainabilityGoals({
  eyebrow = "HÅLLBARHET",
  title = "Våra mål",
  intro = "Vi arbetar aktivt mot konkreta mål — för miljön, för Lund och för en bättre gästupplevelse.",
  goals = defaultGoals,
}: SustainabilityGoalsProps) {
  return (
    <section className="bg-[#f1e9e0] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6b8f5a]">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl text-[#2b2725] sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[#2b2725]/80">
            {intro}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {goals.map((goal) => (
            <article
              key={goal.title}
              className="rounded-sm bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            >
              <h3 className="font-display text-xl text-[#2b2725]">
                {goal.title}
              </h3>
              <div className="mt-6 border-t border-[#e5dcd0] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6b8f5a]">
                  Åtgärder
                </p>
                <ul className="mt-4 space-y-3">
                  {goal.actions.map((action) => (
                    <li
                      key={action}
                      className="flex gap-2 text-sm text-[#2b2725]"
                    >
                      <span className="text-[#6b8f5a]">→</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SustainabilityGoals;
