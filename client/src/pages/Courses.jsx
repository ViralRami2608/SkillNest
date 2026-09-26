import { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

function Courses() {

  const courses = [
    {
      title: "Web Development",
      category: "Web Development",
      level: "Beginner",
      rating: "4.8",
      price: "999",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "JavaScript",
      category: "JavaScript",
      level: "Intermediate",
      rating: "4.7",
      price: "799",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
    },
    {
      title: "Python Programming",
      category: "Python",
      level: "Beginner",
      rating: "4.7",
      price: "799",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
    },
    {
      title: "Database",
      category: "Database",
      level: "Intermediate",
      rating: "4.6",
      price: "599",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d"
    },
    {
      title: "UI/UX Design",
      category: "UI/UX",
      level: "Beginner",
      rating: "4.6",
      price: "699",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
    },
    {
      title: "Cloud Computing",
      category: "Cloud",
      level: "Advanced",
      rating: "4.5",
      price: "899",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    }
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");

  const filteredCourses = courses.filter((course) => {

    const searchMatch =
      course.title.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || course.category === category;

    const levelMatch =
      level === "All" || course.level === level;

    return searchMatch && categoryMatch && levelMatch;
  });

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <h1 className="fw-bold text-center mb-4">
          Explore Courses
        </h1>

        {/* Search */}

        <div className="row g-3 mb-4">

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Category */}

          <div className="col-md-3">

            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Web Development">Web Development</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Database">Database</option>
              <option value="UI/UX">UI/UX Design</option>
              <option value="Cloud">Cloud Computing</option>
            </select>

          </div>

          {/* Level */}

          <div className="col-md-3">

            <select
              className="form-select"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

          </div>

        </div>

        {/* Course Cards */}

        <div className="row g-4">

          {filteredCourses.length > 0 ? (

            filteredCourses.map((course, index) => (

              <div className="col-md-4" key={index}>

                <CourseCard
                  title={course.title}
                  rating={course.rating}
                  price={course.price}
                  image={course.image}
                />

              </div>

            ))

          ) : (

            <div className="text-center py-5">
              <h4>No courses found</h4>
              <p>Try another search or category.</p>
            </div>

          )}

        </div>

      </div>
    </>
  );
}

export default Courses;