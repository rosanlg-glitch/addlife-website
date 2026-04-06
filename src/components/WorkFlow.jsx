import { useState, useRef } from "react";
import { workFlow } from "../data";

export default function WorkFlow() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="ph text-primary">Our Process</p>
        <h2 className="h2 text-text">AddLife Work Flow</h2>
      </div>

      {/* Tabs + Arrows */}
      <div
        className="flex items-center justify-between mb-6 border-b border-base overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Tabs */}
        <div className="flex flex-shrink-0">
          {workFlow.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActive(index)}
              className={`
                relative flex-shrink-0 px-4 md:px-8 py-3
                text-sm md:text-base font-semibold
                after:content-[''] after:block
                after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                after:h-[3px] after:bg-primary
                after:transition-all after:duration-300
                ${
                  active === index
                    ? "text-text after:w-full"
                    : "text-muted after:w-0 hover:text-text hover:after:w-full"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-3 mb-1 flex-shrink-0">
          <button
            onClick={scrollLeft}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-base flex items-center justify-center hover:bg-gray-100 transition text-sm md:text-base"
          >
            ‹
          </button>
          <button
            onClick={scrollRight}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-base flex items-center justify-center hover:bg-gray-100 transition text-sm md:text-base"
          >
            ›
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {workFlow[active].steps.map((step) => (
          <div
            key={step.id}
            style={{ width: "260px", minWidth: "260px", maxWidth: "260px" }}
            className="bg-card rounded-2xl overflow-hidden border border-base flex-shrink-0"
          >
            <div className="bg-primary px-4 py-3">
              <p className="text-white font-semibold text-sm">{step.title}</p>
            </div>
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
            <div className="p-4">
              <h3 className="font-bold text-text text-sm mb-1">{step.title}</h3>
              <p className="text-muted text-xs line-clamp-2">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-3 mt-6">
        {workFlow.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === index ? "w-10 bg-primary" : "w-10 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
