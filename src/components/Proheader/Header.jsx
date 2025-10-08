import { useState } from "react";
import logo from "../../assets/logotext.png";
import Link from "../UI/Link/Link.jsx";
import Button from "../UI/Button/Button.jsx";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Referral Source" className={styles.logoimg} />
      </div>

      {/* Hamburger */}
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles["hamburger-open"] : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav className={`${styles.navigations} ${isMenuOpen ? styles["navigations-open"] : ""}`}>
        <Link color="white" to={"/how"}>How It Works</Link>
        <Link color="white" to={"/services"}>Services</Link>
        <Link color="white" to={"/about"}>About</Link>
        <Link color="white" to={"/areas"}>Areas</Link>

        <div className={styles.login}>
          <Button backgroundColor={"var(--c12)"}>I need a Pro</Button>
          <NavLink style={{ textDecoration: "none" }} to={"/login"}>
            <Button backgroundColor={"var(--c2)"}>Login</Button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
