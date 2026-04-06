import { useState, useRef, useEffect } from "react";
import { workFlow } from "../data";

export default function OurProcess() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  // ✅ Reset scroll on tab change
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      requestAnimationFrame(() => {
        el.scrollLeft = 0;
      });
    }
  }, [active]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="text-center mb-8 md:mb-10">
        <p className="ph text-primary">Our Process</p>
        <h2 className="h2 text-text">AddLife Work Flow</h2>
      </div>

      {/* Tabs */}
      <div className="mb-6 border-b border-base overflow-x-auto no-scrollbar">
        <div className="flex w-max min-w-full">
          {workFlow.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActive(index)}
              className={`
                relative px-4 md:px-8 py-3 text-sm md:text-base font-semibold whitespace-nowrap
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                after:h-[3px] after:bg-primary after:transition-all after:duration-300
                ${
                  active === index
                    ? "text-text after:w-full"
                    : "text-muted after:w-0"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div
        key={active}
        ref={scrollRef}
        className="
          flex gap-4 md:gap-6 overflow-x-auto pb-4
          snap-x snap-mandatory
          no-scrollbar
          cursor-grab active:cursor-grabbing
        "
      >
        {workFlow[active].steps.map((step) => (
          <div
            key={step.id}
            className="
              snap-start flex-shrink-0
              w-[85%] sm:w-[300px] md:w-[260px]
              bg-card rounded-2xl border border-base overflow-hidden
            "
          >
            {/* Top */}
            <div className="bg-primary px-4 py-3">
              <p className="text-white font-semibold text-sm">{step.title}</p>
            </div>

            {/* Image */}
            <div className="bg-gray-100 h-36 md:h-48 flex items-center justify-center">
              {step.image ? (
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-contain p-4"
                />
              ) : (
                <span className="text-gray-300 text-4xl md:text-5xl font-bold">
                  {step.number}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-text text-sm mb-1">{step.title}</h3>
              <p className="text-muted text-xs line-clamp-2">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center md:justify-end gap-3 mt-4">
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
  );
}
