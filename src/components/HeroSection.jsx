import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import '../styles/hero-section.css';

const textVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.9, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <section className="heroSection">
      <video
        className="heroVideo"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/hero-fallback.jpg"
      >
        <source
          src="https://res.cloudinary.com/gjpfbvzb/video/upload/v1786273108/AQP1fU7AtEP9lIy1VAuwfCC48Qz1plHgAoMl4dTyTvwtSxhnQQBTwnE7n2bvQVBuQekpmzKWZanm3KlXR-PMVVb5HKAFWUn2mgA_v7toeo.mp4"
          type="video/mp4"
        />
      </video>

      <div className="heroOverlay" />

      <div className="heroContent">
        <motion.p
          className="heroEyebrow"
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Driven By Ideas Since 2005
        </motion.p>

        <motion.h1
          className="heroHeadline"
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Sueng Enterprises
          <br />
          Limited
        </motion.h1>

        <motion.p
          className="heroSubtext"
          custom={0.55}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Kenya's trusted production house for branded apparel, packaging,
          printing, and safety wear - built for East Africa's biggest names.
        </motion.p>

        <motion.div initial="hidden" animate="visible" variants={ctaVariants}>
          <Link to="/who-we-are" className="heroCta">
            Discover Sueng
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;