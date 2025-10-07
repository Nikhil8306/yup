import { useState } from "react";
import logo from "../../assets/logotext.png";
import Link from "../UI/Link/Link.jsx";
import Button from "../UI/Button/Button.jsx";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`${styles['container']}`}>
        <div className={`${styles['logo']}`}>
          <img src={logo} alt="Referral Source" className={`${styles['logoimg']}`} />
        </div>

        {/* Hamburger Icon */}
        <button 
          className={`${styles['hamburger']} ${isMenuOpen ? styles['hamburger-open'] : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <div className={`${styles['navigations']} ${isMenuOpen ? styles['navigations-open'] : ''}`}>
          <Link to={"/how"}>How It Works</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/areas"}>Areas</Link>
          <div className={`${styles['login']}`}>
            <Button backgroundColor={"black"}>I'm a Pro</Button>

            <NavLink style={{textDecoration: "none"}} to={"/login"}>
                <Button backgroundColor={"var(--c2)"}>Login</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;