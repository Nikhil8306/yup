import Header from "../../components/Proheader/Header";
import Footer from "../../components/Footer/Footer";

import { Outlet } from "react-router-dom";

function Pro() {
    return <>
        <Header/>

        <Outlet></Outlet>

        <Footer/>
    </>
}

export default Pro;