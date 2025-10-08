import Heading from "../../components/Heading";
import Description from "../../components/Description";
import SearchBar from "../../components/Searchbar/Searchbar";
import image from "../../assets/About.png";
import Match from "../../components/Match/Match";
import Testimonials from "../../components/Testimonials/Testimonials";
import Button from "../../components/UI/Button/Button";

function About() {
    return <>
        <Info/>
        <Mission/>
        <Trust/>
        <Match/>
        <Testimonials/>
        <div style={{height: "5rem"}}></div>
    </>
}

function Mission() {
    return <>

        <div className={styles.mission}>
            <Heading>Our Mission</Heading>
            <Description>We believe every home owner deserves peace of mind when hiring for the best investment - their home. Our Vision is to take  uncertanity out of the process my matching you only to licensed, ensured, and experienced painters who are comitted to quality work.</Description>
        </div>

    </>
}

function Trust() {
    return <>

        <div className={styles.trust}>
            <Heading>More Homeowners Trust Referral Source</Heading>
            <Description>We are more than a directory-we are partner in your project. From the moment you submit your request we work behind the scenes to connect with the top three painters in your area, so you can choose the right fit for your project budget and timeline. 

 Your project desoes more than guess work let us help you find the right painter today.</Description>
            <Button backgroundColor={"var(--c2)"}>Get Started</Button>
        </div>
    </>
}

function Info() {
    return <>
        <div className={styles.infocontainer}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>

            <div className={styles.content}>
                <Heading>Painting Services You Can Trust</Heading>
                <br />
                <Description>Looking for the perfect painter for your next project ? <br />
                    Wheather it's refreshing a single room or giving your whole house a brand 
                    new look, Referral Source connects you with trusted local painters who can handle it all - from first quote to final coat.
                </Description>
                <br /><br />
                <SearchBar/>
            </div>
        </div>
    </>
}



import styles from "./About.module.css";

export default About;