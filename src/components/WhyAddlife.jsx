import { whyAddlife } from "../data";

export default function WhyAddlife() {
  const { heading, title, leftSection, benefits, features } = whyAddlife;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="ph text-primary">{heading}</p>
        <h2 className="h2 text-text">{title}</h2>
      </div>

      {/* Outer Grid Card */}
      <div
        className="grid grid-cols-4 gap-4 p-4 rounded-xl"
        style={{ background: "#e8e8e8" }}
      >
        {/* Left Panel */}
        <div className="bg-white rounded-lg p-6 flex flex-col gap-6">
          <div className="flex gap-4">
            {leftSection.images.map((img, i) => (
              <div key={i} className="flex-1">
                <p className="text-xs font-semibold text-text mb-2">
                  {img.label}
                </p>
                <div className="relative">
                  <img
                    src={img.image}
                    alt={img.label}
                    className="w-full h-24 object-cover rounded"
                  />
                  <span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                    {img.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <img
              src={leftSection.specs.image}
              alt="spec"
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div className="grid grid-cols-2 gap-x-4">
              {leftSection.specs.details.map((d, i) => (
                <p key={i} className="text-xs text-muted">
                  {d}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-auto">
            {leftSection.highlights.map((h, i) => (
              <p key={i} className="text-sm font-bold text-text">
                {h}
              </p>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="col-span-3 flex flex-col gap-3">
          {/* Column Headers */}
          <div className="grid grid-cols-2 gap-4 px-2">
            <h3 className="text-base font-bold text-text">
              Benefits of AddLife PVD Coating
            </h3>
            <h3 className="text-base font-bold text-text">Salient Features</h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Benefits */}
            <div className="flex flex-col gap-3">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg px-6 py-8 text-sm text-muted text-center"
                >
                  {b}
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg px-6 py-8 text-sm text-muted text-center"
                >
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
