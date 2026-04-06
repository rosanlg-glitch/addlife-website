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
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Industries We Serve
          </h2>
          <p className="text-white text-base md:text-lg">
            600+ Customers, In 15 States
          </p>
          <p className="text-white text-base md:text-lg">
            Reaching Out To 80% Of India's Key Manufacturing Clusters
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="bg-white flex flex-col items-start p-4 md:p-6 w-[150px] md:w-[180px] lg:w-[220px]"
            >
              <img
                src={industry.image}
                alt={industry.label}
                className="w-14 md:w-20 h-14 md:h-20 object-contain mb-4 md:mb-6"
              />
              <p className="text-gray-700 text-sm md:text-base font-medium">
                {industry.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
