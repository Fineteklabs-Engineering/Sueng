import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiChevronUp, FiChevronDown } from "react-icons/fi";
import "../styles/market-section.css";

const productCards = [
  {
    tag: "Apparel",
    title: "Branded T-Shirts & Uniforms",
    image: "https://res.cloudinary.com/gjpfbvzb/image/upload/v1786364206/Custom_T-Shirt_Design_Services___Modern_Graphic_Tees_Streetwear_Apparel_Designs___DM_Contact_Us_uzvmcs.jpg",
    link: "/products/apparel",
  },
  {
    tag: "Printing",
    title: "Corporate Stationery & Banners",
    image: "https://res.cloudinary.com/gjpfbvzb/image/upload/v1786364366/Creative_Brand_Identity_Mockup___Modern_Stationery_Design_for_Business_Branding_chnblz.jpg",
    link: "/products/printing",
  },
  {
    tag: "Packaging",
    title: "Custom Non-Woven Bags",
    image: "https://res.cloudinary.com/gjpfbvzb/image/upload/v1786364457/Printed_Econo_Lunch_Bag___Custom_Lunch_Bags_Boxes___Polypropylene___Customized_hfprj1.jpg",
    link: "/products/packaging",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: "easeOut" },
  }),
};

const MarketSection = () => {
  return (
    <section className="marketSection">
      <div className="marketOverlay" />

      <div className="marketTopBar">
        <div className="marketBadge">
          <img src="/images/shop-image.png" alt="Sueng" className="marketBadgeIcon" />
         
        </div>

        <div className="marketTopActions">
          <button className="marketPill">
            Products <FiChevronDown />
          </button>
          <button className="marketPillGhost">Search</button>
          <button className="marketPillGhost">New</button>
        </div>
      </div>

      <div className="marketCardStackWrap">
        <motion.div
          className="marketCardStack"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          {productCards.map((card, index) => (
            <Link
              to={card.link}
              key={card.title}
              className="marketCard"
              style={{ zIndex: productCards.length - index }}
            >
              <span className="marketCardTag">{card.tag}</span>
              <div className="marketCardImageWrap">
                <img
                  src={card.image}
                  alt={card.title}
                  className="marketCardImage"
                />
              </div>
              <div className="marketCardFooter">
                <p className="marketCardTitle">{card.title}</p>
                <span className="marketCardArrow">
                  <FiArrowUpRight />
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="marketSideActions"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <button className="marketArrowBtn" aria-label="Previous product">
          <FiChevronUp />
        </button>
        <button className="marketArrowBtn" aria-label="Next product">
          <FiChevronDown />
        </button>
      </motion.div>

      <div className="marketBottomBar">
        <motion.div
          className="marketInfo"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className="marketEyebrow">New Products</span>
          <h2 className="marketTitle">
            New
            <br />
            Products
          </h2>
          <p className="marketDescription">
            Discover our latest apparel, printing, packaging, and safety
            solutions, made in-house for modern brand needs.
          </p>
          <Link to="/" className="marketButton">
            Request a quote <FiArrowUpRight />
          </Link>
        </motion.div>

        <motion.div
          className="marketBottomRight"
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <Link to="/" className="marketDiscoverPill">
            Discover More <FiArrowUpRight />
          </Link>

          <div className="marketStatBlock">
            <p className="marketStatLabel">
              High-performance production for East Africa's biggest brands
            </p>
            <span className="marketStatNumber">100+</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketSection;