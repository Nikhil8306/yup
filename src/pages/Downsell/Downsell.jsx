import { useState } from "react";
import BookingScheduler from "./Calender";
import Details from "./Details.jsx";
import styles from "./Downsell.module.css";

function Downsell() {
  const [step, setStep] = useState(0);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zip: "",
    location: "",
    propertyType: "",
    paintScope: "",
    sqft: "",
    colorsSelected: "",
  });

  const next = () => setStep((prev) => Math.min(prev + 1, 1));
  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <section className={styles.downsellWrapper}>
      {step === 0 && (
        <BookingScheduler
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          setSelectedDate={setSelectedDate}
          setSelectedTime={setSelectedTime}
          next={next}
        />
      )}

      {step === 1 && (
        <Details
          data={data}
          setData={setData}
          step={step}
          next={next}
          prev={prev}
        />
      )}
    </section>
  );
}

export default Downsell;
