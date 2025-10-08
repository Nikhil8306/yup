import { useEffect, useMemo, useState } from "react"
import referalimg from "../../assets/logotext.png";
const timeSlots = ["9:00", "2:00", "3:00", "3:30", "4:00", "4:30"]

function addDays(date, days) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}
function addMonths(date, months) {
  const d = new Date(date)
  d.setMonth(d.getMonth() + months)
  return d
}
function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}
function getMonthLabel(date) {
  return date.toLocaleDateString(undefined, { month: "long", year: "numeric" })
}
function isSameDay(a, b) {
  if (!a || !b) return false
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}
function formatTimeZoneAndTime(now) {
  const parts = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "long",
  }).formatToParts(now)

  const zone = parts.find((p) => p.type === "timeZoneName")?.value || "Local Time"
  const time = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(now)
  return { zone, time }
}

function buildCalendarGrid(monthDate) {
  const first = startOfMonth(monthDate)
  const startDay = first.getDay() // 0=Sun
  const gridStart = addDays(first, -startDay) // Sunday of the first grid row
  return Array.from({ length: 42 }, (_, i) => addDays(gridStart, i))
}

export default function BookingScheduler({selectedDate, setSelectedDate, selectedTime, setSelectedTime, next}) {
  const [viewMonth, setViewMonth] = useState(new Date(2025, 8, 1))
  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const days = useMemo(() => buildCalendarGrid(viewMonth), [viewMonth])

  const [localInfo, setLocalInfo] = useState(() => formatTimeZoneAndTime(new Date()))
  useEffect(() => {
    const id = setInterval(() => setLocalInfo(formatTimeZoneAndTime(new Date())), 30_000)
    return () => clearInterval(id)
  }, [])

  function onPrevMonth() {
    setViewMonth((m) => addMonths(m, -1))
  }
  function onNextMonth() {
    setViewMonth((m) => addMonths(m, 1))
  }

  function onSelectDate(d) {
    if (d.getMonth() !== viewMonth.getMonth()) return // ignore other months
    setSelectedDate(d)
  }

  function onSelectTime(t) {
    setSelectedTime(t)
  }

  const monthLabel = getMonthLabel(viewMonth)

  return (
    <main className={styles["rs-scheduler"]} aria-label="Booking scheduler">
      <div className={styles["rs-scheduler__container"]}>
        {/* Left column: Logo + details */}
        <section className={styles["rs-scheduler__left"]} aria-labelledby="rs-title">
          <div className={styles["rs-scheduler__logo-card"]}>
            <img
              src={referalimg}
              alt="Referral Source logo"
              className={styles["rs-scheduler__logo-img"]}
            />
          </div>

          <h1 id="rs-title" className={styles["rs-scheduler__title"]}>
            Free Concierge Call
          </h1>

          <ul className={styles["rs-scheduler__meta"]} aria-label="Session details">
            <li className={styles["rs-scheduler__meta-item"]}>
              <span className={styles["rs-scheduler__icon"]} aria-hidden="true">
                {/* clock icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              15 min
            </li>
            <li className={styles["rs-scheduler__meta-item"]}>
              <span className={styles["rs-scheduler__icon"]} aria-hidden="true">
                {/* phone icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.7 3.8c-.6.6-.8 2 .2 4.3 1 2.3 3 4.9 5.2 7.1 2.2 2.2 4.8 4.2 7.1 5.2 2.3 1 3.7.8 4.3.2l1.6-1.6c.4-.4.3-1.1-.2-1.4l-3.2-1.9a1 1 0 0 0-1.1.1l-1.6 1.2c-.3.2-.7.2-1-.1-1.9-1.5-3.5-3.1-5-5-.2-.3-.3-.7-.1-1l1.2-1.6a1 1 0 0 0 .1-1.1L9.7 4c-.3-.5-1-.6-1.4-.2L6.7 3.8z"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Phone call
            </li>
            <li className={styles["rs-scheduler__meta-item"]}>
              <span className={styles["rs-scheduler__icon"]} aria-hidden="true">
                {/* user icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M5 20c1.5-3.5 5-5.5 7-5.5S17.5 16.5 19 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              John Smith
            </li>
          </ul>

          <div className={styles["rs-scheduler__details"]}>
            <h2 className={styles["rs-scheduler__details-title"]}>Appointment details:</h2>
            <p className={styles["rs-scheduler__details-text"]}>
              A free concierge call with one of our professional paint consultants to discuss your upcoming paint
              project and help you organize, prepare, and match with qualified painters in your area.
            </p>
          </div>
        </section>

        {/* Right column: Calendar + time slots */}
        <section className={styles["rs-scheduler__right"]} aria-label="Select date and time">
          <div className={styles["rs-scheduler__header"]}>
            <h2 className={styles["rs-scheduler__heading"]}>Select Date &amp; Time</h2>
            <div className={styles["rs-scheduler__month"]} role="group" aria-label="Month selector">
              <button className={styles["rs-scheduler__month-btn"]} aria-label="Previous month" onClick={onPrevMonth}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 5l-7 7 7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={styles["rs-scheduler__month-label"]}>{monthLabel}</div>
              <button className={styles["rs-scheduler__month-btn"]} aria-label="Next month" onClick={onNextMonth}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles["rs-scheduler__content"]}>
            <div className={styles["rs-scheduler__calendar"]} aria-label="Calendar">
              <div className={styles["rs-scheduler__weekdays"]}>
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                  <div key={d} className={styles["rs-scheduler__weekday"]}>
                    {d}
                  </div>
                ))}
              </div>
              <div className={styles["rs-scheduler__dates"]}>
                {days.map((d) => {
                  const inMonth = d.getMonth() === viewMonth.getMonth()
                  const selected = isSameDay(selectedDate, d)
                  const emphasized = isSameDay(today, d) // give "today" a subtle emphasis
                  const className = [
                    styles["rs-scheduler__date"],
                    !inMonth ? styles["rs-scheduler__date--muted"] : "",
                    emphasized ? styles["rs-scheduler__date--em"] : "",
                    selected ? styles["rs-scheduler__date--selected"] : "",
                  ]
                    .filter(Boolean)
                    .join(" ")
                  return (
                    <button
                      key={d.toISOString()}
                      className={className}
                      onClick={() => inMonth && onSelectDate(d)}
                      aria-pressed={selected || undefined}
                      aria-disabled={!inMonth || undefined}
                      disabled={!inMonth}
                    >
                      {d.getDate()}
                    </button>
                  )
                })}
              </div>

              <p className={styles["rs-scheduler__local-time"]}>
                <span className="sr-only">Your local time:</span>
                Your local time: <br />
                {localInfo.zone} - {localInfo.time}
              </p>
            </div>

            <aside className={styles["rs-scheduler__times"]} aria-label="Available times">
              <ul className={styles["rs-scheduler__time-list"]}>
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot
                  return (
                    <li key={slot} className={styles["rs-scheduler__time-item"]}>
                      <button
                        className={[
                          styles["rs-scheduler__time-btn"],
                          isSelected ? styles["rs-scheduler__time-btn--selected"] : "",
                        ].join(" ")}
                        aria-pressed={isSelected || undefined}
                        onClick={() => onSelectTime(slot)}
                      >
                        {slot}
                      </button>
                    </li>
                  )
                })}
                <li className={styles["rs-scheduler__time-item--submit"]}>
                  <button
                    className={styles["rs-scheduler__submit"]}
                    onClick={next}
                    aria-disabled={!selectedDate || !selectedTime || undefined}
                  >
                    SUBMIT
                  </button>
                </li>
              </ul>
            </aside>
          </div>

          <div className={styles["rs-scheduler__cta-row"]}>
            <button className={styles["rs-scheduler__cta"]} onClick={next}>
              Go to Step 2
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

import styles from "./Calender.module.css";