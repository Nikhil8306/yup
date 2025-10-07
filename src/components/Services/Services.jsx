import { BedDoubleIcon, HomeIcon, FenceIcon, CookingPotIcon, SchoolIcon, BrickWallIcon, DockIcon, CloudIcon , MoveRight } from "lucide-react";

import Servicecard from "../../components/Servicecard/Servicecard.jsx";

function Services ({heading}) {
    return <>
        <div className={styles.container}>
            <div className={styles.heading}>
                {heading}
                <div className={styles.explore}>
                    Explore all <MoveRight style={{marginLeft: "1rem"}}/>
                </div>
            </div>

            <div className={styles.content}>
                <Servicecard icon={<HomeIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Home Exterior"} avail={100}/>
                <Servicecard icon={<BedDoubleIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Home Interior"} avail={100}/>
                <Servicecard icon={<DockIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Kitchen Cabinets"} avail={100}/>
                <Servicecard icon={<FenceIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Fences & Decks"} avail={100}/>
                <Servicecard icon={<CloudIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Roof"} avail={100}/>
                <Servicecard icon={<SchoolIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Commercial Exterior"} avail={100}/>
                <Servicecard icon={<CookingPotIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Commercial Interior"} avail={100}/>
                <Servicecard icon={<BrickWallIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Accent Wall"} avail={100}/>
            </div>
        </div>
    </>
}

import styles from "./Services.module.css";

export default Services;

