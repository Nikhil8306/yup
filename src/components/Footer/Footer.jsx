import Button from "../UI/Button/Button.jsx";

import Link from "../UI/Link/Link.jsx";
import Heading from "../Heading.jsx";
import logo from "../../assets/logotext.png";
import { ArrowBigRightIcon } from "lucide-react";
function Footer() {
    return <>
        <div className={styles.container}>
            <div className={styles.ready}>
                <div className={styles.heading}>
                    Ready to Get Started?
                </div>
                <div className={styles.desc}>
                    Are you ready to stop guessing and start painting? Try Referral Source and discover why more homeowners connect with painters on our platform than ever before.
                </div>

                <Button backgroundColor={"var(--c2)"}>Learn More</Button>
            </div>

            <hr />

            <footer>
                <div className={styles.f1}>
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={styles.memeberlogo}>

                    </div>
                    <div className={styles.sponsored}>
                        SPONSORED. Sherwin-Williams is in no way associated with or responsible for services obtained from Referral Source. <br /> <br /> *Sherwin-Williams is in no way associated with or responsible for services obtained from Digital Alliance Members.
                    </div>
                </div>

                <div className={styles.f2}>
                    <Link color="white">Home</Link>
                    <Link color="white">Find Painters</Link>
                    <Link color="white">FAQs</Link>
                </div>
                <div className={styles.f3}>

                    <Heading className={styles.heading}>Get special offers from Referral Source</Heading>
                    <div className={styles.input}>
                        <input type="text" placeholder="Enter you Email"/>
                        <button><ArrowBigRightIcon color="white"/></button>
                    </div>

                </div>
            </footer>
        </div>
    </>
}

import styles from "./Footer.module.css";

export default Footer;