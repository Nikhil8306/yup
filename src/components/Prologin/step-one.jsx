"use client"

import styles from "./step-one.module.css"
import Heading from "../Heading"
import i1 from "../../assets/i1.png";


export default function StepOneOnboarding({ stepLabel = "Step 1 of 5", values = {}, onChange, onNext }) {
  const v = (k) => values[k] || ""

  return (
    <section className={styles["rs-form-wrap"]} aria-label="Onboarding Step 1">
      <div className={styles["rs-form-card"]}>
        <aside className={styles["rs-form-media"]}>
          <img
            src={i1}
            alt="Smiling worker in checked shirt standing with arms crossed"
            className={styles["rs-form-image"]}
          />
        </aside>

        <div className={styles["rs-form-panel"]}>
          <div className={styles["rs-form-header"]}>
            <p className={styles["rs-form-step"]}>{stepLabel}</p>
            <Heading>
              {"Let’s get started…"}
              <br />
              {"Tell us about you."}
            </Heading>
            <p className={styles["rs-form-sub"]}>
              {
                "Thanks for choosing Referral Source. Please provide your business information to continue onboarding and start getting matches."
              }
            </p>
          </div>

          <form
            className={styles["rs-form-grid"]}
            aria-label="Business information form"
            onSubmit={(e) => {
              e.preventDefault()
              onNext?.()
            }}
          >
            <div className={styles["rs-field"]}>
              <input
                value={v("firstName")}
                onChange={(e) => onChange?.("firstName", e.target.value)}
                type="text"
                placeholder="Your first name"
                aria-label="Your first name"
              />
            </div>
            <div className={styles["rs-field"]}>
              <input
                value={v("lastName")}
                onChange={(e) => onChange?.("lastName", e.target.value)}
                type="text"
                placeholder="Your last name"
                aria-label="Your last name"
              />
            </div>

            <div className={styles["rs-field"]}>
              <input
                value={v("phone")}
                onChange={(e) => onChange?.("phone", e.target.value)}
                type="tel"
                placeholder="Your phone"
                aria-label="Your phone"
              />
            </div>
            <div className={styles["rs-field"]}>
              <input
                value={v("email")}
                onChange={(e) => onChange?.("email", e.target.value)}
                type="email"
                placeholder="Your email"
                aria-label="Your email"
              />
            </div>

            <div className={styles["rs-field"]}>
              <input
                value={v("businessName")}
                onChange={(e) => onChange?.("businessName", e.target.value)}
                type="text"
                placeholder="Business Name"
                aria-label="Business Name"
              />
            </div>
            <div className={styles["rs-field"]}>
              <input
                value={v("address")}
                onChange={(e) => onChange?.("address", e.target.value)}
                type="text"
                placeholder="Address"
                aria-label="Address"
              />
            </div>

            <div className={styles["rs-field"]}>
              <input
                value={v("city")}
                onChange={(e) => onChange?.("city", e.target.value)}
                type="text"
                placeholder="City"
                aria-label="City"
              />
            </div>
            <div className={styles["rs-field"]}>
              <input
                value={v("state")}
                onChange={(e) => onChange?.("state", e.target.value)}
                type="text"
                placeholder="State"
                aria-label="State"
              />
            </div>
            <div className={styles["rs-field"]}>
              <input
                value={v("zip")}
                onChange={(e) => onChange?.("zip", e.target.value)}
                type="text"
                placeholder="Zip"
                aria-label="Zip"
              />
            </div>

            <div className={`${styles["rs-field"]} ${styles["rs-field--wide"]}`}>
              <input
                value={v("timeZone")}
                onChange={(e) => onChange?.("timeZone", e.target.value)}
                type="text"
                placeholder="Time Zone"
                aria-label="Time Zone"
              />
            </div>

            <div className={styles["rs-form-actions"]}>
              <button type="submit" className={styles["rs-primary-btn"]} aria-label="Go to Step 2">
                Go to Step 2
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
