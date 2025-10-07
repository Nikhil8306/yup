import Heading from "../Heading.jsx";
import Description from "../Description.jsx";
import InfoCard from "../UI/InfoCard/InfoCard.jsx";
import Button from "../UI/Button/Button.jsx";
import howimage from "../../assets/how.png";
function HowInfo() {
    return <>

        <div className={styles.container}>
            <div className={styles.image}>
                <img src={howimage} alt="" />
            </div>
            <div className={styles.content}>
                <Heading>The Easier Way to Hire Professional Painters</Heading>
                <Description>No more endless calls, confusing quotes, or chasing down contractors. We match you with trusted painters, help manage the project from start to finish, and provide a secure way to pay—so you only pay for work done right. </Description>
                <Heading>How It Works ...</Heading>
                <div className={styles.steps}>
                    <InfoCard background={"white"} count={"One"} heading={"Tell Us About Your Project"} desc={"Just Answer a few quick questions. No sales calls. No spam."} />
                    <InfoCard background={"white"} count={"Two"} heading={"Find a Painter"} desc={"We'll match you with 3 licensed, verified, available pros in your area."}/>
                    <InfoCard background={"white"} count={"Three"} heading={"Book with Confidence"} desc={"Schedule estimates, read reviews, pick the pro that fits your job best."}/>
                </div>

                <Description>From first quote to final coat - you're in control every step of the way.</Description>
                <Button backgroundColor={"var(--c2)"}>Hire a Painter</Button>

            </div>
        </div>

    </>
}

import styles from "./How.module.css";
export default HowInfo;