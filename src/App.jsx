import "./App.css";


import { BrowserRouter, Route, Routes } from 'react-router-dom';

// consumer page
import Consumer from './pages/Consumer/Consumer.jsx';

import Home from "./pages/Consumer/Home/Home.jsx";
import How from "./pages/Consumer/How/How.jsx";
import Login from "./pages/Login/Login.jsx";
import Confirmation from "./pages/Confirmation/Confirmation.jsx";
import Services from "./pages/Services/Services.jsx";
import Interior from "./pages/Services/Interior.jsx";


// pro page


function App() {

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Consumer/>}>

                    <Route path="/" element={<Home/>}></Route>

                    <Route path="/how" element={<How/>}></Route>

                    <Route path="/login" element={<Login/>}></Route>

                    <Route path="/confirmation" element={<Confirmation/>}></Route>

                    <Route path="/services" element={<Services/>}>
                        <Route path="/services"> </Route>
                        <Route path="/services/interior" element={<Interior/>}></Route>
                    </Route>

                </Route>

            </Routes>
        </BrowserRouter>

    )
}

export default App
