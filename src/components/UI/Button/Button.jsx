import { NavLink } from "react-router-dom";

function Button({children, backgroundColor, color, className, onClick, to}) {
    return <>
    <NavLink style={{textDecoration: "none"}} to={to}>

        <button onClick={onClick} style={{backgroundColor:backgroundColor, color}} className={`${className} ${styles.container}`}>

            {children}

        </button>
    </NavLink>
    </>
}


export default Button;
import styles from "./Button.module.css";