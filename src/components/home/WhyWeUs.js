import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    week: "Week 1",
    description:
      "We understand your business, customers, and goals. You get a written scope and a fixed quote — no surprises.",
  },
  {
    number: "02",
    title: "Design & Approval",
    week: "Week 2–3",
    description:
      "We design every key page. You approve before we write a line of code.",
  },
  {
    number: "03",
    title: "Development",
    week: "Week 3–6",
    description:
      "We build. You get weekly demos and a staging link from Day 1.",
  },
  {
    number: "04",
    title: "Launch & Support",
    week: "Week 6+",
    description:
      "We migrate, test, train your team, and stay available for 30 days post-launch.",
  },
];

const WhyWeUs = () => {
  return (
    <div className="home-page-why-we-us-section">
      <div className="container">
        <div className="heading-section">
          <h2 className="main-section-heading">How We Work</h2>
          <p>A clear, predictable process from first call to launch.</p>
        </div>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-3 col-sm-12">
              <div
                className="innerDiv"
                data-aos="fade-up"
                data-aos-duration={1000 + index * 200}
                style={{ position: "relative", paddingTop: "2rem" }}
              >
                <span style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "#000",
                  opacity: 0.07,
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1,
                }}>
                  {step.number}
                </span>
                <div>
                  <p style={{
                    fontSize: "11px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    color: "#999",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    margin: "0 0 4px 0",
                  }}>
                    {step.week}
                  </p>
                  <h5 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, marginBottom: "0.6rem" }}>
                    {step.title}
                  </h5>
                  <p style={{
                    fontSize: "13px",
                    fontFamily: "'Poppins', sans-serif",
                    color: "#555",
                    lineHeight: "20px",
                    margin: 0,
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWeUs;
