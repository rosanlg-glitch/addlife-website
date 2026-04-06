import HeroSection from "../components/HeroSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import CoatingsSection from "../components/CoatingsSection";
import IndustriesSection from "../components/IndustriesSection";
import WhyAddlife from "../components/WhyAddlife";
import HipimsTech from "../components/HipimsTech";
import OurProcess from "../components/OurProcess";
import BlogSection from "../components/BlogsSection";
import ReviewSection from "../components/ReviewSection";
import ContactUs from "../components/ContactUs";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

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
      <OurProcess />

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
