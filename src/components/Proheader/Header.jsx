import { useState } from "react";
import logo from "../../assets/logotext.png";
import Link from "../UI/Link/Link.jsx";
import Button from "../UI/Button/Button.jsx";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Central function to handle navigation and close menu
  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <div className={`${styles['container']}`}>
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

        <div className={`${styles['logo']}`}>
          <img src={logo} alt="Referral Source" className={`${styles['logoimg']}`} />
        </div>

        {/* Mobile Login Button */}
        <div className={`${styles['mobile-login']}`}>
            <Button to={"/pro/login"} backgroundColor={"var(--c2)"}>Login</Button>
        </div>

        {/* Navigation */}
        <div className={`${styles['navigations']} ${isMenuOpen ? styles['navigations-open'] : ''}`}>
             <button className={styles.linkBtn} onClick={() => handleNavigate("/pro/how")}>How It Works</button>
            <button className={styles.linkBtn} onClick={() => handleNavigate("/pro/services")}>Services</button>
            <button className={styles.linkBtn} onClick={() => handleNavigate("/pro/about")}>About</button>
            <button className={styles.linkBtn} onClick={() => handleNavigate("/pro/areas")}>Areas</button>
          
          <div className={`${styles['login']}`}>
            <Button to={"/"} backgroundColor={"var(--c12)"}>I need a Pro</Button>

            <Button to={"/pro/login"} backgroundColor={"var(--c2)"}>Login</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;