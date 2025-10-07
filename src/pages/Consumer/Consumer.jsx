import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import { Outlet } from "react-router-dom";

function Consumer() {
    return <>

        <div className={styles.container}>

            <Header/>

            <Outlet/>

            <Footer/>

        </div>

    </>
}
import styles from "./Consumer.module.css";

export default Consumer;
