import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  const courses = {
    "web-development": {
      title: "Web Development",
      lessons: 25,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },

    javascript: {
      title: "JavaScript",
      lessons: 20,
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
    },

    "python-programming": {
      title: "Python Programming",
      lessons: 22,
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
    },

    database: {
      title: "Database",
      lessons: 18,
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d"
    },

    "ui-ux-design": {
      title: "UI/UX Design",
      lessons: 16,
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5"
    },

    "cloud-computing": {
      title: "Cloud Computing",
      lessons: 20,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    }
  };


  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetchEnrollments();
  }, []);


  async function fetchEnrollments() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/enrollments/${user.id}`
      );

      const data = await response.json();

      if (response.ok) {
        setEnrollments(data);
      }

    } catch (error) {
      console.error("Error fetching enrollments:", error);
    } finally {
      setLoading(false);
    }
  }


  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }


  const completedLessons = enrollments.reduce(
    (total, enrollment) =>
      total + enrollment.completedLessons,
    0
  );


  const overallProgress =
    enrollments.length > 0
      ? Math.round(
          enrollments.reduce(
            (total, enrollment) =>
              total + enrollment.progress,
            0
          ) / enrollments.length
        )
      : 0;


  return (
    <>
      <Navbar />

      <div className="container py-5">

        {/* Header */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>

            <h1 className="fw-bold">
              Welcome, {user?.name || "Learner"} 👋
            </h1>

            <p className="text-muted mb-0">
              Continue learning and track your progress.
            </p>

          </div>


          <button
            className="btn btn-outline-danger"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>


        {/* Statistics */}

        <div className="row g-4 mb-5">

          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body">

                <h6 className="text-muted">
                  Enrolled Courses
                </h6>

                <h2 className="fw-bold">
                  {enrollments.length}
                </h2>

              </div>

            </div>

          </div>


          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body">

                <h6 className="text-muted">
                  Completed Lessons
                </h6>

                <h2 className="fw-bold">
                  {completedLessons}
                </h2>

              </div>

            </div>

          </div>


          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body">

                <h6 className="text-muted">
                  Overall Progress
                </h6>

                <h2 className="fw-bold text-primary">
                  {overallProgress}%
                </h2>

              </div>

            </div>

          </div>

        </div>


        {/* My Courses */}

        <div className="mb-4">

          <h3 className="fw-bold">
            My Courses
          </h3>

          <p className="text-muted">
            Your enrolled courses and learning progress.
          </p>

        </div>


        {/* Loading */}

        {loading && (
          <div className="text-center py-5">
            <h5>Loading your courses...</h5>
          </div>
        )}


        {/* No Courses */}

        {!loading && enrollments.length === 0 && (

          <div className="card border-0 shadow-sm">

            <div className="card-body text-center py-5">

              <h4 className="fw-bold">
                No Courses Yet
              </h4>

              <p className="text-muted">
                Explore SkillNest and enroll in your first course.
              </p>

              <Link
                to="/courses"
                className="btn btn-primary"
              >
                Explore Courses
              </Link>

            </div>

          </div>

        )}


        {/* Enrolled Courses */}

        {!loading && enrollments.length > 0 && (

          <div className="row g-4">

            {enrollments.map((enrollment) => {

              const course =
                courses[enrollment.courseSlug];

              if (!course) {
                return null;
              }

              return (

                <div
                  className="col-md-6 col-lg-4"
                  key={enrollment._id}
                >

                  <div className="card border-0 shadow-sm h-100">

                    <img
                      src={course.image}
                      alt={course.title}
                      className="card-img-top"
                      style={{
                        height: "180px",
                        objectFit: "cover"
                      }}
                    />


                    <div className="card-body">

                      <h5 className="fw-bold">
                        {course.title}
                      </h5>


                      <p className="text-muted mb-2">
                        {enrollment.completedLessons} /{" "}
                        {course.lessons} lessons completed
                      </p>


                      <div className="progress mb-2">

                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: `${enrollment.progress}%`
                          }}
                        >
                          {enrollment.progress}%
                        </div>

                      </div>


                      <Link
                        to={`/learn/${enrollment.courseSlug}`}
                        className="btn btn-primary w-100 mt-2"
                      >
                        Continue Learning
                      </Link>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        )}

      </div>
    </>
  );
}

export default Dashboard;