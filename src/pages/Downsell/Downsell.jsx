import BookingScheduler from "./Calender";
import Details from "./Details.jsx";
import { useState } from "react";


function Downsell() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zip: ""
  });
    return <>
        {/* <BookingScheduler selectedDate={selectedDate} selectedTime={selectedTime} setSelectedDate={setSelectedDate} setSelectedTime={setSelectedTime} onSubmit={() => {console.log("Hello")}}/> */}
        <Details data={data} setData={setData}/>
    </>
}

import styles from "./Downsell.module.css";
export default Downsell;