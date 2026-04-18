import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const WorkCard = ({ item }) => {

  if (!item.image) {
    return null;
  }

  const disabledLinks = ['tarc', 'ska-orion'];
  const isLinkDisabled = disabledLinks.includes(item.id);

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
      <div className="work-tags">
        {item.tags.map((tag, i) => (
          <span key={i} className="span">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="title">{item.title}</h3>
      <p className="desc">{item.desc}</p>
    </div>
  );

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 work-card">
      {isLinkDisabled ? (
        cardContent
      ) : (
        <Link href={`/case-studies/${item.id}`}>
          {cardContent}
        </Link>
      )}
    </div>
  );
};

export default WorkCard;
