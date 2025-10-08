import styles from "./Signupsuccess.module.css"
import Heading from "../../../components/Heading"
export function FmFlowSignupSuccess() {
  return (
    <main className={styles["fs-page"]}>
      <section className={styles["fs-card"]} aria-labelledby="fs-heading">
        <header className={styles["fs-header"]}>
          <div className={styles["fs-icon"]} aria-hidden="true">
            <svg
              className={styles["fs-icon-check"]}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20 7L9 18L4 13"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <Heading id="fs-heading">
            {"Thank you for signing up with FM Flow!"}
          </Heading>
        </header>

        <p className={styles["fs-body"]}>
          {
            "We appreciate your interest and are excited to have you onboard. Your account will be under review for 7-10 days. You'll be working with a third party vendor for your payment process account so you can do invoicing and payments directly through the FM Flow system. If you have any questions, please reach out! Your onboarding account manager will be reaching out in 1-2 weeks to get you schedule for your onboarding call, where we will go through how to use the software and next steps. Please feel free to log into your FM Flow account at the link below to update your info at anytime."
          }
        </p>

        <div className={styles["fs-actions"]}>
          <a href="#" className={styles["fs-button"]} role="button" aria-label="Go to My Account">
            {"Go to My Account"}
          </a>
        </div>
      </section>
    </main>
  )
}

export default FmFlowSignupSuccess