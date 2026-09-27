import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Side */}
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">
                Learn Skills.
                <br />
                Build Your Future.
              </h1>

              <p className="lead text-muted mt-3">
                Learn practical skills through online courses and build
                your knowledge with SkillNest.
              </p>

              <a
                href="/courses"
                className="btn btn-primary btn-lg mt-3"
              >
                Explore Courses
              </a>
            </div>

            {/* Right Side */}
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


      {/* Carousel */}
      <section className="py-4">
        <div className="container">

          <div
            id="skillNestCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >

            {/* Carousel Indicators */}
            <div className="carousel-indicators">

              <button
                type="button"
                data-bs-target="#skillNestCarousel"
                data-bs-slide-to="0"
                className="active"
              ></button>

              <button
                type="button"
                data-bs-target="#skillNestCarousel"
                data-bs-slide-to="1"
              ></button>

              <button
                type="button"
                data-bs-target="#skillNestCarousel"
                data-bs-slide-to="2"
              ></button>

            </div>


            {/* Carousel Images */}
            <div className="carousel-inner rounded-4 shadow">

              {/* Slide 1 */}
              <div className="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  className="d-block w-100"
                  alt="Online Learning"
                  style={{
                    height: "350px",
                    objectFit: "cover"
                  }}
                />
              </div>


              {/* Slide 2 */}
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                  className="d-block w-100"
                  alt="Learning Skills"
                  style={{
                    height: "350px",
                    objectFit: "cover"
                  }}
                />
              </div>


              {/* Slide 3 */}
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  className="d-block w-100"
                  alt="Students Learning"
                  style={{
                    height: "350px",
                    objectFit: "cover"
                  }}
                />
              </div>

            </div>


            {/* Previous Button */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#skillNestCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>


            {/* Next Button */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#skillNestCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>

          </div>

        </div>
      </section>


      {/* Popular Courses */}
      <section className="py-5">
        <div className="container">

          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="fw-bold">
              Popular Courses
            </h2>

            <p className="text-muted">
              Explore our popular courses and start learning.
            </p>
          </div>


          {/* Course Cards */}
          <div className="row g-4">

            {/* Web Development */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">

                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  className="card-img-top"
                  alt="Web Development"
                  style={{
                    height: "200px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body">

                  <h5 className="fw-bold">
                    Web Development
                  </h5>

                  <p className="text-muted">
                    Learn HTML, CSS, JavaScript and React.
                  </p>

                  <div className="d-flex justify-content-between">

                    <span>
                      ⭐ 4.8
                    </span>

                    <strong className="text-primary">
                      ₹999
                    </strong>

                  </div>

                </div>

              </div>
            </div>


            {/* Python */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">

                <img
                  src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
                  className="card-img-top"
                  alt="Python Programming"
                  style={{
                    height: "200px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body">

                  <h5 className="fw-bold">
                    Python Programming
                  </h5>

                  <p className="text-muted">
                    Learn Python programming from basics.
                  </p>

                  <div className="d-flex justify-content-between">

                    <span>
                      ⭐ 4.7
                    </span>

                    <strong className="text-primary">
                      ₹799
                    </strong>

                  </div>

                </div>

              </div>
            </div>


            {/* UI/UX */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">

                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5"
                  className="card-img-top"
                  alt="UI UX Design"
                  style={{
                    height: "200px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body">

                  <h5 className="fw-bold">
                    UI/UX Design
                  </h5>

                  <p className="text-muted">
                    Learn modern UI/UX design principles.
                  </p>

                  <div className="d-flex justify-content-between">

                    <span>
                      ⭐ 4.6
                    </span>

                    <strong className="text-primary">
                      ₹699
                    </strong>

                  </div>

                </div>

              </div>
            </div>

          </div>


          {/* View All Courses */}
          <div className="text-center mt-4">

            <a
              href="/courses"
              className="btn btn-outline-primary"
            >
              View All Courses
            </a>

          </div>

        </div>
      </section>


      {/* Footer */}
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

export default Home;