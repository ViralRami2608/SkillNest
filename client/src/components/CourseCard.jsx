import { Link } from "react-router-dom";

function CourseCard({ title, rating, price, image }) {
  const courseSlug = title
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <div className="card h-100 shadow-sm border-0">

      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{
          height: "180px",
          objectFit: "cover"
        }}
      />

      <div className="card-body">

        <h5 className="card-title">
          {title}
        </h5>

        <p className="mb-2">
          ⭐ {rating}
        </p>

        <h5 className="text-primary">
          ₹{price}
        </h5>

        <Link
          to={`/course-details/${courseSlug}`}
          className="btn btn-primary w-100 mt-2"
        >
          View Course
        </Link>

      </div>
    </div>
  );
}

export default CourseCard;