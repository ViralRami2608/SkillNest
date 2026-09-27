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
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    javascript: {
      title: "JavaScript",
      lessons: 20,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
    },
    "python-programming": {
      title: "Python Programming",
      lessons: 22,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
    },
    database: {
      title: "Database",
      lessons: 18,
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d"
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      lessons: 16,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
    },
    "cloud-computing": {
      title: "Cloud Computing",
      lessons: 20,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
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

  const completedLessons = enrollments.reduce(
    (total, enrollment) => total + enrollment.completedLessons,
    0
  );

  const overallProgress =
    enrollments.length > 0
      ? Math.round(
          enrollments.reduce(
            (total, enrollment) => total + enrollment.progress,
            0
          ) / enrollments.length
        )
      : 0;

  return (
    <>
      <Navbar />

      <section className="bg-light py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
            <div>
              <p className="text-primary fw-semibold mb-1">MY DASHBOARD</p>
              <h1 className="fw-bold mb-2">
                Welcome, {user?.name || "Learner"} 👋
              </h1>
              <p className="text-muted mb-0">
                Continue learning and track your progress.
              </p>
            </div>

            <Link
              to="/courses"
              className="btn btn-primary mt-3 mt-md-0"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <p className="text-muted mb-1">Enrolled Courses</p>
                  <h2 className="fw-bold mb-0">{enrollments.length}</h2>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <p className="text-muted mb-1">Completed Lessons</p>
                  <h2 className="fw-bold mb-0">{completedLessons}</h2>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <p className="text-muted mb-1">Overall Progress</p>
                  <h2 className="fw-bold text-primary mb-0">
                    {overallProgress}%
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 pb-5">
        <div className="container">
          <div className="mb-4">
            <h3 className="fw-bold mb-1">My Courses</h3>
            <p className="text-muted">
              Your enrolled courses and learning progress.
            </p>
          </div>

          {loading && (
            <div className="text-center py-5">
              <div className="spinner-border text-primary mb-3"></div>
              <h6 className="text-muted">Loading your courses...</h6>
            </div>
          )}

          {!loading && enrollments.length === 0 && (
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center py-5">
                <h4 className="fw-bold">No Courses Yet</h4>
                <p className="text-muted">
                  Explore SkillNest and enroll in your first course.
                </p>
                <Link to="/courses" className="btn btn-primary px-4">
                  Explore Courses
                </Link>
              </div>
            </div>
          )}

          {!loading && enrollments.length > 0 && (
            <div className="row g-4">
              {enrollments.map((enrollment) => {
                const course = courses[enrollment.courseSlug];

                if (!course) return null;

                return (
                  <div
                    className="col-md-6 col-lg-4"
                    key={enrollment._id}
                  >
                    <div className="card border-0 shadow-sm h-100 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="card-img-top"
                        style={{
                          height: "190px",
                          objectFit: "cover"
                        }}
                      />

                      <div className="card-body p-4">
                        <h5 className="fw-bold mb-2">
                          {course.title}
                        </h5>

                        <p className="text-muted small mb-2">
                          {enrollment.completedLessons} / {course.lessons} lessons completed
                        </p>

                        <div
                          className="progress mb-2"
                          style={{ height: "8px" }}
                        >
                          <div
                            className="progress-bar"
                            style={{
                              width: `${enrollment.progress}%`
                            }}
                          ></div>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                          <small className="text-muted">Progress</small>
                          <small className="fw-bold text-primary">
                            {enrollment.progress}%
                          </small>
                        </div>

                        <Link
                          to={`/learn/${enrollment.courseSlug}`}
                          className="btn btn-primary w-100"
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
      </section>
    </>
  );
}

export default Dashboard;