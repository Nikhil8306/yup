
import HowInfo from "../../../components/How/How";
import Match from "../../../components/Match/Match";

import source from "../../../assets/referralsource.png";
import Heading from "../../../components/Heading";
import Description from "../../../components/Description";

import team from "../../../assets/team.png";
import conf from "../../../assets/confidence.png";

function How() {
    return <>
        <HowInfo/>
        <Match className={styles.match}/>
        <PaintersHighlight/>
        <WhyReferral/>
    </> 
}

function WhyReferral() {
    return <>

        <div className={styles.why}>
            <Heading>Why Choose Referral Source?</Heading>
            <img src={source} alt="" />
        </div>

    </>
}

function PaintersHighlight() {
  return (
    <section className={styles["rs-painters-wrap"]}>
      {/* Section 1: Text left, image right */}
      <div className={styles["rs-painters-row"]}>
        <div className={styles["rs-painters-colText"]}>
          <Heading >Screened and Vetted Painters</Heading>
          <Description >
            When you start your project with Referral Source, you can trust that every painter you're matched with has
            already been carefully screened. We verify licensing, insurance, and professional experience, so you don't
            have to. That means no guessing, no risky hires—just local pros who meet our standards for quality,
            reliability, and professionalism.
          </Description>

          <ul className={styles["rs-painters-badges"]}>
            <li className={styles["rs-painters-badge"]}>
              <span className={styles["rs-painters-icon"]} aria-hidden="true">
                {/* simple shield check icon */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <span>Licensed</span>
            </li>
            <li className={styles["rs-painters-badge"]}>
              <span className={styles["rs-painters-icon"]} aria-hidden="true">
                {/* shield with dot for insured */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" />
                  <circle cx="12" cy="12" r="2.2" />
                </svg>
              </span>
              <span>Insured</span>
            </li>
            <li className={styles["rs-painters-badge"]}>
              <span className={styles["rs-painters-icon"]} aria-hidden="true">
                {/* badge/check */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8.5 12.5l2.5 2.5 4.5-5" />
                </svg>
              </span>
              <span>Vetted</span>
            </li>
          </ul>
        </div>

        <figure className={styles["rs-painters-colImage"]}>
          <img
            className={styles["rs-painters-image"]}
            src={team}
            alt="Friendly team of painters smiling and preparing tools"
            loading="lazy"
          />
        </figure>
      </div>

      {/* Section 2: Image left, text right */}
      <div className={`${styles["rs-painters-row"]} ${styles["rs-painters-rowReverse"]}`}>
        <figure className={styles["rs-painters-colImage"]}>
          <img
            className={styles["rs-painters-image"]}
            src={conf}
            alt="Homeowner comparing quotes on a phone"
            loading="lazy"
          />
        </figure>

        <div className={styles["rs-painters-colText"]}>
          <Heading>Compare with Confidence</Heading>
          <Description >
            No more chasing down quotes or wondering if you're overpaying. With Referral Source, you'll receive up to
            three qualified bids directly from top local painters who are ready for your project. Transparent estimates
            and a side-by-side view help you choose the best fit, fast.
          </Description>
        </div>
      </div>
    </section>
  )
}

import styles from "./How.module.css";

export default How;