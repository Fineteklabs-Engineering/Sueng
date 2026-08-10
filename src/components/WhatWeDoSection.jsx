import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import '../styles/what-we-do-section.css';

const services = [
  {
    title: "Apparel",
    description:
      "Stitching, embroidery, screen and sublimation printing, produced in-house at scale for any brand.",
    image: "/images/about-image.webp",
    link: "/products/apparel",
  },
  {
    title: "Printing",
    description:
      "Corporate stationery, publications, banners, and point-of-sale material with fast turnaround.",
    image: "/images/printing.png",
    link: "/products/printing",
  },
  {
    title: "Packaging",
    description:
      "Non-woven bags, gift bags, and custom-printed packaging built for brand visibility.",
    image: "/images/packaging.png",
    link: "/products/packaging",
  },
  {
    title: "Safety & PPEs",
    description:
      "Surgical and 3-ply disposable masks manufactured on state-of-the-art equipment, up to 30,000 units a shift.",
    image: "/images/safety.png",
    link: "/products/safety-ppes",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

// Grid is 2 columns x 2 rows. Each card's natural slot index maps to a
// row/col. To make them visually sit on top of the first (top-left) card,
// we translate every other card by -100% of its own width/height (its
// "own size" doubles as the distance to the next grid cell), pulling it
// visually onto the top-left slot regardless of screen size.
const stackTargets = [
  { x: "0%", y: "0%", rotate: 0 },     // top-left card: no travel needed
  { x: "-104%", y: "0%", rotate: 5 },  // top-right -> slides onto top-left
  { x: "0%", y: "-104%", rotate: -4 }, // bottom-left -> slides up onto top-left
  { x: "-104%", y: "-104%", rotate: 3 }, // bottom-right -> slides diagonally
];
const stackVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: stackTargets[i].x,
    y: stackTargets[i].y,
    rotate: stackTargets[i].rotate,
    scale: 0.9,
    zIndex: services.length - i,
  }),
  visible: (i) => ({
    opacity: 1,
    x: "0%",
    y: "0%",
    rotate: 0,
    scale: 1,
    zIndex: 1,
    transition: {
      duration: 0.8,
      delay: 0.6 + i * 0.22,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const WhatWeDoSection = () => {
  const gridRef = useRef(null);
  const sectionInView = useInView(gridRef, { amount: 0.35, once: false });
  const scrolledOnce = useRef(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        scrolledOnce.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!scrolledOnce.current) {
      return;
    }
    setAnimateCards(sectionInView);
  }, [sectionInView]);

  return (
    <section className="whatWeDoSection">
      <div className="whatWeDoInner">
        <div className="whatWeDoLeft">
          <motion.div
            className="whatWeDoEyebrowWrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
          >
            <span className="whatWeDoDot" />
            <p className="whatWeDoEyebrow">What We Do</p>
          </motion.div>

          <motion.h2
            className="whatWeDoHeadline"
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            Our Services
          </motion.h2>

          <motion.p
            className="whatWeDoIntro"
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            Sueng is a one-stop production house - apparel, printing,
            packaging, and safety wear, all made in-house for East Africa's
            biggest brands.
          </motion.p>
        </div>

        <div ref={gridRef} className="whatWeDoGrid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="whatWeDoFlipCard"
              custom={index}
              initial="hidden"
              animate={animateCards ? "visible" : "hidden"}
              variants={stackVariants}
            >
              <div className="whatWeDoFlipInner">
                <div className="whatWeDoFlipFront">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="whatWeDoCardImage"
                  />
                  <div className="whatWeDoFrontOverlay" />
                  <h3 className="whatWeDoCardTitle">{service.title}</h3>
                </div>

                <div className="whatWeDoFlipBack">
                  <h3 className="whatWeDoBackTitle">{service.title}</h3>
                  <p className="whatWeDoBackText">{service.description}</p>
                  <Link to={service.link} className="whatWeDoBackLink">
                    Explore {service.title} →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;