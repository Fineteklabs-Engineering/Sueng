import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import VisionMissionSection from "../components/VisionMissionSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import PartnerSection from "../components/PartnerSection";
import '../styles/home.css'
import CtaSection from "../components/CtaSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sueng Group</title>
        <meta
          name="description"
          content="Sueng Enterprises Ltd is Kenya's trusted production house for branded apparel, packaging, printing, and safety wear, serving East Africa's biggest brands since 2005."
        />
      </Helmet>

      <main className="homePage">
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <WhatWeDoSection />
        <PartnerSection />
        <CtaSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;