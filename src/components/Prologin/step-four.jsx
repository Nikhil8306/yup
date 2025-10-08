"use client"

import { useCallback } from "react"
import styles from "./step-four.module.css"
import Heading from "../Heading"

const ACCEPT = ["image/png", "image/jpeg", "image/jpg"]
const MAX_SIZE = 5 * 1024 * 1024

function useDrop(onFile) {
  const handle = useCallback((files) => {
    if (!files || files.length === 0) return
    const f = files[0]
    if (!ACCEPT.includes(f.type) || f.size > MAX_SIZE) {
      alert("Please select a PNG or JPG up to 5MB.")
      return
    }
    const url = URL.createObjectURL(f)
    onFile(f, url)
  }, [onFile])

  return {
    onInput: (e) => handle(e.target.files),
    onDrop: (e) => {
      e.preventDefault()
      handle(e.dataTransfer.files)
    },
    onDragOver: (e) => e.preventDefault(),
  }
}

export default function StepFourOnboarding({ stepLabel, values, onChange, onPrev, onNext }) {
  const logoDrop = useDrop((f, url) => {
    onChange("logoFile", f)
    onChange("logoPreview", url)
  })

  const avatarDrop = useDrop((f, url) => {
    onChange("avatarFile", f)
    onChange("avatarPreview", url)
  })

  const canNext = values.businessType && values.employees && values.taxId

  return (
    <section className={styles["rs-form-wrap"]} aria-label="Onboarding Step 4">
      <div className={styles["rs-form-card"]}>
        <aside className={styles["rs-form-media"]}>
          <img
            src="/images/step-4.png"
            alt="Painter working on ceiling"
            className={styles["rs-form-image"]}
          />
        </aside>

        <div className={styles["rs-form-panel"]}>
          <div className={styles["rs-form-header"]}>
            <p className={styles["rs-form-step"]}>{stepLabel}</p>
            <Heading>Complete Your Business Profile</Heading>
            <p className={styles["rs-form-sub"]}>
              Fill in your business information to ensure smooth processing.
            </p>
          </div>

          <form
            className={styles["rs-form-grid"]}
            onSubmit={(e) => {
              e.preventDefault()
              if (canNext) onNext()
            }}
          >
            <div className={styles["rs-field"]}>
              <input
                value={values.businessType}
                onChange={(e) => onChange("businessType", e.target.value)}
                placeholder="Business type"
                aria-label="Business type"
              />
            </div>

            <div className={styles["rs-field"]}>
              <input
                value={values.employees}
                onChange={(e) => onChange("employees", e.target.value)}
                placeholder="No. of Employees"
                aria-label="No. of Employees"
              />
            </div>

            <div className={styles["rs-field"]}>
              <input
                value={values.taxId}
                onChange={(e) => onChange("taxId", e.target.value)}
                placeholder="Business Tax ID"
                aria-label="Business Tax ID"
              />
            </div>

            <div className={styles["rs-upload-group"]}>
              <div className={styles["rs-upload-col"]}>
                <p className={styles["rs-upload-label"]}>Upload your logo</p>
                <label
                  className={styles["rs-upload-box"]}
                  onDrop={logoDrop.onDrop}
                  onDragOver={logoDrop.onDragOver}
                >
                  {values.logoPreview ? (
                    <img
                      src={values.logoPreview || "/placeholder.svg"}
                      alt="Logo preview"
                      className={styles["rs-upload-preview"]}
                    />
                  ) : (
                    <div className={styles["rs-upload-help"]}>
                      <span className={styles["rs-upload-icon"]}>⬆️</span>
                      <p>Drop files here or click to browse</p>
                      <small>Accepted formats: png, jpg, jpeg</small>
                      <small>Max size: 5MB</small>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={logoDrop.onInput}
                    className={styles["rs-upload-input"]}
                    aria-label="Upload logo"
                  />
                </label>
              </div>

              <div className={styles["rs-upload-col"]}>
                <p className={styles["rs-upload-label"]}>Upload a profile picture</p>
                <label
                  className={styles["rs-upload-box"]}
                  onDrop={avatarDrop.onDrop}
                  onDragOver={avatarDrop.onDragOver}
                >
                  {values.avatarPreview ? (
                    <img
                      src={values.avatarPreview || "/placeholder.svg"}
                      alt="Profile preview"
                      className={styles["rs-upload-preview"]}
                    />
                  ) : (
                    <div className={styles["rs-upload-help"]}>
                      <span className={styles["rs-upload-icon"]}>⬆️</span>
                      <p>Drop files here or click to browse</p>
                      <small>Accepted formats: png, jpg, jpeg</small>
                      <small>Max size: 5MB</small>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={avatarDrop.onInput}
                    className={styles["rs-upload-input"]}
                    aria-label="Upload profile picture"
                  />
                </label>
              </div>
            </div>

            <div className={styles["rs-form-actions"]}>
              <button
                type="button"
                className={styles["rs-secondary-btn"]}
                onClick={onPrev}
              >
                Back
              </button>
              <button
                type="submit"
                className={styles["rs-primary-btn"]}
                disabled={!canNext}
              >
                Go to Step 5
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
