import { BedDoubleIcon, HomeIcon, FenceIcon, CookingPotIcon, SchoolIcon, BrickWallIcon, DockIcon, CloudIcon , MoveRight } from "lucide-react";
import Link from "../UI/Link/Link.jsx";
import Servicecard from "../../components/Servicecard/Servicecard.jsx";

function Services ({heading}) {
    return <>
        <div className={styles.container}>
            <div className={styles.heading}>
                {heading}
                <Link to={"/services"} color="var(--c2)" className={styles.explore}>
                    Explore all <MoveRight style={{marginLeft: "1rem"}}/>
                </Link>
            </div>

            <div className={styles.content}>
                <Servicecard to={"/services/exterior"} icon={<HomeIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Home Exterior"} avail={100}/>
                <Servicecard to={"/services/interior"} icon={<BedDoubleIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Home Interior"} avail={100}/>
                <Servicecard to={"/services/cabinate"} icon={<DockIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Kitchen Cabinets"} avail={100}/>
                <Servicecard to={"/services/fence"} icon={<FenceIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Fences & Decks"} avail={100}/>
                <Servicecard to={"/services/roof"} icon={<CloudIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Roof"} avail={100}/>
                <Servicecard to={"/services/exterior"} icon={<SchoolIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Commercial Exterior"} avail={100}/>
                <Servicecard to={"/services/interior"} icon={<CookingPotIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Commercial Interior"} avail={100}/>
                <Servicecard to={"/services/accent"} icon={<BrickWallIcon size={"4rem"} strokeWidth={"1px"}/>} heading={"Accent Wall"} avail={100}/>
            </div>
        </div>
    </>
}

import styles from "./Services.module.css";

export default Services;

