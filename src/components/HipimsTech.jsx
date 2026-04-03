import { hipimsTech } from "../data";

const cardClass =
  "min-h-[12rem] bg-black text-white text-sm font-semibold leading-snug text-left p-6 rounded-lg";

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
        {/* Header */}
        <p className="ph text-primary">{heading}</p>
        <h2 className="h2 text-white">{title}</h2>

        {/* Grid */}
        <div
          className="grid grid-cols-4 gap-3 p-4 rounded-lg mt-10 items-start"
          style={{ background: "#301f0b" }}
        >
          {/* Row 1 - 4 cells */}
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={cardClass}>
              {features[i].label}
            </div>
          ))}

          {/* Row 2 */}
          <div className={cardClass}>{features[4].label}</div>

          {/* Wide center - spans 2 cols */}
          <div className={`${cardClass} col-span-2 h-auto`}>
            <p className="text-white font-bold mb-3 text-xs">{centerText}</p>
            <div className="flex items-center justify-between gap-2">
              <img
                src={centerChart}
                alt="HiPIMS Graph"
                className="h-28 object-contain"
              />
              <p className="text-muted text-xs text-center flex-shrink-0 max-w-[80px]">
                {centerTag}
              </p>
              <img
                src={centerMachine}
                alt="HiPIMS Machine"
                className="h-28 w-28 object-contain"
              />
            </div>
          </div>

          <div className={cardClass}>{features[5].label}</div>

          {/* Row 3 - 4 cells */}
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
