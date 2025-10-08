"use client"

import styles from "./Matches.module.css"
import image from "../../assets/three.png";
import Heading from "../../components/Heading";

export default function Matches() {
  return (
    <section className={styles["rs-matches"]} aria-label="Referral Source matches selection">
      <div className={styles["rs-card"]}>
        <div className={styles["rs-media"]} aria-hidden="true">
          {/* Decorative image; alt is empty to avoid repetition for screen readers */}
          <img src={image} alt="" />
        </div>

        <div className={styles["rs-content"]}>
          <p className={styles["rs-step"]}>Step 3 of 3</p>

          <Heading>
            {"How do you want to"} <br />
            {"get your matches?"}
          </Heading>

          <p className={styles["rs-desc"]}>
            {"Referral Source makes it easy for customers to match with painters for their projects. "}
            {"Please choose one of the options below."}
          </p>

          <div className={styles["rs-actions"]}>
            <button
              className={styles["rs-button"]}
              type="button"
              aria-label="Do it myself: Schedule my own matches and estimates"
            >
              <span className={styles["rs-btn-top"]}>Do It Myself:</span>
              <span className={styles["rs-btn-sub"]}>Schedule My Own Matches & Estimates</span>
            </button>

            <div className={styles["rs-or"]} role="separator" aria-label="or">
              or
            </div>

            <button
              className={styles["rs-button"]}
              type="button"
              aria-label="Do it for me: Send me my matches via email"
            >
              <span className={styles["rs-btn-top"]}>Do It For Me:</span>
              <span className={styles["rs-btn-sub"]}>Send Me My Matches Via Email</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}