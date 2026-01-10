"use client";

import React, { useEffect } from "react";
import "./style.css";
import Image from "next/image";
import caseStudiesData from "@/data/caseStudies.json";
import { notFound } from "next/navigation";

const CaseStudyPage = ({ params }) => {
  const [id, setId] = React.useState(null);

  React.useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };
    getParams();
  }, [params]);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    if (id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [id]);

  // Show loading state while id is being resolved
  if (!id) {
    return null; // or a loading spinner
  }

  // Find the project data based on the id
  const project = caseStudiesData.caseStudies.find((item) => item.id === id);

  // If project not found, show Coming Soon page
  if (!project) {
    return (
      <main className="case-studies-page py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="coming-soon-container text-center py-5"
                style={{
                  minHeight: "60vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "5rem", marginBottom: "2rem" }}>🚀</h1>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  Coming Soon
                </h2>

                <a
                  href="/work"
                  style={{
                    padding: "0.75rem 2rem",
                    backgroundColor: "black",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "1px",
                    fontSize: "1rem",
                  }}
                >
                  View Other Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const heroDesktop = project.heroImage?.desktop;
  const heroMobile = project.heroImage?.mobile;

  return (
    <main className="case-studies-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header">
              <span className="w-100">Case Studies</span>
              <h1 className="w-100">
                {project.title}:{project.description}
              </h1>
            </div>

            {heroDesktop && heroMobile && (
              <>
                <Image
                  src={heroDesktop}
                  alt={project.title}
                  width={1920}
                  height={650}
                  className="img-fluid rounded-[2rem] d-none d-md-block"
                  priority
                />
                <Image
                  src={heroMobile}
                  alt={project.title}
                  width={1000}
                  height={800}
                  className="img-fluid rounded-[1rem] d-block d-md-none"
                  priority
                />
              </>
            )}

            <section className="project-overview">
              <div className="row1">
                <div className="col-lg-12 col-sm-12 one">
                  <div className="overview">
                    <h5>
                      <strong>Overview</strong>
                    </h5>
                    <p>
                      <strong>Project:</strong> {project.title}
                    </p>
                    <p>
                      <strong>Industry:</strong> {project.overview.industry}
                    </p>
                    <p>
                      <strong>Services:</strong>{" "}
                      {project.overview.services.join(", ")}
                    </p>
                    <p>
                      <strong>Description:</strong>
                      <br />
                      {project.overview.description}
                    </p>
                  </div>
                  <div className="challenges">
                    <h5>
                      <strong>
                        {project.challenges.title || "Challenges"}
                      </strong>
                    </h5>
                    {project.challenges.painPoints ? (
                      <>
                        <table className="challenges-table">
                          <thead>
                            <tr>
                              <th>Pain Point</th>
                              <th>Impact</th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.challenges.painPoints.map(
                              (item, index) => (
                                <tr key={index}>
                                  <td>{item.painPoint}</td>
                                  <td>{item.impact}</td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                        {project.challenges.summary && (
                          <p className="challenges-summary">
                            {`The brand wasn't struggling with demand —
                            they were struggling with`}{" "}
                            <strong>
                              conversion, trust, and profitability.
                            </strong>
                          </p>
                        )}
                      </>
                    ) : (
                      Array.isArray(project.challenges) &&
                      project.challenges.map((challenge, index) => (
                        <ul key={index} style={{ listStyleType: "disc" }}>
                          <li >
                            {challenge}
                          </li>
                          {/* <p key={index}>{challenge}</p> */}
                        </ul>
                      ))
                    )}
                  </div>
                </div>
              </div>
              <div className="row2 services row">
                <div className="inner-div">
                  <h5>{project.servicesDelivered.title}</h5>
                  {/* <p>{project.servicesDelivered.description}</p> */}
                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "20px",
                      marginTop: "10px",
                    }}
                  >
                    {project.servicesDelivered.description.map((service, index) => (
                      <li
                        key={index}
                        style={{
                          marginBottom: "6px",
                          fontSize: "15px",
                          lineHeight: "1.6",
                        }}
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="result">
                <div className="inner-div">
                  <h5>
                    <strong>{project.result.title || "Result"}</strong>
                  </h5>
                  {project.result.subtitle && (
                    <p className="result-subtitle">{project.result.subtitle}</p>
                  )}

                  {project.result.metricsTable ? (
                    <>
                      <table className="results-table">
                        <thead>
                          <tr>
                            <th>Metric</th>
                            <th>Before</th>
                            <th>After</th>
                            <th>Change</th>
                          </tr>
                        </thead>
                        <tbody>
                          {project.result.metricsTable.map((item, index) => (
                            <tr key={index}>
                              <td>{item.metric}</td>
                              <td>{item.before}</td>
                              <td>{item.after}</td>
                              <td className="change-cell">
                                <span className="change-badge">
                                  📈 {item.change}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {project.result.summary && (
                        <div className="result-summary">
                          {project.result.summary.map((item, index) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      )}
                    </>
                  ) : project.result.metrics ? (
                    <>
                      <p>{project.result.description}</p>
                      <div className="metrics">
                        {project.result.metrics.map((metric, index) => (
                          <p key={index}>
                            <strong>✓</strong> {metric}
                          </p>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p>{project.result.description}</p>
                  )}
                </div>
                <div className="image-div">
                  {project.result.images && project.result.images.length > 0 ? (
                    project.result.images.map((image, index) =>
                      image ? (
                        <Image
                          key={index}
                          src={image}
                          alt={`${project.title} result ${index + 1}`}
                          width={400}
                          height={400}
                          className="img-fluid"
                        />
                      ) : null
                    )
                  ) : (
                    <p>No image present</p>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyPage;
