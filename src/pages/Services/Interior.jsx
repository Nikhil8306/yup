import AccentWall from "../../components/Accentwall/Accentwall";
import Listing from "../../components/Listing/Listing.jsx";
import Match from "../../components/Match/Match.jsx";
import WhyReferral from "../../components/WhyReferral/WhyReferral.jsx";
import Services from "../../components/Services/Services.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";

import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";


import brush from "../../assets/brush.png";
let listItems = [
    {
        icon: brush,
        title: "Walls, ceilings and trim"
    },
    {
        icon: brush,
        title: "Accent Walls and Custom Finish"
    },
    {
        icon: brush,
        title: "Kitchens, baths and halls"
    },
    {
        icon: brush,
        title: "Touch ups or complete home interior"
    },
    {
        icon: brush,
        title: "Doors, baseboards and molding"
    },
    
]

let description = "Nothing transforms a space faster than a fresh coat of paint. Whether you’re brightening up your living room, adding personality to a bedroom, or giving your kitchen a modern update, our vetted interior painters handle every detail with skill and care."
// let description = "Your fence and deck take a beating from the sun, rain, and everyday wear. A fresh coat of paint or stain not only restores their beauty but also extends their life - keeping your outdoor spaces safe, strong, and inviting.";
function Interior() {
    return <>
        <AccentWall btn="Hire a Interior Painter" title="Interior Painting Services" subtitle="Refresh Your Home, Room by Room" description={description} images={[i1, i2, i3, i4]}/>
        <Listing title={"What Our Pros Can Help With"} items={listItems}></Listing>
        <Match/>
        <WhyReferral/>
        <Services heading={"Explore All Service Areas"}/>
        <Testimonials/>
        <div style={{height: "10rem"}}></div>
    </>
}


export default Interior;


