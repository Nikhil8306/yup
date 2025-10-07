import styles from "./Details.module.css";
import Button from "../../components/UI/Button/Button";
import act from "../../assets/act.png";

function Details({ data, setData, prev, next }) {
  const update = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };


  return (
    <>
    <section className={styles["rsw-container"]} aria-label="Referral wizard">
      <div className={styles["rsw-grid"]}>
        <div className={styles["rsw-left"]}>
          <img
            src={act}
            alt="Decorative project photo"
            className={styles["rsw-image"]}
          />
        </div>

        <div className={styles["rsw-right"]}>
          <p className={styles["rsw-step"]}>Step 2 of 2</p>

          <h2 className={styles["rsw-heading"]}>
            You’re almost there...
            <br />
            Let’s Get to Know You
          </h2>

          <p className={styles["rsw-lead"]}>
            Just answer a few simple questions and confirm your 100% free
            concierge call with one of our painting pro consultants.
          </p>

          <div className={styles["rsw-fields"]}>
            <div className={styles["rsw-row"]}>
              <input
                className={styles["rsw-input"]}
                type="text"
                placeholder="Location"
                value={data.location || ""}
                onChange={(e) => update("location", e.target.value)}
              />

              <select
                className={styles["rsw-input"]}
                value={data.propertyType || ""}
                onChange={(e) => update("propertyType", e.target.value)}
              >
                <option value="">Residential or Commercial</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <div className={styles["rsw-row"]}>
              <select
                className={styles["rsw-input"]}
                value={data.paintScope || ""}
                onChange={(e) => update("paintScope", e.target.value)}
              >
                <option value="">What do you want painted?</option>
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
                <option value="both">Interior + Exterior</option>
                <option value="other">Other</option>
              </select>

              <input
                className={styles["rsw-input"]}
                type="number"
                min={0}
                placeholder="Approximate square footage"
                value={data.sqft || ""}
                onChange={(e) => update("sqft", e.target.value)}
              />
            </div>

            <div className={styles["rsw-rowSingle"]}>
              <select
                className={styles["rsw-input"]}
                value={data.colorsSelected || ""}
                onChange={(e) => update("colorsSelected", e.target.value)}
              >
                <option value="">Do you have paint colors selected?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <div className={styles["rsw-actions"]}>
              <Button backgroundColor="var(--c2)" color="white" onClick={prev}>
                Back
              </Button>
              <Button backgroundColor="var(--c2)" color="white" onClick={next}>
                Go to Step 3
              </Button>
            </div>
          </div>
        </div>
      </div>
    <div style={{height: "11rem"}}></div>
    </section>
    </>
  );
}

export default Details;
