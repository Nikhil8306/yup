import Heading from "../Heading.jsx";
import Description from "../Description.jsx";
import Button from "../UI/Button/Button.jsx";

import referral from "../../assets/referral.png";

import { CheckCircle, Volume2, Shield, Search, Wrench } from 'lucide-react';

function Referralsource() {
    return <>
        <div className={styles.container}>
            <div className={styles.innercontainer}>

                <div className={styles.image}>
                    <img src={referral} alt="" />
                </div>

                <div className={styles.content}>
                    <Heading>
                        Homeowners Win with Referral Source
                    </Heading>

                    <Description styles={{marginTop: "1rem"}}>
                        We screen the painters. You pick the winner. <br /> Think of Referral Source as your backstage pass to hassle-free painting — we handle the messy parts so you don’t have to.
                    </Description>

                    <div className={styles.benefits}>
                        <Benefit icon={<CheckCircle size={"2rem"} strokeWidth={"1px"}/>} about={"No Cost, No Obligation"}/>
                        <Benefit icon={<Volume2 size={"2rem"} strokeWidth={"1px"}/>} about={"No Spam Calls or Selling Your Info"}/>
                        <Benefit icon={<Shield size={"2rem"} strokeWidth={"1px"}/>} about={"Vetted, licensed, and insured painters"}/>
                        <Benefit icon={<Search size={"2rem"} strokeWidth={"1px"}/>} about={"Save hours of research"}/>
                        <Benefit icon={<Wrench size={"2rem"} strokeWidth={"1px"}/>} about={"Works for big jobs or small touch-ups"}/>
                    </div>

                </div>
            </div>

            <Button to={"/login"} className={styles.btn} backgroundColor={"var(--c2)"}>Try it Free</Button>
        </div>
    </>
}

function Benefit({icon, about}) {
    return <>
        <div className={styles.benefit}>
            {icon} {about}
        </div>
    </>
}

import styles from "./Referralsource.module.css";

export default Referralsource;