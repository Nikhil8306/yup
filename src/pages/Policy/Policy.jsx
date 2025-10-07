import Heading from "../../components/Heading";


function Policy(data) {
    return <>
        <PrivacyPolicy {...data.data}/>
    </>
}

function PrivacyPolicy({
    title,
    lastupdated,
    intro,
    sections,
}) {


    return (
        <main className={styles["pp-container"]} role="main" aria-label={title}>
        <header >
            <Heading >{title}</Heading>
            <p className={styles["pp-updated"]}>
                Last updated : {lastupdated}
            </p>
        </header>

      {intro && <p className={styles["pp-body"]}>{intro}</p>}

      {sections.map((section, idx) => (
          <section className={styles["pp-section"]} key={`${section.title}-${idx}`}>
          <h2 className={styles["pp-section-title"]}>{section.title}</h2>

          {section.paragraphs?.map((para, pIdx) => (
              <p className={styles["pp-body"]} key={`p-${pIdx}`}>
              {para}
            </p>
          ))}

          {section.items?.map((item, iIdx) => (
              <p className={styles["pp-body"]} key={`i-${iIdx}`}>
              {item.label ? <strong className={styles["pp-strong"]}>{item.label}: </strong> : null}
              {item.text}
            </p>
          ))}
        </section>
      ))}
    </main>
  )
}

import styles from "./Policy.module.css";


export default Policy;