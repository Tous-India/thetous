import Image from "next/image";
import Link from "next/link";

const WorkCard = ({ item }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 work-card">
      <Link href="#">
        <div className="work-card-inner">
          <div className="img-div">
            <Image
              src={item.image}
              alt={item.title}
              className="img-fluid"
              placeholder="blur"
            />
          </div>

          <h3 className="title">{item.title}</h3>
          <p className="desc">{item.desc}</p>

          <div className="work-tags">
            {item.tags.map((tag, i) => (
              <span key={i} className="span">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkCard;
