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

const bottomVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
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
      </div>

      <div className="heroBottomRow">
        <motion.div
          custom={0.8}
          initial="hidden"
          animate="visible"
          variants={bottomVariants}
        >
          <Link to="/" className="heroCta">
            Discover Sueng
          </Link>
        </motion.div>

       <motion.div
  className="heroStatsCard"
  custom={0.95}
  initial="hidden"
  animate="visible"
  variants={bottomVariants}
>
  <div className="statsImageCell">
    <img src="https://res.cloudinary.com/gjpfbvzb/image/upload/v1786701985/sueng_enterprises_ltd_cover_ypprgr.jpg" alt="Sueng production floor" />
    <span className="statsImageIcon">↗</span>
  </div>
  <div className="statsCell statsCellPrimary">
    <span className="statsLabel">Years in Production</span>
    <span className="statsValue">20+</span>
  </div>
  <div className="statsCell">
    <span className="statsLabel">Brands Served</span>
    <span className="statsValue">150+</span>
  </div>
  <div className="statsCell">
    <span className="statsLabel">Units Produced Yearly</span>
    <span className="statsValue">1M+</span>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default HeroSection;