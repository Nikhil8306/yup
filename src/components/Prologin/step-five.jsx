"use client"

import { Heading } from "lucide-react"
import styles from "./step-five.module.css"

export default function StepFiveOnboarding({ stepLabel, values, setAvailability, onPrev, onFinish }) {
  return (
    <section className={styles["rs-form-wrap"]} aria-label="Onboarding Step 5">
      <div className={styles["rs-form-card"]}>
        <div className={styles["rs-form-panel"]}>
          <p className={styles["rs-form-step"]}>{stepLabel}</p>

          <Heading >Congratulations!</Heading>
          <h3 className={styles["rs-title-md"]}>Your matches are on the way.</h3>

          <p className={styles["rs-muted"]}>
            Thank you for signing up for Referral Source powered by FM Flow. Please keep an eye out for a text and email
            in the next 7–10 days that will confirm your onboarding and training time.
          </p>

          <p className={styles["rs-red"]}>
            Please follow the next steps to upload the required documents in order to receive Referral Source leads. If
            you'd like to go right to the platform, please SKIP.
          </p>

          <h4 className={styles["rs-title-q"]}>
            When would you like to receive leads from Referral Source?
          </h4>

          <div className={styles["rs-schedule"]} role="group" aria-label="Weekly availability">
            <div className={styles["rs-schedule-head"]}>
              <span>Days Available</span>
              <span>Start Time</span>
              <span>End Time</span>
            </div>

            {values.availability.map((row, idx) => (
              <div key={row.day} className={styles["rs-schedule-row"]}>
                <label className={styles["rs-day"]}>
                  <input
                    type="checkbox"
                    checked={row.enabled}
                    onChange={(e) => setAvailability(idx, { enabled: e.target.checked })}
                    aria-label={`${row.day} enabled`}
                  />
                  <span>{row.day}</span>
                </label>

                <input
                  className={styles["rs-time"]}
                  type="time"
                  value={row.start}
                  onChange={(e) => setAvailability(idx, { start: e.target.value })}
                  disabled={!row.enabled}
                  aria-label={`${row.day} start time`}
                />

                <input
                  className={styles["rs-time"]}
                  type="time"
                  value={row.end}
                  onChange={(e) => setAvailability(idx, { end: e.target.value })}
                  disabled={!row.enabled}
                  aria-label={`${row.day} end time`}
                />
              </div>
            ))}
          </div>

          <div className={styles["rs-actions"]}>
            <button className={styles["rs-ghost"]} onClick={onPrev}>
              Back
            </button>
            <button className={styles["rs-skip"]}>
              Skip to My Account
            </button>
            <button className={styles["rs-primary"]} onClick={onFinish}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
