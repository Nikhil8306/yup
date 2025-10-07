function Button({children, backgroundColor, color, className, onClick}) {
    return <>
        <button onClick={onClick} style={{backgroundColor:backgroundColor, color}} className={`${className} ${styles.container}`}>

            {children}

        </button>
    </>
}


export default Button;
import styles from "./Button.module.css";