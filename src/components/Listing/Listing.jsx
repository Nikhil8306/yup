import Heading from "../Heading.jsx";

function Listing ({title, items}) {
    
    return <> 

        <div className={styles.container}>
            <Heading>{title}</Heading>
            <div className={styles.list}>
                {items.map((elem, ind) => 
                    <Item key={ind} icon={elem.icon} title={elem.title}/>
                )}
            </div>
        </div>

    </>

}

function Item({icon, title}) {
    return <>
        <div className={styles.item}>
            <img src={icon} alt="" /> {title}
        </div>
    </>
}

import styles from "./listing.module.css";

export default Listing;