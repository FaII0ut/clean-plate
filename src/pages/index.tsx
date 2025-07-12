
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import NutritionSection from "../components/NutritionSection";
import AboutCravingSection from "../components/AboutCravingSection";
import MenuSection from "../components/MenuSection";
import TestimonialsMarquee from "../components/TestimonialsMarquee";

import GallerySection from "../components/GallerySection";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <NutritionSection />
      <AboutCravingSection />
      <MenuSection />
      <TestimonialsMarquee />
      <GallerySection />
      <FAQSection />
      {/* <PricingSection /> */}
      {/* <div>
        <p className="font-satoshi text-5xl">Home</p>
        <p className="font-forum text-8xl">Make a Moment with Craving</p>
      </div> */}
    </>
  );
}
