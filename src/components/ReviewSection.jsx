import { useState } from "react";
import { reviews, clientLogos } from "../data";

export default function ReviewSection() {
  const [active, setActive] = useState(0);

  const scrollLeft = () => {
    if (active > 0) setActive(active - 1);
  };
  const scrollRight = () => {
    if (active < reviews.length - 1) setActive(active + 1);
  };

  return (
    <div className="dark bg-surface py-16 md:py-20 px-6">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="ph text-primary">Customer Review</p>
          <h2 className="h2 text-white">AddLife customer review</h2>
        </div>

        {/* Logos Row 1 */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-3">
          {clientLogos.slice(0, 10).map((logo) => (
            <div
              key={logo.id}
              className="border border-gray-600 rounded-lg px-3 md:px-4 py-2 flex items-center justify-center"
            >
              {logo.image ? (
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="h-6 md:h-8 object-contain"
                />
              ) : (
                <span className="text-gray-400 font-bold text-xs md:text-sm">
                  LOGO
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Logos Row 2 */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
          {clientLogos.slice(0, 9).map((logo) => (
            <div
              key={logo.id}
              className="border border-gray-600 rounded-lg px-3 md:px-4 py-2 flex items-center justify-center"
            >
              {logo.image ? (
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="h-6 md:h-8 object-contain"
                />
              ) : (
                <span className="text-gray-400 font-bold text-xs md:text-sm">
                  LOGO
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Reviews Row */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Left - Title + Arrows */}
          <div className="w-full md:w-[220px] flex-shrink-0">
            <span className="text-white text-5xl md:text-6xl font-bold leading-none">
              "
            </span>
            <h3 className="text-white text-xl md:text-2xl font-bold mt-2 mb-6 md:mb-8">
              What our customer are saying
            </h3>
            <div className="flex items-center gap-4">
              <button
                onClick={scrollLeft}
                className="text-white hover:text-primary transition text-lg disabled:opacity-30"
                disabled={active === 0}
              >
                ←
              </button>
              <div className="flex-1 h-[2px] bg-white opacity-100" />
              <button
                onClick={scrollRight}
                className="text-white hover:text-primary transition text-lg disabled:opacity-30"
                disabled={active === reviews.length - 1}
              >
                →
              </button>
            </div>
          </div>

          {/* Review Cards */}
          <div className="flex-1 w-full">
            {/* Mobile - 1 card */}
            <div className="block md:hidden">
              <div className="bg-white rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-end mb-2">
                    <span className="text-primary text-2xl font-bold">"</span>
                  </div>
                  <h4
                    className="font-bold text-sm mb-3"
                    style={{ color: "#1f1f1f" }}
                  >
                    {reviews[active].title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#636363" }}
                  >
                    {reviews[active].description}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold relative flex-shrink-0">
                    {reviews[active].avatar}
                    <span className="absolute -bottom-1 -right-1 text-primary text-xs">
                      ★
                    </span>
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#1f1f1f" }}
                    >
                      {reviews[active].name}
                    </p>
                    <p className="text-xs" style={{ color: "#636363" }}>
                      {reviews[active].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet/Desktop - 3 cards */}
            <div className="hidden md:flex gap-4">
              {reviews.slice(active, active + 3).map((review) => (
                <div
                  key={review.id}
                  className="flex-1 bg-white rounded-2xl p-6 flex flex-col justify-between min-w-0"
                >
                  <div>
                    <div className="flex justify-end mb-2">
                      <span className="text-primary text-3xl font-bold">"</span>
                    </div>
                    <h4
                      className="font-bold text-base mb-3"
                      style={{ color: "#1f1f1f" }}
                    >
                      {review.title}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#636363" }}
                    >
                      {review.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold relative flex-shrink-0">
                      {review.avatar}
                      <span className="absolute -bottom-1 -right-1 text-primary text-xs">
                        ★
                      </span>
                    </div>
                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "#1f1f1f" }}
                      >
                        {review.name}
                      </p>
                      <p className="text-xs" style={{ color: "#636363" }}>
                        {review.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === index ? "w-10 bg-primary" : "w-10 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
