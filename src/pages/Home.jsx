import Button from "../components/Button";
import WhoWeAreSection from "../components/WhoWeAreSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import CoatingsSection from "../components/CoatingsSection";
import IndustriesSection from "../components/IndustriesSection";
import WhyAddlife from "../components/WhyAddlife";
import HipimsTech from "../components/HipimsTech";
import WorkFlow from "../components/WorkFLow";
import BlogSection from "../components/BlogsSection";
import ReviewSection from "../components/ReviewSection";
import ContactUs from "../components/ContactUs";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="dark bg-surface min-h-[90vh] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
          {/* Left Part */}
          <div className="flex-1 flex flex-col items-start text-left w-full">
            <h1
              className="text-white font-bold leading-snug
        text-3xl        
        sm:text-4xl     
        md:text-4xl     
        lg:text-5xl     
        xl:text-5xl"
            >
              HiPIMS
              <span className="block">Coating Technology</span>
              <span className="block" style={{ color: "#FFA300" }}>
                Now In India!
              </span>
            </h1>

            <p
              className="text-muted mt-4 mb-6 text-sm md:text-base leading-relaxed
        max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            >
              We maintain this reputation by ensuring that all essential
              equipment has redundancies in event of unforeseeable & unavoidable
              machine stoppage which translates to minimal downtime and best in
              class service to customers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button>Contact Us</Button>
              <Button variant="outline" className="border-white">
                Get a quote
              </Button>
            </div>
          </div>

          {/* Right Part - Image */}
          <div className="flex-1 w-full">
            <img
              className="w-full object-cover rounded-lg
          h-48
          sm:h-64
          md:h-80
          lg:h-96
          xl:h-[500px]"
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

      {/* Blogs */}
      <BlogSection />

      {/* Reviews */}
      <ReviewSection />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </>
  );
}
