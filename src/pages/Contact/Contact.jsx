import Heading from "../../components/Heading.jsx";

function Contact() {
    return <>
        <div className={styles.container}>
            <Heading>Contact Us</Heading>

            <div className={styles.contact}>
                <p className={styles.title}> Customer Support</p>
                <p>1-855-555-1234 <br /> support@referral-source.com</p>

                <br /> <br /> <br />
                <p className={styles.title}> Pro Support </p>
                <p>1-855-555-1234 <br /> support@referral-source.com</p>

            </div>

        </div>
    </>
}


import styles from "./Contact.module.css";
export default Contact;