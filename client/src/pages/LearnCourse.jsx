import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function LearnCourse() {
  const { courseSlug } = useParams();

  const user = JSON.parse(localStorage.getItem("user"));

  const [enrollment, setEnrollment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completing, setCompleting] = useState(false);
  const [error, setError] = useState("");

  const courses = {
    "web-development": {
      title: "Web Development",
      lessons: [
        "HTML Fundamentals",
        "CSS Fundamentals",
        "JavaScript Basics",
        "DOM Manipulation",
        "React Introduction"
      ]
    },

    javascript: {
      title: "JavaScript",
      lessons: [
        "JavaScript Variables",
        "Functions",
        "Arrays",
        "Objects",
        "DOM Manipulation"
      ]
    },

    "python-programming": {
      title: "Python Programming",
      lessons: [
        "Python Basics",
        "Variables and Data Types",
        "Conditions",
        "Loops",
        "Functions"
      ]
    },

    database: {
      title: "Database",
      lessons: [
        "Database Introduction",
        "SQL Basics",
        "SELECT Queries",
        "INSERT and UPDATE",
        "Database Relationships"
      ]
    },

    "ui-ux-design": {
      title: "UI/UX Design",
      lessons: [
        "UI/UX Introduction",
        "Design Principles",
        "Wireframing",
        "Prototyping",
        "User Experience"
      ]
    },

    "cloud-computing": {
      title: "Cloud Computing",
      lessons: [
        "Cloud Introduction",
        "Cloud Service Models",
        "Virtual Machines",
        "Cloud Storage",
        "Cloud Security"
      ]
    }
  };

  const course = courses[courseSlug];


  useEffect(() => {
    if (!user) {
      return;
    }

    fetchEnrollment();
  }, []);


  async function fetchEnrollment() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/enrollments/${user.id}`
      );

      const data = await response.json();

      if (!response.ok) {
        setError("Unable to load course.");
        return;
      }

      const currentEnrollment = data.find(
        (item) => item.courseSlug === courseSlug
      );

      if (!currentEnrollment) {
        setError("You are not enrolled in this course.");
        return;
      }

      setEnrollment(currentEnrollment);

    } catch (error) {
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  }


  async function completeLesson() {
    if (!enrollment) {
      return;
    }

    if (enrollment.completedLessons >= course.lessons.length) {
      return;
    }

    try {
      setCompleting(true);

      const nextCompleted =
        enrollment.completedLessons + 1;

      const progress = Math.round(
        (nextCompleted / course.lessons.length) * 100
      );

      const response = await fetch(
        `http://localhost:5000/api/enrollments/${enrollment._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            completedLessons: nextCompleted,
            progress: progress
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to update progress.");
        return;
      }

      setEnrollment(data.enrollment);

    } catch (error) {
      setError("Unable to connect to the server.");
    } finally {
      setCompleting(false);
    }
  }


  if (!course) {
    return (
      <>
        <Navbar />

        <div className="container text-center py-5">
          <h2>Course Not Found</h2>

          <Link
            to="/dashboard"
            className="btn btn-primary mt-3"
          >
            Back to Dashboard
          </Link>
        </div>
      </>
    );
  }


  if (loading) {
    return (
      <>
        <Navbar />

        <div className="container text-center py-5">
          <h4>Loading course...</h4>
        </div>
      </>
    );
  }


  if (error) {
    return (
      <>
        <Navbar />

        <div className="container text-center py-5">

          <div className="alert alert-danger">
            {error}
          </div>

          <Link
            to="/dashboard"
            className="btn btn-primary"
          >
            Back to Dashboard
          </Link>

        </div>
      </>
    );
  }


  const completedLessons = enrollment.completedLessons;

  const currentLesson =
    completedLessons < course.lessons.length
      ? course.lessons[completedLessons]
      : "Course Completed";


  return (
    <>
      <Navbar />

      <div className="container py-5">

        {/* Course Header */}

        <div className="mb-4">

          <Link
            to="/dashboard"
            className="text-decoration-none"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="fw-bold mt-3">
            {course.title}
          </h1>

          <p className="text-muted">
            Continue your learning journey.
          </p>

        </div>


        {/* Progress */}

        <div className="card border-0 shadow-sm mb-4">

          <div className="card-body">

            <div className="d-flex justify-content-between mb-2">

              <strong>
                Course Progress
              </strong>

              <strong className="text-primary">
                {enrollment.progress}%
              </strong>

            </div>


            <div className="progress">

              <div
                className="progress-bar"
                style={{
                  width: `${enrollment.progress}%`
                }}
              >
              </div>

            </div>

          </div>

        </div>


        <div className="row g-4">

          {/* Lesson List */}

          <div className="col-md-5">

            <div className="card border-0 shadow-sm">

              <div className="card-body">

                <h4 className="fw-bold mb-3">
                  Course Lessons
                </h4>


                {course.lessons.map(
                  (lesson, index) => {

                    const completed =
                      index < completedLessons;

                    const current =
                      index === completedLessons;

                    return (
                      <div
                        key={index}
                        className={`border rounded p-3 mb-2 ${
                          current
                            ? "border-primary"
                            : ""
                        }`}
                      >

                        <div className="d-flex align-items-center">

                          <span className="me-3">

                            {completed
                              ? "✅"
                              : current
                              ? "▶️"
                              : "🔒"}

                          </span>

                          <div>

                            <strong>
                              Lesson {index + 1}
                            </strong>

                            <div className="text-muted">
                              {lesson}
                            </div>

                          </div>

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

          </div>


          {/* Current Lesson */}

          <div className="col-md-7">

            <div className="card border-0 shadow-sm">

              <div className="card-body p-4">

                <h3 className="fw-bold">
                  {currentLesson}
                </h3>

                {completedLessons <
                course.lessons.length ? (
                  <>
                    <div
                      className="bg-dark rounded-3 d-flex align-items-center justify-content-center my-4"
                      style={{ height: "300px" }}
                    >
                      <div className="text-white text-center">
                        <h1>▶</h1>
                        <p className="mb-0">
                          Course Video
                        </p>
                      </div>
                    </div>

                    <p className="text-muted">
                      Complete this lesson and
                      continue to the next lesson.
                    </p>

                    <button
                      className="btn btn-primary"
                      onClick={completeLesson}
                      disabled={completing}
                    >
                      {completing
                        ? "Updating..."
                        : "Mark Lesson Complete"}
                    </button>
                  </>
                ) : (
                  <div className="alert alert-success mt-4">
                     Congratulations! You have
                    completed this course.
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default LearnCourse;