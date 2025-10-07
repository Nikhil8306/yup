import Button from "../UI/Button/Button.jsx";
import Link from "../../components/UI/Link/Link.jsx";

import matchImg from "../../assets/match.png";

import { PlayCircleIcon } from "lucide-react";
function Match ({className}) {
    return <>
        <div className={`${className} ${styles.container}`}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    Match with the <br/> Best Pros Easily
                </div>
                <div className={styles.desc}>
                    Try Referral Source and get matched with up to <br/>3 top painters in your area.
                </div>
                <div className={styles.buttons}>
                    <Button color={"black"}>Get Started</Button>
                    <Link color="white" styles={{color: "white"}} to={"/how"}>See How It Works <PlayCircleIcon/></Link>
                </div>
            </div>

            <div className={styles.image}>
                <img src={matchImg} alt="Math with pros easily" />
            </div>
        </div>
    </>
}

import styles from "./Match.module.css";

export default Match;