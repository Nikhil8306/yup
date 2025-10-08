import giftimg from "../../assets/gift.png";
import Heading from "../Heading";
import styles from "./Giftcard.module.css"
import Button from "../UI/Button/Button";
function Giftcard() {
  return (
    <section className={styles["swgOffer-section"]} aria-labelledby="swgOffer-title">
      <div className={styles["swgOffer-container"]}>
        <div className={styles["swgOffer-media"]}>
          <img
            src={giftimg}
            alt="Happy woman holding paint color swatches"
            className={styles["swgOffer-image"]}
            loading="eager"
          />
        </div>

        <div className={styles["swgOffer-content"]}>
          <Heading >
            {"Get a $200 Sherwin‑Williams Gift Card When You Join."}
          </Heading>
            <br />
          <p className={styles["swgOffer-subtext"]}>
            {
              "Book a quick demo, and sign up to claim your $200 bonus offer! It’s just one more way we’re helping to put money back into your pocket."
            }
          </p>

          <br />
          <br />


          <ul className={styles["swgOffer-list"]} role="list">
            <li className={styles["swgOffer-listItem"]}>
              <CheckIcon />
              <span>Click the button below schedule your demo</span>
            </li>
            <li className={styles["swgOffer-listItem"]}>
              <CheckIcon />
              <span>
                Learn how you can get ready‑to‑paint leads at no cost, plus a bunch of hardcore tools designed
                specifically to help painters fill the gaps in your business
              </span>
            </li>
            <li className={styles["swgOffer-listItem"]}>
              <CheckIcon />
              <span>Get your $200 Sherwin‑Williams gift card</span>
            </li>
          </ul>
            
            <br />
          <div className={styles["swgOffer-ctaRow"]}>
            <Button backgroundColor={"var(--c2)"}>
              Book a Demo
            </Button>

            <div className={styles["swgOffer-badge"]} aria-hidden="true">
              <span className={styles["swgOffer-badgeSmall"]}>MEMBER</span>
              <span className={styles["swgOffer-badgeBrand"]}>Sherwin‑Williams</span>
              <span className={styles["swgOffer-badgeSmall"]}>DIGITAL ALLIANCE</span>
            </div>
          </div>

          <div className={styles["swgOffer-fineprint"]}>
            <p>
              <strong>SPONSORED.</strong> Sherwin‑Williams is in no way associated with or responsible for services
              obtained from Referral Source.
            </p>
            <p>
              *Offer valid for new members only. Must complete sign‑up after demo to redeem offer. *Sherwin‑Williams is
              in no way associated with or responsible for services obtained from Digital Alliance Members.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <span className={styles["swgOffer-check"]} aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="#2C7BC4" />
        <path d="M6 10.5l2.5 2.5L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default Giftcard;