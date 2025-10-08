"use client"

import styles from "./step-three.module.css"
import Heading from "../Heading"

export default function StepThreeOnboarding({ stepLabel, values, onChange, onPrev, onNext }) {
  const allFilled = values.cardName && values.cardNumber && values.expMonth && values.expYear && values.ccv

  return (
    <section className={styles["rs-form-wrap"]} aria-label="Onboarding Step 3">
      <div className={styles["rs-form-card"]}>
        <aside className={styles["rs-form-media"]}>
          <img
            src="/images/step-3.png"
            alt="Painter working outside a house"
            className={styles["rs-form-image"]}
          />
        </aside>

        <div className={styles["rs-form-panel"]}>
          <div className={styles["rs-form-header"]}>
            <p className={styles["rs-form-step"]}>{stepLabel}</p>
            <Heading>Activate Your Subscription</Heading>
            <p className={styles["rs-form-sub"]}>
              Getting ready-to-paint leads added to your calendar is easy with Referral Source.
              Just activate your FM Flow subscription to get started today.
            </p>
          </div>

          <form
            className={styles["rs-form-grid"]}
            onSubmit={(e) => {
              e.preventDefault()
              onNext()
            }}
          >
            <fieldset className={styles["rs-fieldset"]}>
              <legend className={styles["rs-legend"]}>Billing Frequency:</legend>

              <label className={styles["rs-radio"]}>
                <input
                  type="radio"
                  name="billing"
                  checked={values.billingFrequency === "monthly"}
                  onChange={() => onChange("billingFrequency", "monthly")}
                />
                <span>Monthly</span> <em>$99</em>
              </label>

              <label className={styles["rs-radio"]}>
                <input
                  type="radio"
                  name="billing"
                  checked={values.billingFrequency === "annual"}
                  onChange={() => onChange("billingFrequency", "annual")}
                />
                <span>Annual</span> <em>$1,000 (best value)</em>
              </label>
            </fieldset>

            <div className={styles["rs-field"]}>
              <input
                value={values.cardName}
                onChange={(e) => onChange("cardName", e.target.value)}
                placeholder="Name on Card"
                aria-label="Name on Card"
              />
            </div>

            <div className={styles["rs-field"]}>
              <input
                value={values.cardNumber}
                onChange={(e) => onChange("cardNumber", e.target.value)}
                placeholder="Credit Card Number"
                aria-label="Credit Card Number"
              />
            </div>

            <div className={styles["rs-field"]}>
              <input
                value={values.expMonth}
                onChange={(e) => onChange("expMonth", e.target.value)}
                placeholder="Exp. Month"
                aria-label="Expiration Month"
              />
            </div>

            <div className={styles["rs-field"]}>
              <input
                value={values.expYear}
                onChange={(e) => onChange("expYear", e.target.value)}
                placeholder="Exp. Year"
                aria-label="Expiration Year"
              />
            </div>

            <div className={styles["rs-field"]}>
              <input
                value={values.ccv}
                onChange={(e) => onChange("ccv", e.target.value)}
                placeholder="CCV"
                aria-label="CCV"
              />
            </div>

            <label className={styles["rs-checkbox"]}>
              <input
                type="checkbox"
                checked={values.useShippingAsBilling}
                onChange={(e) => onChange("useShippingAsBilling", e.target.checked)}
              />
              <span>Use Shipping as Billing</span>
            </label>

            <div className={styles["rs-form-actions"]}>
              <button type="button" className={styles["rs-secondary-btn"]} onClick={onPrev}>
                Back
              </button>
              <button type="submit" className={styles["rs-primary-btn"]} disabled={!allFilled}>
                Go to Step 4
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
