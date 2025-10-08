import "./App.css";


import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';

import ScrollToTop from "./pages/ScrollToTop.jsx";

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
import Confirmation from "./pages/Confirmation/Confirmation.jsx";

// pro page
import Pro from "./pages/Pro/Pro.jsx";
import Landing from "./pages/Pro/Landing/Landing.jsx";
import ProLogin from "./pages/Pro/login/login.jsx";
import FmFlowSignupSuccess from "./pages/Pro/Success/Signupsuccess.jsx";
import Matches from "./pages/Matches/Matches.jsx";


// data 

import { privacyPolicy, termCondition, proPrivacyPolicy } from "./pages/Policy/constants.js";


function App() {

    return (

        <BrowserRouter>

            <ScrollToTop/>
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

                    <Route path="/confirmation" element={<Confirmation/>}></Route>

                    <Route path="/matches" element={<Matches/>}></Route>

                </Route>

                <Route path="/pro" element={<Pro/>}>
                    <Route path="/pro" element={<Landing/>}></Route>
                    
                    <Route path="/pro/privacy" element={<Policy data={proPrivacyPolicy}/>}> </Route>

                    <Route path="/pro/login" element={<ProLogin/>}></Route>

                    <Route path="/pro/success" element={<FmFlowSignupSuccess/>}></Route>
                </Route>


            </Routes>

        </BrowserRouter>

    )
}

export default App;
