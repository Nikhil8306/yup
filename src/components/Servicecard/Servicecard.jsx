import { MoveRightIcon } from "lucide-react";

function Servicecard({icon, heading, avail, description}) {
    return <>

        <div className={styles.container}>
            <div className={styles.logo}>
                {icon}
            </div>

            <div className={styles.heading}>
                {heading}
            </div>

            {avail&&<div className={styles.avail}>
                {avail} pros available <MoveRightIcon strokeWidth={"1px"} style={{marginLeft:"0.5rem"}}/>
            </div>}
            {description&&<div className={styles.avail}>
                {description}
            </div>}
        </div>

    </>

}

import styles from "./Servicecard.module.css";

export default Servicecard;