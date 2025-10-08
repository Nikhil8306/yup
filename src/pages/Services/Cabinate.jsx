import AccentWall from "../../components/Accentwall/Accentwall";
import Listing from "../../components/Listing/Listing.jsx";
import Match from "../../components/Match/Match.jsx";
import WhyReferral from "../../components/WhyReferral/WhyReferral.jsx";
import Services from "../../components/Services/Services.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";

import Servicecard from "../../components/Servicecard/Servicecard.jsx";
import Heading from "../../components/Heading.jsx";

import { DollarSignIcon, BrushIcon, DoorClosedLockedIcon, Leaf, DoorClosedIcon } from "lucide-react";

import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";


import { HomeIcon, ShieldIcon, TimerIcon, FenceIcon } from "lucide-react";

import brush from "../../assets/brush.png";
let listItems = [
    {
        icon: brush,
        title: "Cabinate Painting"
    },
    {
        icon: brush,
        title: "Prep Work (sanding, priming, repair)"
    },
    {
        icon: brush,
        title: "Touch up and maintainance"
    },
    {
        icon: brush,
        title: "Staining and refinishing"
    },
    {
        icon: brush,
        title: "Hardware Installation"
    },
    
]

const description="New cabinets can be expensive—but a fresh, professional paint or refinishing job can completely change the look and feel of your space for a fraction of the cost. Whether you want a sleek modern update, a classic finish, or a bold new color, our vetted painters have the skill to bring your vision to life."

function Cabinate() {
    return <>
        <AccentWall title="Cabinet Refinishing Services" subtitle="Give your Kitchen a fresh coat " description={description} images={[i1, i2, i3, i4]}/>
        <WhyRefine/>
        <Listing title={"What Our Pros Can Do"} items={listItems}></Listing>
        <Match/>
        <WhyReferral/>
        <Services heading={"Explore All Service Areas"}/>
        <Testimonials/>
        <div style={{height: "5rem"}}></div>
    </>
}


function WhyRefine() {
    return <>
        <div className={styles.refinecontainer}>
            <Heading>Why Refinish instead of Replace?</Heading>
            <div className={styles.servicecontainer}>

                <Servicecard icon={<DollarSignIcon size={"3rem"} strokeWidth={"1px"}/>} heading={"Protection"} description={"Guard against moisture, UV damage and cracking"}/>
                <Servicecard icon={<BrushIcon size={"3rem"} strokeWidth={"1px"}/>} heading={"Curb Appeal"} description={"Guard against moisture, UV damage and cracking"}/>
                <Servicecard icon={<DoorClosedIcon size={"3rem"} strokeWidth={"1px"}/>} heading={"Longevity"} description={"Guard against moisture, UV damage and cracking"}/>
                <Servicecard icon={<Leaf size={"3rem"} strokeWidth={"1px"}/>} heading={"Comfort"} description={"Guard against moisture, UV damage and cracking"}/>
            
            </div>
        </div>
    </>
}
import styles from "./Cabinate.module.css";
export default Cabinate;


