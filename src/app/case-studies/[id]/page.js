"use client";

import React, { useEffect } from "react";
import "./style.css";
import Image from "next/image";
import caseStudiesData from "@/data/caseStudies.json";
import { notFound } from "next/navigation";

/* ================= IMAGES ================= */
import prozvofit from "../../../../public/home/work/1726132161.webp";
import silvago from "../../../../public/home/work/1731492367.webp";
import luxeliv from "../../../../public/home/work/1731492385.webp";
import executive from "../../../../public/work/executive.webp";
import ohmypet from "../../../../public/work/ohmypet.webp";
import dhirsons from "../../../../public/work/dhirsons.webp";
import crossraod from "../../../../public/home/work/1731492317.webp";

const imageMap = {
  "/home/work/1726132161.webp": prozvofit,
  "/home/work/1731492367.webp": silvago,
  "/home/work/1731492385.webp": luxeliv,
  "/work/executive.webp": executive,
  "/work/ohmypet.webp": ohmypet,
  "/work/dhirsons.webp": dhirsons,
  "/home/work/1731492317.webp": crossraod,
};

const CaseStudyPage = ({ params }) => {
  const { id } = React.use(params);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

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

  const projectImage = imageMap[project.image];

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

            <picture className="">
              <source
                media="(min-width: 601px)"
                srcSet={project.heroImage.desktop}
              />
              <source
                media="(max-width: 600px)"
                srcSet={project.heroImage.mobile}
              />
              <Image
                alt={project.title}
                width={1920}
                height={600}
                src={projectImage}
                className="img-fluid"
              />
            </picture>

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
                            {`The brand wasn't struggling with <em>demand</em> —
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
                        <p key={index}>{challenge}</p>
                      ))
                    )}
                  </div>
                </div>
              </div>
              <div className="row2 services row">
                <div className="inner-div">
                  <h5>{project.servicesDelivered.title}</h5>
                  <p>{project.servicesDelivered.description}</p>
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
                    project.result.images.map((image, index) => (
                      <Image
                        src={image}
                        key={index}
                        alt={`${project.title} result ${index + 1}`}
                        width={400}
                        height={400}
                        className="img-fluid"
                      />
                    ))
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
