import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD

const WorkCard = ({ item }) => {
=======
import { useEffect } from "react";

const WorkCard = ({ item }) => {

>>>>>>> 81ec84421aadbf8c2aff897f020e2acbc9cded1c
  if (!item.image) {
    return null;
  }

  const disabledLinks = ['tarc', 'ska-orion'];
  const isLinkDisabled = disabledLinks.includes(item.id);

<<<<<<< HEAD
  // If link is disabled, render without Link
  if (isLinkDisabled) {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 work-card">
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
      </div>
    );
  }

  // Normal card with link
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 work-card">
      <Link href={`/case-studies/${item.id}`}>
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
      </Link>
=======
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
>>>>>>> 81ec84421aadbf8c2aff897f020e2acbc9cded1c
    </div>
  );
};

<<<<<<< HEAD
export default WorkCard;
=======
export default WorkCard;
>>>>>>> 81ec84421aadbf8c2aff897f020e2acbc9cded1c
