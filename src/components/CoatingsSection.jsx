import { useRef } from "react";
import { coatings } from "../data";

export default function CoatingsSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <h2 className="text-3xl font-bold text-text max-w-xs">
          Our Coating Types
        </h2>
        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-base flex items-center justify-center hover:bg-gray-100 transition"
          >
            ‹
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-base flex items-center justify-center hover:bg-gray-100 transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {coatings.map((coating) => (
          <div
            key={coating.id}
            className="min-w-[280px] bg-card rounded-2xl overflow-hidden border border-base flex-shrink-0"
          >
            {/* Orange Header */}
            <div className="bg-primary px-4 py-3">
              <p className="text-white font-semibold text-sm">
                {coating.label}
              </p>
            </div>

            {/* Image */}
            <div className="bg-gray-100 h-48 flex items-center justify-center">
              <img
                src={coating.image}
                alt={coating.label}
                className="h-full w-full object-contain p-4"
              />
            </div>

            {/* Text */}
            <div className="p-4">
              <h3 className="font-bold text-text text-sm mb-1">
                {coating.title}
              </h3>
              <p className="text-muted text-xs">{coating.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
