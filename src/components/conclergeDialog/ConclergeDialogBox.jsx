import { useEffect } from "react";
import styles from "./Conclerge.module.css";

import ConclergeImage from "./ConclergeImage.jpeg";

export default function ConciergeDialog({ open, onClose, onSubmit }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleOverlayClick = () => onClose();
  const stop = (e) => e.stopPropagation();

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = fd.get("email") || "";
    onSubmit?.(email);
  };

  return (
    <div
      className={styles["cgd-overlay"]}
      onClick={handleOverlayClick}
      aria-hidden="true"
    >
      <div
        className={styles["cgd-modal"]}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cgd-heading"
        onClick={stop}
      >
        <button
          type="button"
          className={styles["cgd-close"]}
          aria-label="Close dialog"
          onClick={onClose}
        >
          ×
        </button>

        <div className={styles["cgd-grid"]}>
          <div className={styles["cgd-left"]}>
            <p className={styles["cgd-kicker"]}>Wait. Before You Go.</p>
            <h2 id="cgd-heading" className={styles["cgd-heading"]}>
              Need Help Finding the Right Painter?
            </h2>
            <p className={styles["cgd-copy"]}>
              Skip the form — book a free call with a professional paint
              consultant who can walk you through your project and match you
              with the perfect pros.
            </p>

            <form className={styles["cgd-form"]} onSubmit={submitForm}>
              <label htmlFor="cgd-email" className={styles["cgd-label"]}>
                Enter your email
              </label>
              <input
                id="cgd-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className={styles["cgd-input"]}
              />
              <button type="submit" className={styles["cgd-cta"]}>
                GET MY CONCIERGE CALL
              </button>
            </form>

            <button
              type="button"
              className={styles["cgd-skip"]}
              onClick={onClose}
            >
              Nevermind, I want to skip the call and get started now.
            </button>
          </div>

          <div className={styles["cgd-right"]}>
            <img
              src={ConclergeImage}
              alt="Smiling person using a phone"
              className={styles["cgd-image"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
