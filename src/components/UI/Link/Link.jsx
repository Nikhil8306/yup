import { NavLink } from "react-router-dom";

function Link ({children, to, color="black"}) {
    return <>

        <NavLink to={to}
            className={({isActive, _ }) => `${styles.link} ${isActive?styles.openlink:""}`}
            style={{color}}
        >
            {children}
        </NavLink>

    </>
}

import styles from "./Link.module.css";

export default Link;
