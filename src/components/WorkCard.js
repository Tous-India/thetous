import Image from "next/image";
import Link from "next/link";
import caseStudiesData from "@/data/caseStudies.json";

const CASE_STUDY_IDS = new Set(
  caseStudiesData.caseStudies.map((s) => s.id)
);

const WorkCard = ({ item }) => {
  const hasCaseStudy = CASE_STUDY_IDS.has(item.id);

  const cardContent = (
    <div className="work-card-inner">
      <div className="img-div">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            className="img-fluid"
            width={600}
            height={400}
          />
        ) : (
          <div className="work-card-no-img" />
        )}
      </div>
      <div className="work-card-body">
        {item.badge && <span className="work-card-badge">{item.badge}</span>}
        {item.projectType && (
          <span className="project-type">{item.projectType}</span>
        )}
        <h3 className="title">{item.title}</h3>
        <p className="desc">{item.desc}</p>
        {hasCaseStudy && (
          <span className="learn-more">View Case Study →</span>
        )}
      </div>
    </div>
  );

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 work-card">
      {hasCaseStudy ? (
        <Link href={`/case-studies/${item.id}`}>{cardContent}</Link>
      ) : (
        <div className="work-card-static">{cardContent}</div>
      )}
    </div>
  );
};

export default WorkCard;
