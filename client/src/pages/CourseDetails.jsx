import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function CourseDetails() {
  const { courseSlug } = useParams();

  const courses = {
    "web-development": {
      title: "Web Development",
      category: "Web Development",
      description:
        "Learn HTML, CSS, JavaScript and React and build modern web applications.",
      rating: "4.8",
      lessons: 25,
      price: "999",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },

    javascript: {
      title: "JavaScript",
      category: "JavaScript",
      description:
        "Learn JavaScript fundamentals and build interactive web applications.",
      rating: "4.7",
      lessons: 20,
      price: "799",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
    },

    "python-programming": {
      title: "Python Programming",
      category: "Python",
      description:
        "Learn Python programming from basics and understand core programming concepts.",
      rating: "4.7",
      lessons: 22,
      price: "799",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
    },

    database: {
      title: "Database",
      category: "Database",
      description:
        "Learn database concepts, SQL and how to manage structured data.",
      rating: "4.6",
      lessons: 18,
      price: "599",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d"
    },

    "ui-ux-design": {
      title: "UI/UX Design",
      category: "UI/UX",
      description:
        "Learn modern UI/UX design principles and create user-friendly interfaces.",
      rating: "4.6",
      lessons: 16,
      price: "699",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5"
    },

    "cloud-computing": {
      title: "Cloud Computing",
      category: "Cloud",
      description:
        "Learn cloud computing concepts and understand modern cloud technologies.",
      rating: "4.5",
      lessons: 20,
      price: "899",
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    }
  };

  const course = courses[courseSlug];

  if (!course) {
    return (
      <>
        <Navbar />

        <div className="container text-center py-5">
          <h2>Course Not Found</h2>

          <Link
            to="/courses"
            className="btn btn-primary mt-3"
          >
            Back to Courses
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <div className="row g-5">

          {/* Course Image */}
          <div className="col-md-6">
            <img
              src={course.image}
              alt={course.title}
              className="img-fluid rounded-4 shadow"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover"
              }}
            />
          </div>

          {/* Course Information */}
          <div className="col-md-6">

            <span className="badge bg-primary mb-3">
              {course.category}
            </span>

            <h1 className="fw-bold">
              {course.title}
            </h1>

            <p className="text-muted mt-3">
              {course.description}
            </p>

            <div className="mb-3">

              <span className="me-3">
                ⭐ {course.rating} Rating
              </span>

              <span className="text-muted">
                {course.lessons} Lessons
              </span>

            </div>

            <h2 className="text-primary fw-bold">
              ₹{course.price}
            </h2>

            <p className="text-muted">
              Level: {course.level}
            </p>

            <Link
              to="/login"
              className="btn btn-primary btn-lg mt-3"
            >
              Enroll Now
            </Link>

          </div>
        </div>

        {/* Course Description */}
        <div className="row mt-5">

          <div className="col-md-8">

            <h3 className="fw-bold">
              About This Course
            </h3>

            <p className="text-muted mt-3">
              {course.description}
            </p>

            <h4 className="fw-bold mt-4">
              What You Will Learn
            </h4>

            <ul className="mt-3">
              <li>Fundamentals and core concepts</li>
              <li>Practical examples</li>
              <li>Hands-on learning</li>
              <li>Building real-world projects</li>
              <li>Understanding modern development techniques</li>
            </ul>

          </div>

        </div>

      </div>
    </>
  );
}

export default CourseDetails;