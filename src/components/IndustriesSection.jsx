import { industries } from "../data";

export default function IndustriesSection() {
  return (
    <div
      className="relative py-20 px-6"
      style={{
        backgroundImage: "url('/industries-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-3">
            Industries We Serve
          </h2>
          <p className="text-white text-lg">600+ Customers, In 15 States</p>
          <p className="text-white text-lg">
            Reaching Out To 80% Of India's Key Manufacturing Clusters
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-4 justify-center">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="bg-white flex flex-col items-start p-6 w-[220px] flex-shrink-0"
            >
              {/* Icon Image */}
              <img
                src={industry.image}
                alt={industry.label}
                className="w-20 h-20 object-contain mb-6"
              />
              {/* Label */}
              <p className="text-gray-700 text-base font-medium">
                {industry.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
