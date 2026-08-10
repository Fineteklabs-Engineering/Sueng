import { motion } from "framer-motion";
import "../styles/about-section.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const coreValues = [
  "Quality",
  "Innovation",
  "Reliability",
  "Customer Service",
  "Craftsmanship",
];

const AboutSection = () => {
  return (
    <section className="aboutSection">
      <div className="aboutTop">
        <motion.div
          className="aboutEyebrowWrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className="aboutDot" />
          <p className="aboutEyebrow">About Sueng</p>
        </motion.div>

        <div className="aboutTopGrid">
          <motion.h2
            className="aboutHeadline"
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeUp}
          >
            Driven By Ideas, Built On Two Decades Of Craft
          </motion.h2>

          <div className="aboutRight">
            <motion.p
              className="aboutText"
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeUp}
            >
              Incorporated in Kenya in 2005, Sueng has grown from a two-person
              startup into a 100+ employee production house with over 20,000
              sq. ft. of manufacturing space. We produce branded apparel,
              packaging, printing, and safety wear in-house for some of East
              Africa's biggest names.
            </motion.p>

            <motion.a
              href="https://sueng.com/wp-content/uploads/2020/12/SUENG-ENTERPRISES-LTD-COMPANY-PROFILE-2020-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="aboutCta"
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeUp}
            >
              Download company profile <span className="aboutArrow">↗</span>
            </motion.a>

            <motion.div
              className="aboutValues"
              custom={0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeUp}
            >
              <p className="aboutValuesLabel">Core Values:</p>
              <p className="aboutValuesList">{coreValues.join(", ")}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="aboutImageWrap"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img
          src="/images/about-image.webp"
          alt="Sueng Enterprises production floor"
          className="aboutImage"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;