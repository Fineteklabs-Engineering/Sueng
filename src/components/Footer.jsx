import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import '../styles/footer.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerTopInner">
          <motion.div
            className="footerBrand"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <Link to="/" className="footerLogo">
              <img src="/images/sueng-logo2.png" alt="Sueng Enterprises" />
            </Link>

            <div className="footerSocials">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footerSocialBtn"
                aria-label="Sueng on X"
              >
                <FaXTwitter />
              </a>
              
              <a
                href="https://www.linkedin.com/company/sueng-enterprises-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="footerSocialBtn"
                aria-label="Sueng on LinkedIn"
              >
                <FaLinkedinIn />
              </a>
                
                <a
                href="https://www.facebook.com/profile.php?id=100077272730049#"
                target="_blank"
                rel="noopener noreferrer"
                className="footerSocialBtn"
                aria-label="Sueng on Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="footerColumn"
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="footerColumnTitle">Navigation</p>
            <Link to="/">Who We Are</Link>
            <Link to="/">Our Products</Link>
            <Link to="/">Apparel</Link>
            <Link to="/">Packaging</Link>
            <Link to="/">Contact Us</Link>
          </motion.div>

          <motion.div
            className="footerColumn"
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="footerColumnTitle">Contacts</p>

            <div className="footerContactItem">
              <p className="footerContactLabel">Phone:</p>
              <a href="tel:+254722868219">0722 868 219</a>
              <a href="tel:+254714492218">0714 492 218</a>
            </div>

            <div className="footerContactItem">
              <p className="footerContactLabel">Email:</p>
              <a href="mailto:info@sueng.com">info@sueng.com</a>
            </div>

            <div className="footerContactItem">
              <p className="footerContactLabel">Address:</p>
              <p className="footerAddressText">
                Emerald Business Park, Kutch Road
                <br />
                Off Mombasa Road, Nairobi
              </p>
            </div>
          </motion.div>

          <motion.button
            className="footerBackToTop"
            onClick={scrollToTop}
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            Back to top <FiArrowUp />
          </motion.button>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerBottomInner">
          <Link to="/privacy-policy" className="footerPrivacyLink">
            Privacy Policy
          </Link>
          <p className="footerCompanyName">Sueng Enterprises Limited</p>
          <p className="footerCopyright">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;