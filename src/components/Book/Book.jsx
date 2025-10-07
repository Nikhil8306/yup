import Heading from "../Heading";
import Description from "../Description";

import Button from "../UI/Button/Button";
import InfoCard from "../UI/InfoCard/InfoCard";

import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";

function Book () {
    return <>
        <div className={styles.container}>
            <Heading>
                It’s Easy as 1-2-3 to Book Your Next Paint Job
            </Heading>

            <Description className={styles.desc}>
                No more endless calls, confusing quotes, or chasing down contractors. We match you with trusted painters, help manage the project from start to finish, and provide a secure way to pay—so you only pay for work done right.
            </Description>

            <div className={styles.steps}>
                <InfoCard count={"One"} heading={"Tell Us About Your Project"} desc={"Just Answer a few quick questions. No sales calls. No spam."} img={one}/>
                <InfoCard count={"Two"} heading={"Find a Painter"} desc={"We'll match you with 3 licensed, verified, available pros in your area."} img={two}/>
                <InfoCard count={"Three"} heading={"Book with Confidence"} desc={"Schedule estimates, read reviews, pick the pro that fits your job best."} img={three}/>
            </div>

            <br />
            <br />
            <Description className={styles.desc}>
                Once you book your project with Referral Source, you’ll get access to easy-to-use tools to help you manage your project all inside the app. 
                <br />
                <br />
                From quote to cleanup—you’re in control every step of the way.
            </Description>

            <Button className={styles.button} backgroundColor={"var(--c2)"}>Hire a Painter</Button>
        </div>
    </>
}

import styles from "./Book.module.css";

export default Book;