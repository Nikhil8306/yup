import { MoveRightIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

function Servicecard({icon, heading, avail, description, to}) {
    return <>


        <div className={styles.container}>
            <NavLink style={{textDecoration: "none"}} to={to}>
                <div className={styles.logo}>
                    {icon}
                </div>

                <div className={styles.heading}>
                    {heading}
                </div>

                {avail && <div className={styles.avail}>
                    {avail} pros available <MoveRightIcon strokeWidth={"1px"} style={{marginLeft:"0.5rem"}}/>
                </div>}
                {description && <div className={styles.avail}>
                    {description}
                </div>}
            </NavLink>
        </div>

    </>

}

import styles from "./Servicecard.module.css";

export default Servicecard;