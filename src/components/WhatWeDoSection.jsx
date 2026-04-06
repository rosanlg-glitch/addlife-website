import { useState } from "react";
import { whatWeDo } from "../data";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function WhatWeDoSection() {
  const [active, setActive] = useState(0);

  return (
    <div className="dark bg-surface py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="ph text-white">What We Do</p>
          <h2 className="h2 text-white">AddLife what we do</h2>
        </div>

        {/* Tabs - scrollable on mobile */}
        <div
          className="flex overflow-x-auto justify-between border-b border-gray-500 mb-8"
          style={{ scrollbarWidth: "none" }}
        >
          {whatWeDo.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActive(index)}
              className={`
                relative flex-shrink-0 px-4 md:px-8 py-3 text-sm md:text-xl font-semibold
                after:content-[''] after:block
                after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                after:h-[3px] after:bg-primary
                after:transition-all after:duration-300
                ${
                  active === index
                    ? "text-white after:w-full"
                    : "text-muted after:w-0 hover:text-white hover:after:w-full"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 w-full">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
              {whatWeDo[active].title}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-8">
              {whatWeDo[active].description}
            </p>
            <Link to={whatWeDo[active].buttonPath}>
              <Button>{whatWeDo[active].buttonLabel} →</Button>
            </Link>
          </div>
          <div className="flex-1 w-full">
            <img
              src={whatWeDo[active].image}
              alt={whatWeDo[active].title}
              className="w-full h-52 sm:h-64 md:h-80 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
