import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./referral-wizard.module.css";

import WizardStep1 from "./wizard-step-1.png";
import WizardStep2 from "./wizard-step-2.png";
import WizardStep3 from "./wizard-step-3.png";


import Heading from "../Heading";
import Button from "../UI/Button/Button";

const defaultData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  zip: "",
  location: "",
  propertyType: "",
  paintScope: "",
  sqft: "",
  colorsSelected: "",
  date: "",
  contactMethod: "",
  budget: "",
  notes: "",
};

// Accessible, sleek custom dropdown that closes on outside click and supports keyboard navigation
function RswSelect({
  label,
  value,
  onChange,
  options,
  placeholder = "Select...",
  id,
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const buttonRef = useRef(null);
  const listRef = useRef(null);
  const rootRef = useRef(null);

  const selected = useMemo(
    () => options.find((o) => o.value === value),
    [options, value]
  );

  useEffect(() => {
    const onDocClick = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, options.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (activeIndex >= 0) {
          const opt = options[activeIndex];
          onChange(opt.value);
          setOpen(false);
          buttonRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, options, activeIndex, onChange]);

  useEffect(() => {
    if (!open || activeIndex < 0) return;
    const el = listRef.current?.querySelectorAll("li")[activeIndex];
    el?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  return (
    <div className={styles["rsw-select"]} ref={rootRef}>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <Button
        id={id}
        ref={buttonRef}
        type="button"
        className={styles["rsw-select__button"]}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          setOpen((o) => !o);
          if (!open) {
            const idx = Math.max(
              0,
              value ? options.findIndex((o) => o.value === value) : -1
            );
            setActiveIndex(idx);
          }
        }}
      >
        <span
          className={
            value
              ? styles["rsw-select__value"]
              : styles["rsw-select__placeholder"]
          }
        >
          {selected?.label || placeholder}
        </span>
        <svg
          className={styles["rsw-select__icon"]}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            d="M6 8l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </Button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          className={styles["rsw-select__list"]}
          aria-label={label}
        >
          {options.map((opt, i) => {
            const isActive = i === activeIndex;
            const isSelected = opt.value === value;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                className={
                  isActive
                    ? styles["rsw-select__option--active"]
                    : styles["rsw-select__option"]
                }
                onMouseEnter={() => setActiveIndex(i)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  onChange(opt.value);
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function ReferralWizard() {
  const [step, setStep] = useState(0); // 0..2
  const [data, setData] = useState(defaultData);

  const next = () => setStep((s) => Math.min(s + 1, 2));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const update = (key, value) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  const onSubmit = () => {
    // Replace with your submit endpoint
    console.log("[v0] Wizard submission:", data);
    alert("Submitted! Check the console for the payload.");
  };

  return (
    <section className={styles["rsw-container"]} aria-label="Referral wizard">
      <div className={styles["rsw-grid"]}>
        <div className={styles["rsw-left"]}>
          <img
            src={
              step === 0 ? WizardStep1 : step === 1 ? WizardStep2 : WizardStep3
            }
            alt="Decorative project photo"
            className={styles["rsw-image"]}
          />
        </div>

        <div className={styles["rsw-right"]}>
          <p className={styles["rsw-step"]}>Step {step + 1} of 3</p>
          <Heading>
            {step === 0 && (
              <>
                {"Let’s get started..."}
                <br />
                {"Tell us about you."}
              </>
            )}
            {step === 1 && (
              <>
                {"You’re almost there..."}
                <br />
                {"Tell us about your project"}
              </>
            )}
            {step === 2 && (
              <>
                {"Last step..."}
                <br />
                {"Let’s lock in the details."}
              </>
            )}
          </Heading>
          <p className={styles["rsw-lead"]}>
            {step === 0 &&
              "Thanks for choosing Referral Source. You’re just a few short questions away from getting matched with three top painters in your area."}
            {step === 1 &&
              "Great! Now let’s learn about your upcoming painting project so we can match you with the right pros for your job."}
            {step === 2 &&
              "Tell us when and where you need the work, plus your budget range, so we can match you with top-rated painters for tailored quotes."}
          </p>

          {step === 0 && (
            <div className={styles["rsw-fields"]}>
              <div className={styles["rsw-row"]}>
                <input
                  className={styles["rsw-input"]}
                  type="text"
                  placeholder="Your first name"
                  value={data.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                />
                <input
                  className={styles["rsw-input"]}
                  type="text"
                  placeholder="Your last name"
                  value={data.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                />
              </div>
              <div className={styles["rsw-row"]}>
                <input
                  className={styles["rsw-input"]}
                  type="tel"
                  placeholder="Your phone"
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
                <input
                  className={styles["rsw-input"]}
                  type="email"
                  placeholder="Your email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>
              <div className={styles["rsw-rowSingle"]}>
                <input
                  className={styles["rsw-input"]}
                  type="text"
                  placeholder="Your ZIP code"
                  value={data.zip}
                  onChange={(e) => update("zip", e.target.value)}
                />
              </div>
              <div className={styles["rsw-actions"]}>
                <Button backgroundColor={"var(--c2)"} className={styles["rsw-primary"]} onClick={next}>
                  Go to Step 2
                </Button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className={styles["rsw-fields"]}>
              <div className={styles["rsw-row"]}>
                <input
                  className={styles["rsw-input"]}
                  type="text"
                  placeholder="Location"
                  value={data.location}
                  onChange={(e) => update("location", e.target.value)}
                />
                <RswSelect
                  id="propertyType"
                  label="Residential or Commercial"
                  placeholder="Residential or Commercial"
                  value={data.propertyType}
                  onChange={(v) => update("propertyType", v)}
                  options={[
                    { value: "residential", label: "Residential" },
                    { value: "commercial", label: "Commercial" },
                  ]}
                />
              </div>

              <div className={styles["rsw-row"]}>
                <RswSelect
                  id="paintScope"
                  label="What do you want painted?"
                  placeholder="What do you want painted?"
                  value={data.paintScope}
                  onChange={(v) => update("paintScope", v)}
                  options={[
                    { value: "interior", label: "Interior" },
                    { value: "exterior", label: "Exterior" },
                    { value: "both", label: "Interior + Exterior" },
                    { value: "other", label: "Other" },
                  ]}
                />
                <input
                  className={styles["rsw-input"]}
                  type="number"
                  min={0}
                  placeholder="Approximate square footage"
                  value={data.sqft}
                  onChange={(e) => update("sqft", e.target.value)}
                />
              </div>

              <div className={styles["rsw-rowSingle"]}>
                <RswSelect
                  id="colorsSelected"
                  label="Do you have paint colors selected?"
                  placeholder="Do you have paint colors selected?"
                  value={data.colorsSelected}
                  onChange={(v) => update("colorsSelected", v)}
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                    { value: "not-sure", label: "Not sure yet" },
                  ]}
                />
              </div>

              <div className={styles["rsw-actions"]}>
                <Button backgroundColor={"var(--c2)"} color={"white"}  onClick={prev}>
                  Back
                </Button>
                <Button backgroundColor={"var(--c2"} color={"white"}  onClick={next}>
                  Go to Step 3
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles["rsw-fields"]}>
              <div className={styles["rsw-row"]}>
                <input
                  className={styles["rsw-input"]}
                  type="date"
                  placeholder="Date of project"
                  value={data.date}
                  onChange={(e) => update("date", e.target.value)}
                />
                <RswSelect
                  id="contactMethod"
                  label="Best way to reach you"
                  placeholder="Best way to reach you"
                  value={data.contactMethod}
                  onChange={(v) => update("contactMethod", v)}
                  options={[
                    { value: "phone", label: "Phone" },
                    { value: "email", label: "Email" },
                    { value: "text", label: "Text" },
                  ]}
                />
              </div>

              <div className={styles["rsw-rowSingle"]}>
                <RswSelect
                  id="budget"
                  label="Budget range"
                  placeholder="Budget range"
                  value={data.budget}
                  onChange={(v) => update("budget", v)}
                  options={[
                    { value: "<1k", label: "Under $1,000" },
                    { value: "1-3k", label: "$1,000 – $3,000" },
                    { value: "3-5k", label: "$3,000 – $5,000" },
                    { value: "5-10k", label: "$5,000 – $10,000" },
                    { value: "10k+", label: "$10,000+" },
                  ]}
                />
              </div>

              <div className={styles["rsw-rowSingle"]}>
                <textarea
                  className={styles["rsw-textarea"]}
                  rows={4}
                  placeholder="Any additional details or special instructions?"
                  value={data.notes}
                  onChange={(e) => update("notes", e.target.value)}
                />
              </div>

              <div className={styles["rsw-actions"]}>
                <Button backgroundColor={"var(--c2)"} color={"white"} className={styles["rsw-secondary"]} onClick={prev}>
                  Back
                </Button>
                <Button backgroundColor={"var(--c2)"} color={"white"} className={styles["rsw-primary"]} onClick={onSubmit}>
                  Get Matched
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
