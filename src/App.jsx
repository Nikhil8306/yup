import "./App.css";


import { BrowserRouter, Route, Routes } from 'react-router-dom';

// consumer page
import Consumer from './pages/Consumer/Consumer.jsx';

import Home from "./pages/Consumer/Home/Home.jsx";
import How from "./pages/Consumer/How/How.jsx";
import Login from "./pages/Login/Login.jsx";
import Services from "./pages/Services/Services.jsx";
import ServicesHome from "./pages/Services/ServicesHome.jsx";
import Interior from "./pages/Services/Interior.jsx";
import Cabinate from "./pages/Services/Cabinate.jsx";
import Fence from "./pages/Services/Fence.jsx";
import Roof from "./pages/Services/Roof.jsx";
import Accent from "./pages/Services/Accent.jsx";
import Exterior from "./pages/Services/Exterior.jsx";
import About from "./pages/About/About.jsx";
import Areas from "./pages/Areas/Areas.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Policy from "./pages/Policy/Policy.jsx";
import Downsell from "./pages/Downsell/Downsell.jsx";

// pro page





// data 

import { privacyPolicy, termCondition, proPrivacyPolicy } from "./pages/Policy/constants.js";


function App() {

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Consumer/>}>

                    <Route path="/" element={<Home/>}></Route>

                    <Route path="/how" element={<How/>}></Route>

                    <Route path="/login" element={<Login/>}></Route>

                    <Route path="/services" element={<Services/>}>
                        <Route path="/services" element={<ServicesHome/>}> </Route>
                        <Route path="/services/interior" element={<Interior/>}></Route>
                        <Route path="/services/cabinate" element={<Cabinate/>}></Route>
                        <Route path="/services/fence" element={<Fence/>}></Route>
                        <Route path="/services/roof" element={<Roof/>}></Route>
                        <Route path="/services/accent" element={<Accent/>}></Route>
                        <Route path="/services/exterior" element={<Exterior/>}></Route>
                    </Route>

                    <Route path="/about" element={<About/>}></Route>

                    <Route path="/areas" element={<Areas/>}></Route>

                    <Route path="/contact" element={<Contact/>}></Route>

                    <Route path="/privacy" element={<Policy data={privacyPolicy}/>}></Route>

                    <Route path="/tnc" element={<Policy data={termCondition}/>}></Route>

                    <Route path="/downsell" element={<Downsell/>}></Route>

                </Route>

                <Route path="/pro">
                    <Route path="/pro/privacy" element={<Policy data={proPrivacyPolicy}/>}> </Route>
                </Route>

            </Routes>
        </BrowserRouter>

    )
}

export default App;
