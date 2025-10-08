import styles from "./VideoHolder.module.css"
import Heading from "../Heading"

export default function VideoHolder() {
  return (
    <section className={styles["rs-hero"]} aria-labelledby="rs-hero-title">
      <div className={styles["rs-hero__grid"]}>
        <div className={styles["rs-hero__video"]} aria-label="Video placeholder">
          <span className={styles["rs-hero__video-label"]}>VIDEO PLACEHOLDER</span>
        </div>

        <div className={styles["rs-hero__content"]}>
          <Heading id="rs-hero-title">
            {"No More Chasing Leads."}
            <br />
            {"Only Pay for the Jobs You Get."}
          </Heading>

          <p className={styles["rs-hero__lead"]}>
            {
              "With Referral Source, the jobs come to you—real people, real projects, ready to go. You never pay for leads - only for the jobs you actually book. Real jobs. No risk."
            }
          </p>

          <div className={styles["rs-hero__benefits"]} role="group" aria-label="Key benefits">
            <div className={styles["rs-hero__benefit"]}>
              <div className={styles["rs-hero__icon"]} aria-hidden="true">
                {/* Coin + match icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" fill="#fff" opacity="0.2" />
                  <path
                    d="M9.5 7.75c1.8 0 3.25.97 3.25 2.17 0 1.01-.89 1.7-2.01 1.98l-.77.2c-.7.18-1.22.42-1.22.85 0 .44.53.8 1.39.8.72 0 1.37-.22 1.83-.56l.94 1.27c-.62.48-1.5.79-2.52.86v1.08H8.2v-1.1c-1.69-.22-2.84-1.16-2.84-2.42 0-1.29 1.12-2.03 2.52-2.38l.87-.22c.59-.15 1.13-.37 1.13-.8 0-.44-.54-.78-1.38-.78-.74 0-1.47.27-2.02.72l-.97-1.23c.73-.58 1.74-.95 2.86-1.03V6.5h1.19v1.26z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <p className={styles["rs-hero__benefit-text"]}>
                {"No chasing jobs. We match you with ready-to-paint customers."}
              </p>
            </div>

            <div className={styles["rs-hero__benefit"]}>
              <div className={styles["rs-hero__icon"]} aria-hidden="true">
                {/* Pay when you win icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" fill="#fff" opacity="0.2" />
                  <path d="M17.3 8.7l-6.1 6.1-2.5-2.5-1.4 1.4 3.9 3.9 7.5-7.5-1.4-1.4z" fill="#fff" />
                </svg>
              </div>
              <p className={styles["rs-hero__benefit-text"]}>
                {"Never pay for leads again. Only pay when you win the work."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

