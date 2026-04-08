import Button from "../components/Button";

export default function HeroSection() {
  return (
    <div className="dark bg-surface min-h-[90vh] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Part */}
        <div className="flex-1 flex flex-col items-start text-left w-full">
          <h1
            className="
              text-white font-bold leading-snug
              text-3xl
              sm:text-4xl
              md:text-4xl
              lg:text-5xl
              xl:text-5xl
            "
          >
            HiPIMS
            <span className="block">Coating Technology</span>
            <span className="block text-[#FFA300]">Now In India!</span>
          </h1>

          <p
            className="
              text-muted mt-4 mb-6 text-sm md:text-base leading-relaxed
              max-w-auto
            "
          >
            We maintain this reputation by ensuring that all essential equipment
            has redundancies in event of unforeseeable & unavoidable machine
            stoppage which translates to minimal downtime and best in class
            service to customers.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button>Contact Us</Button>
            <Button variant="outline" className="border-white text-white">
              Get a quote
            </Button>
          </div>
        </div>

        {/* Right Part - Image */}
        <div className="flex-1 w-full">
          <img
            className="
              w-full object-cover rounded-lg
              h-48
              sm:h-64
              md:h-80
              lg:h-96
              xl:h-[500px]
            "
            src="/img.jpg"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}
