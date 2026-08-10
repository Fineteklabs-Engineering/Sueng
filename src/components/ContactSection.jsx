
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import '../styles/contact-section.css';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    subject: "",
    fullName: "",
    phone: "",
    email: "",
    comments: "",
  });
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { amount: 0.3, once: false });
  const scrolledOnce = useRef(false);
  const [animate, setAnimate] = useState(false);

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

    if (sectionInView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [sectionInView]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your form handler / API endpoint
    console.log(formData);
  };

  return (
    <section className="contactSection">
      <div className="contactInner">
        <div className="contactCard">
          <motion.div
            className="contactLeft"
            ref={sectionRef}
            initial={{ opacity: 0, x: -30 }}
            animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="contactLeftOverlay" />
            <div className="contactLeftContent">
              <div className="contactEyebrowWrap">
                <span className="contactDot" />
                <p className="contactEyebrow">Contact Us</p>
              </div>

              <h2 className="contactHeadline">
                Let's Build A Strong
                <br />
                Future Together
              </h2>

              <div className="contactLinks">
                <p className="contactLinksLabel">For partnership inquiries:</p>
                <p className="contactLinksText">
                  Please visit our{" "}
                  <Link to="/who-we-are" className="contactInlineLink">
                    Who We Are page
                  </Link>
                </p>
                <p className="contactLinksText">
                  For product inquiries, see our{" "}
                  <Link to="/products/apparel" className="contactInlineLink">
                    Products page
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contactRight"
            custom={0.15}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <h3 className="contactFormTitle">Please fill out the form.</h3>

            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="contactFieldGroup">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contactSelect"
                  required
                >
                  <option value="" disabled>
                    Choose subject
                  </option>
                  <option value="apparel">Apparel</option>
                  <option value="printing">Printing</option>
                  <option value="packaging">Packaging</option>
                  <option value="safety-ppes">Safety & PPEs</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="contactFieldGroup">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="contactInput"
                  required
                />
              </div>

              <div className="contactFieldGroup">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contactInput"
                  required
                />
              </div>

              <div className="contactFieldGroup">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="contactInput"
                  required
                />
              </div>

              <div className="contactFieldGroup">
                <input
                  type="text"
                  name="comments"
                  placeholder="Comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="contactInput"
                />
              </div>

              <button type="submit" className="contactSubmitBtn">
                →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;