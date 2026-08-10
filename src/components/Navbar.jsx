import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiMessageCircle,
  FiPhone,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import '../styles/navbar.css';
import { s } from "motion/react-client";

const menuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();
  const productsActive = location.pathname.startsWith("/products");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileProductsOpen(false);
  };


  const disabledLinks = {
  whoWeAre: true,
  ourProducts: false,
  contactUs: true,
  shop: true,
};

  return (
    <header className={`navbar ${scrolled ? "navbarScrolled" : ""}`}>
      <div className="navbarInner">
        <Link to="/" className="navbarLogo" onClick={closeMenu}>
          <img src="/images/sueng-logo.png" alt="Sueng Enterprises" />
        </Link>

        <nav className="navbarLinks">
  <NavLink to="/" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"}>
    Home
  </NavLink>

  {disabledLinks.whoWeAre ? (
    <span className="navbarLink navbarLinkDisabled">Who We Are</span>
  ) : (
    <NavLink to="/who-we-are" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"}>
      Who We Are
    </NavLink>
  )}

  <div
    className="navbarDropdown"
    onMouseEnter={() => !disabledLinks.ourProducts && setProductsOpen(true)}
    onMouseLeave={() => setProductsOpen(false)}
  >
 <span
  className={`navbarDropdownTrigger ${productsActive ? "navbarLinkActive" : ""} ${disabledLinks.ourProducts ? "navbarLinkDisabled" : ""}`}
>
  Our Products <FiChevronDown className="navbarChevron" />
</span>
    {productsOpen && !disabledLinks.ourProducts && (
      <div className="navbarDropdownMenu">
        <div className="navbarDropdownMenuInner">
          <NavLink to="/" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"}>Apparel</NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"}>Packaging</NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"}>Printing</NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"}>Safety & PPEs</NavLink>
        </div>
      </div>
    )}
  </div>

  {disabledLinks.contactUs ? (
    <span className="navbarLink navbarLinkDisabled">Contact Us</span>
  ) : (
    <NavLink to="/contact-us" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"}>
      Contact Us
    </NavLink>
  )}

  {disabledLinks.shop ? (
    <span className="navbarLink navbarLinkDisabled">Shop</span>
  ) : (
    <NavLink to="/shop" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"}>
      Shop
    </NavLink>
  )}
  
</nav>

<div className="navbarActions">
  <div className="navbarIconWrap">
    <a href="mailto:info@sueng.com" className="navbarIconBtn" aria-label="Email us">
      <FiMessageCircle />
    </a>
    <span className="navbarTooltip">info@sueng.com</span>
  </div>

  <div className="navbarIconWrap">
    <a href="tel:+254722868219" className="navbarIconBtn" aria-label="Call us">
      <FiPhone />
    </a>
    <span className="navbarTooltip">0722 868 219</span>
  </div>

  <button
    className="navbarHamburger"
    aria-label={menuOpen ? "Close menu" : "Open menu"}
    onClick={() => setMenuOpen((prev) => !prev)}
  >
    {menuOpen ? <FiX /> : <FiMenu />}
  </button>
</div>


      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="navbarMobileBackdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

           <motion.nav
  className="navbarMobileMenu"
  variants={menuVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
>
  <NavLink to="/" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"} onClick={closeMenu}>
    Home
  </NavLink>

  {disabledLinks.whoWeAre ? (
    <span className="navbarLink navbarLinkDisabled">Who We Are</span>
  ) : (
    <NavLink to="/who-we-are" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"} onClick={closeMenu}>
      Who We Are
    </NavLink>
  )}

  <div className="navbarMobileDropdown">
  <button
  className={`navbarMobileDropdownTrigger ${productsActive ? "navbarLinkActive" : ""} ${disabledLinks.ourProducts ? "navbarLinkDisabled" : ""}`}
  onClick={() => !disabledLinks.ourProducts && setMobileProductsOpen((prev) => !prev)}
>
  Our Products
  <FiChevronDown
    className={`navbarChevron ${mobileProductsOpen ? "navbarChevronOpen" : ""}`}
  />
</button>

    <AnimatePresence>
      {mobileProductsOpen && !disabledLinks.ourProducts && (
        <motion.div
          className="navbarMobileSubmenu"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <NavLink to="/" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"} onClick={closeMenu}>Apparel</NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"} onClick={closeMenu}>Packaging</NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"} onClick={closeMenu}>Printing</NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"} onClick={closeMenu}>Safety & PPEs</NavLink>
        </motion.div>
      )}
    </AnimatePresence>
  </div>

  {disabledLinks.contactUs ? (
    <span className="navbarLink navbarLinkDisabled">Contact Us</span>
  ) : (
    <NavLink to="/contact-us" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"} onClick={closeMenu}>
      Contact Us
    </NavLink>

    
  )}

  {disabledLinks.shop ? (
    <span className="navbarLink navbarLinkDisabled">Shop</span>
  ) : (
    <NavLink to="/shop" className={({ isActive }) => isActive ? "navbarLink navbarLinkActive" : "navbarLink"} onClick={closeMenu}>
      Shop
    </NavLink>

    
  )}

  <div className="navbarMobileContact">
    <a href="mailto:info@sueng.com" onClick={closeMenu}>
      <FiMessageCircle /> info@sueng.com
    </a>
    <a href="tel:+254722868219" onClick={closeMenu}>
      <FiPhone /> 0722 868219
    </a>
  </div>
</motion.nav>


          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;