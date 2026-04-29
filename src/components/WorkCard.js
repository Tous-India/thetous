import Image from "next/image";
import Link from "next/link";

const WorkCard = ({ item }) => {
  if (!item.image) return null;

  const cardContent = (
    <div className="work-card-inner">
      <div className="img-div">
        <Image
          src={item.image}
          alt={item.title}
          className="img-fluid"
          width={600}
          height={400}
        />
      </div>
      <div className="work-card-body">
        {item.projectType && (
          <span className="project-type">{item.projectType}</span>
        )}
        <h3 className="title">{item.title}</h3>
        <p className="desc">{item.desc}</p>
        <span className="learn-more">View Case Study →</span>
      </div>
    </div>
  );

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 work-card">
      <Link href={`/case-studies/${item.id}`}>{cardContent}</Link>
    </div>
  );
};

export default WorkCard;
