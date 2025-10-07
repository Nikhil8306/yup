import { BookmarkIcon } from "lucide-react";

function InfoCard({count, heading, desc, img, background, className}) {
    return <>
        <div className={`${className} ${styles.container}`} style={{backgroundColor:background}}>
            <div className={styles.content}>
                <div className={styles.count}><BookmarkIcon style={{marginRight: "0.5rem"}}/> {count}</div>
                <div className={styles.innercontent}>
                    <div className={styles.heading}>{heading}</div>
                    <div className={styles.desc}>{desc}</div>
                </div>
            </div>
            {img&&<div className={styles.logo}>
                <img src={img} alt="" />
            </div>}
        </div>
    </>
}

import styles from "./InfoCard.module.css";

export default InfoCard;