import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../../assets/logotext.png";
import Button from "../UI/Button/Button.jsx";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <div className={styles["container"]}>
      <button 
        className={`${styles["hamburger"]} ${isMenuOpen ? styles["hamburger-open"] : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={styles["logo"]}>
        <NavLink to={"/"}>
            <img src={logo} alt="Referral Source" className={styles["logoimg"]} />
        </NavLink>
      </div>

      <div className={styles["mobile-login"]}>
        <Button
            to={"/login"}
          backgroundColor={"var(--c2)"}
          onClick={() => handleNavigate("/login")}
        >
          Login
        </Button>
      </div>

      <div className={`${styles["navigations"]} ${isMenuOpen ? styles["navigations-open"] : ""}`}>
        <button className={styles.linkBtn} onClick={() => handleNavigate("/how")}>How It Works</button>
        <button className={styles.linkBtn} onClick={() => handleNavigate("/services")}>Services</button>
        <button className={styles.linkBtn} onClick={() => handleNavigate("/about")}>About</button>
        <button className={styles.linkBtn} onClick={() => handleNavigate("/areas")}>Areas</button>

        <div className={styles["login"]}>
          <Button to={"/pro"} backgroundColor={"black"}>I'm a Pro</Button>
          <Button
            backgroundColor={"var(--c2)"}
            to={"/login"} >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;