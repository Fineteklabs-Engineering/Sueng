import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi";
import '../styles/cta-section.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const CtaSection = () => {
  return (
    <section className="ctaSection">
      <div className="ctaCard">
        <motion.div
          className="ctaEyebrowWrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          <span className="ctaDot" />
          <p className="ctaEyebrow">Let's Work Together</p>
        </motion.div>

        <motion.h2
          className="ctaHeadline"
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          Got An Idea? Let's Bring
          <br />
          Your Brand To Life.
        </motion.h2>

        <motion.p
          className="ctaSubtext"
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          From apparel to packaging, printing to safety wear — tell us what
          you need and we'll handle the rest, in-house, start to finish.
        </motion.p>

        <motion.div
          className="ctaActions"
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <Link to="/" className="ctaBtnSolid">
            Get In Touch
          </Link>
          <a href="tel:+254722868219" className="ctaBtnOutline">
            Call Us
          </a>
        </motion.div>

   
      </div>
    </section>
  );
};

export default CtaSection;