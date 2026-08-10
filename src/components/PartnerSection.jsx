import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import '../styles/partner-section.css';

const partners = [
  { name: "Safaricom", logo: "/images/safaricom.png" },
  { name: "Coca-Cola", logo: "/images/cocacola.png" },
  { name: "Cooperative", logo: "/images/cooperative.png" },
  { name: "Toyota Kenya", logo: "/images/toyota.png" },
  { name: "Kenya Airways", logo: "/images/kenya-airways.png" },
  { name: "L'Oréal", logo: "/images/loreal.jpg" },
  { name: "Unilever", logo: "/images/unilever.png" },
  { name: "Bata", logo: "/images/bata.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const PartnersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trailCount = 4;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };

  const activePartner = partners[activeIndex];

  const trailingPartners = Array.from({ length: trailCount }, (_, i) => {
    const index = (activeIndex + 1 + i) % partners.length;
    return partners[index];
  });

  return (
    <section className="partnersSection">
      <div className="partnersOverlay" />

      <div className="partnersInner">
        <div className="partnersHeader">
          <div className="partnersHeaderText">
            <motion.div
              className="partnersEyebrowWrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
            >
              <span className="partnersDot" />
              <p className="partnersEyebrow">Our Partners</p>
            </motion.div>

            <motion.h2
              className="partnersHeadline"
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
            >
              Trusted By East Africa's Biggest Names
            </motion.h2>
          </div>

          <motion.div
            className="partnersArrows"
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            <button
              className="partnersArrowBtn"
              onClick={handlePrev}
              aria-label="Previous partner"
            >
              <FiArrowLeft />
            </button>
            <button
              className="partnersArrowBtn"
              onClick={handleNext}
              aria-label="Next partner"
            >
              <FiArrowRight />
            </button>
          </motion.div>
        </div>

        <div className="partnersTimelineRow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePartner.name}
              className="partnersActiveLogo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={activePartner.logo}
                alt={activePartner.name}
                className="partnersActiveLogoImage"
              />
            </motion.div>
          </AnimatePresence>

          <div className="partnersTrailTrack">
            <span className="partnersTrailLine" />
            {trailingPartners.map((partner, i) => (
              <div className="partnersTrailItem" key={`${partner.name}-${i}`}>
                <span className="partnersTrailDot" />
                <div className="partnersTrailLogoWrap">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partnersTrailLogoImage"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;