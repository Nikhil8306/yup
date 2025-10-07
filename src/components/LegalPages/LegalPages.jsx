import "./LegalPages.css";

const PolicyDocument = ({ data }) => {
  return (
    <div className="policy-doc-container">
      <article className="policy-doc-content">
        <h1 className="policy-doc-title">{data.title}</h1>

        <p className="policy-doc-date">Last Updated: {data.lastUpdated}</p>

        <p className="policy-doc-introduction">{data.introduction}</p>

        <div className="policy-doc-sections">
          {data.sections.map((section, index) => (
            <section key={index} className="policy-doc-section">
              <h2 className="policy-doc-section-title">
                {index + 1}. {section.title}
              </h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="policy-doc-paragraph">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
};

export default PolicyDocument;
