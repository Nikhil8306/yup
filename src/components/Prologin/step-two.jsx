"use client"

import styles from "./step-two.module.css"
import Heading from "../Heading"
import { useState } from "react"

export default function StepTwoOnboarding({ stepLabel, password, onChange, onPrev, onNext }) {
  const [confirm, setConfirm] = useState("")
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  const valid =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[^A-Za-z0-9]/.test(password) &&
    password === confirm

  return (
    <section className={styles["rs-form-wrap"]} aria-label="Onboarding Step 2">
      <div className={styles["rs-form-card"]}>
        <aside className={styles["rs-form-media"]}>
          <img
            src="/images/step-2.png"
            alt="Painter holding a roller near a tray"
            className={styles["rs-form-image"]}
          />
        </aside>

        <div className={styles["rs-form-panel"]}>
          <div className={styles["rs-form-header"]}>
            <p className={styles["rs-form-step"]}>{stepLabel}</p>
            <Heading>Create a Secure Password</Heading>
            <p className={styles["rs-form-sub"]}>
              Your password should be strong and unique to keep your account secure.
            </p>
          </div>

          <form
            className={styles["rs-form-grid"]}
            onSubmit={(e) => {
              e.preventDefault()
              if (valid) onNext()
            }}
          >
            <div className={`${styles["rs-field"]} ${styles["rs-field--icon"]}`}>
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                aria-label="Password"
                value={password}
                onChange={(e) => onChange(e.target.value)}
              />
              <button
                type="button"
                className={styles["rs-eye"]}
                onClick={() => setShow((s) => !s)}
                aria-label="Toggle password visibility"
              >
                👁
              </button>
            </div>

            <div className={`${styles["rs-field"]} ${styles["rs-field--icon"]}`}>
              <input
                type={show2 ? "text" : "password"}
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <button
                type="button"
                className={styles["rs-eye"]}
                onClick={() => setShow2((s) => !s)}
                aria-label="Toggle confirm visibility"
              >
                👁
              </button>
            </div>

            <div className={styles["rs-password-rules"]}>
              <p>Password must contain:</p>
              <ul>
                <li>At least one uppercase letter</li>
                <li>At least one lowercase letter</li>
                <li>At least one number</li>
                <li>At least one special character</li>
              </ul>
            </div>

            <div className={styles["rs-form-actions"]}>
              <button type="button" className={styles["rs-secondary-btn"]} onClick={onPrev}>
                Back
              </button>
              <button type="submit" className={styles["rs-primary-btn"]} disabled={!valid} aria-disabled={!valid}>
                Go to Step 3
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
