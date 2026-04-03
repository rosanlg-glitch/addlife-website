import Button from "../components/Button";
import WhoWeAreSection from "../components/WhoWeAreSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import CoatingsSection from "../components/CoatingsSection";
import IndustriesSection from "../components/IndustriesSection";
import WhyAddlife from "../components/WhyAddlife";
import HipimsTech from "../components/HipimsTech";
import WorkFlow from "../components/WorkFLow";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="dark bg-surface min-h-[90vh]">
        <div className="max-w-7xl mx-auto py-20 flex items-center gap-10">
          <div className="flex-1 px-10">
            <h1 className="text-white text-4xl font-bold leading-snug">
              HiPIMS
              <span className="block">Coating Technology</span>
              <span className="block" style={{ color: "#FFA300" }}>
                Now In India!
              </span>
            </h1>
            <p className="text-muted mt-4 mb-6 max-w-sm text-sm">
              We maintain this reputation by ensuring that all essential
              equipment has redundancies in event of unforeseeable & unavoidable
              machine stoppage which translates to minimal downtime and best in
              class service to customers.
            </p>
            <div className="flex gap-4">
              <Button>Contact Us</Button>
              <Button variant="outline" className="border-white">
                Get a quote
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              className="w-full h-60 object-cover"
              src="/img.jpg"
              alt="hero"
            />
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <WhoWeAreSection />

      {/* What We Do */}
      <WhatWeDoSection />

      {/* Coatings Section */}
      <CoatingsSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Why Addlife */}
      <WhyAddlife />

      {/* HiPIMS Tech */}
      <HipimsTech />

      {/* WorkFlow */}
      <WorkFlow />
    </>
  );
}
