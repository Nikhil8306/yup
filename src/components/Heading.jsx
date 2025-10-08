function Heading({children, className, fontSize}) {
    return<>

        <div
            className={`${className} ${styles.container}`}
        >
            {children}
        </div>
    
    </>
}

import styles from "./Heading.module.css";

export default Heading;