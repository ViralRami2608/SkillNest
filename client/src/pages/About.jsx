import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h1 className="fw-bold">
                About SkillNest
              </h1>

              <p className="text-muted mt-3">
                SkillNest is an online learning platform designed
                to help learners develop practical skills through
                structured online courses.
              </p>

              <p className="text-muted">
                Explore courses, enroll in your favorite subjects,
                complete lessons and track your learning progress
                from your personal dashboard.
              </p>
            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Students learning"
                className="img-fluid rounded-4 shadow"
                style={{
                  height: "350px",
                  width: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

          </div>
        </div>
      </section>


      <section className="py-5">
        <div className="container">

          <h2 className="fw-bold text-center mb-4">
            What SkillNest Offers
          </h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">

                  <h4>📚 Online Courses</h4>

                  <p className="text-muted">
                    Explore courses covering different
                    technology and professional skills.
                  </p>

                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">

                  <h4>🎯 Structured Learning</h4>

                  <p className="text-muted">
                    Learn through organized lessons and
                    practical learning content.
                  </p>

                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">

                  <h4>📊 Track Progress</h4>

                  <p className="text-muted">
                    Monitor completed lessons and your
                    overall course progress.
                  </p>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      <footer className="bg-dark text-white py-4">
        <div className="container text-center">

          <h5 className="fw-bold">
            Skill<span className="text-primary">Nest</span>
          </h5>

          <p className="text-secondary mb-1">
            Learn Skills. Build Your Future.
          </p>

          <small className="text-secondary">
            © 2026 SkillNest. All rights reserved.
          </small>

        </div>
      </footer>
    </>
  );
}

export default About;