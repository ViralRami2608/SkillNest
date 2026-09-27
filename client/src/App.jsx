import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route
          path="/course-details/:courseSlug"
          element={<CourseDetails />}
        />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;