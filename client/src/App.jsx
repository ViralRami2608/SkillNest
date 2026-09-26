import Navbar from "./components/Navbar"
import CourseCard from "./components/CourseCard"

function App() {

  const courses = [
    {
      title: "Web Development",
      rating: "4.8",
      price: "999",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Python Programming",
      rating: "4.7",
      price: "799",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
    },
    {
      title: "UI/UX Design",
      rating: "4.6",
      price: "699",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
    }
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h1 className="display-4 fw-bold">
                Learn Skills.
                <br />
                Build Your Future.
              </h1>

              <p className="lead mt-3">
                Learn from practical online courses and
                build real-world skills.
              </p>

              <button className="btn btn-primary btn-lg mt-2">
                Explore Courses
              </button>

            </div>

            <div className="col-md-6 text-center">

              <div className="p-5">
                <h2>🎓</h2>
                <h3>Start Learning Today</h3>
                <p>
                  Upgrade your skills with SkillNest.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Popular Courses */}

      <section className="py-5">

        <div className="container">

          <h2 className="text-center fw-bold mb-4">
            Popular Courses
          </h2>

          <div className="row g-4">

            {courses.map((course, index) => (
              <div className="col-md-4" key={index}>

                <CourseCard
                  title={course.title}
                  rating={course.rating}
                  price={course.price}
                  image={course.image}
                />

              </div>
            ))}

          </div>

        </div>

      </section>

    </>
  )
}

export default App