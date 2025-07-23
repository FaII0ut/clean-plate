import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import NutritionSection from "../components/NutritionSection";
import AboutCravingSection from "../components/AboutCravingSection";
import MenuSection from "../components/MenuSection";
import TestimonialsMarquee from "../components/TestimonialsMarquee";

import GallerySection from "../components/GallerySection";
import {motion} from "framer-motion";
import FAQSection from "../components/FAQSection";

const fadeInUp = {
  hidden: {opacity: 0, y: 40},
  visible: {opacity: 1, y: 0},
};

export default function Home() {
  return (
    <>
      <Hero />
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.8, delay: 0.3}}
      >
        <MenuSection />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.8, delay: 0}}
      >
        <StatsSection />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.8, delay: 0.1}}
      >
        <NutritionSection />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.8, delay: 0.2}}
      >
        <AboutCravingSection />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.8, delay: 0.4}}
      >
        <TestimonialsMarquee />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.8, delay: 0.5}}
      >
        <GallerySection />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.8, delay: 0.6}}
      >
        <FAQSection />
      </motion.div>
      {/* <PricingSection /> */}
      {/* <div>
        <p className="font-satoshi text-5xl">Home</p>
        <p className="font-forum text-8xl">Make a Moment with Craving</p>
      </div> */}
    </>
  );
}
