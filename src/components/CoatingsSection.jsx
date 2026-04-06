import { useRef } from "react";
import { coatings } from "../data";

export default function CoatingsSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-text max-w-xs">
          Our Coating Types
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {coatings.map((coating) => (
          <div
            key={coating.id}
            className="min-w-[240px] md:min-w-[280px] bg-card rounded-2xl overflow-hidden border border-base flex-shrink-0"
          >
            <div className="bg-primary px-4 py-3">
              <p className="text-white font-semibold text-sm">
                {coating.label}
              </p>
            </div>
            <div className="bg-gray-100 h-40 md:h-48 flex items-center justify-center">
              <img
                src={coating.image}
                alt={coating.label}
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-text text-sm mb-1">
                {coating.title}
              </h3>
              <p className="text-muted text-xs">{coating.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-3 mt-8">
        <button
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full border border-base flex items-center justify-center hover:bg-primary transition"
        >
          ‹
        </button>
        <button
          onClick={scrollRight}
          className="w-10 h-10 rounded-full border border-base flex items-center justify-center hover:bg-primary transition"
        >
          ›
        </button>
      </div>
    </div>
  );
}
