import { MoveRightIcon } from "lucide-react";

function Servicecard({icon, heading, avail}) {
    return <>

        <div className={styles.container}>
            <div className={styles.logo}>
                {icon}
            </div>

            <div className={styles.heading}>
                {heading}
            </div>

            <div className={styles.avail}>
                {avail} pros available <MoveRightIcon strokeWidth={"1px"} style={{marginLeft:"0.5rem"}}/>
            </div>
        </div>

    </>

}

import styles from "./Servicecard.module.css";

export default Servicecard;