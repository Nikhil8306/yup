
import HowInfo from "../../../components/How/How";
import Match from "../../../components/Match/Match";


function How() {
    return <>
        <HowInfo/>
        <Match className={styles.match}/>
    </> 
}

import styles from "./How.module.css";

export default How;