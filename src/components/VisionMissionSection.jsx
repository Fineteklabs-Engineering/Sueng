import { motion } from "framer-motion";
import { FiEye, FiTarget } from "react-icons/fi";
import '../styles/vision-mission.css';

const fadeUp = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const VisionMissionSection = () => {
  return (
    <section className="visionMissionSection">
      <div className="visionMissionInner">
        <motion.img
          className="visionMissionLines"
          src="/images/svg-photo2.png"
          alt="Decorative lines graphic"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        />

        <motion.h2
          className="visionMissionHeadline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUp}
        >
          What We Stand For
        </motion.h2>

        <div className="visionMissionGrid">
          <motion.div
            className="visionMissionCard"
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeUp}
          >
            <div className="visionMissionIcon">
              <FiEye />
            </div>
            <h3 className="visionMissionCardTitle">Vision</h3>
            <p className="visionMissionCardText">
              To be the most trusted production house in the East African
              market, known for quality, innovation, and dependable service.
            </p>
          </motion.div>

          <motion.div
            className="visionMissionCard"
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeUp}
          >
            <div className="visionMissionIcon">
              <FiTarget />
            </div>
            <h3 className="visionMissionCardTitle">Mission</h3>
            <p className="visionMissionCardText">
              To deliver reliable, high-quality products at the best pricing,
              backed by outstanding customer service on every order.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;