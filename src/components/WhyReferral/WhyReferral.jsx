import image from "../../assets/whyreferral.png";
import Heading from "../Heading.jsx";
import Description from "../Description.jsx";
import Button from "../UI/Button/Button.jsx";


function WhyReferral() {
    return <>

        <div className={styles.container}>

            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.content}>
                <Heading>Why Choose Referral Source ?</Heading>
                <Description>We only work with licensed, insured, and experienced painters who have been thoroughly vetted. That means you can skip the guesswork and trust that your project will be completed professionally—on time, on budget, and with results you’ll love.</Description>

                <Button className={styles.button} backgroundColor={"var(--c2)"}>Try It Free</Button>
            </div>
        </div>

    </>
}


import styles from "./WhyReferral.module.css";
export default WhyReferral;