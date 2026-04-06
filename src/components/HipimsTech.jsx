import { hipimsTech } from "../data";

const cardClass =
  "h-full min-h-[8rem] md:min-h-[12rem] bg-black text-white text-xs md:text-sm font-semibold leading-snug text-left p-4 md:p-6 rounded-lg flex";

export default function HipimsTech() {
  const {
    heading,
    title,
    centerText,
    centerChart,
    centerMachine,
    centerTag,
    features,
  } = hipimsTech;

  return (
    <section className="dark bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="ph text-primary">{heading}</p>
        <h2 className="h2 text-white">{title}</h2>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-lg mt-10 items-stretch"
          style={{ background: "#301f0b" }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={cardClass}>
              {features[i].label}
            </div>
          ))}
          <div className={cardClass}>{features[4].label}</div>
          <div
            className={`${cardClass} col-span-1 md:col-span-2 flex-col justify-between`}
          >
            <p className="text-white font-bold mb-3 text-xs">{centerText}</p>
            <div className="flex items-center justify-between gap-2">
              <img
                src={centerChart}
                alt="chart"
                className="h-20 md:h-28 object-contain"
              />
              <p className="text-muted text-xs text-center">{centerTag}</p>
              <img
                src={centerMachine}
                alt="machine"
                className="h-20 md:h-28 w-20 md:w-28 object-contain"
              />
            </div>
          </div>
          <div className={cardClass}>{features[5].label}</div>
          {[6, 7, 8, 9].map((i) => (
            <div key={i} className={cardClass}>
              {features[i].label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
