import Heading from "../../components/Heading";
import Description from "../../components/Description";

import SearchBar from "../../components/Searchbar/Searchbar";

import map from "../../assets/map.png";

import Services from "../../components/Services/Services";
import Match from "../../components/Match/Match";
import Testimonials from "../../components/Testimonials/Testimonials";

function Areas() {
    return <>
        <div className={styles.container}>
            <Heading>Find a Painter in Your Area</Heading>
            <br />
            <SearchBar/>
            <br />
            <img src={map} alt="" />
        </div>
        <Services heading={"Explore Service Areas"}/>
        <Match/>
        <Testimonials/>

        <div style={{height: "5rem"}}></div>
    </>
} 

import styles from "./Areas.module.css";
export default Areas;
