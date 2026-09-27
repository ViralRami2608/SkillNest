import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setMessage("");

    if (formData.email.trim() === "") {
      setError("Please enter your email.");
      return;
    }

    if (formData.password.trim() === "") {
      setError("Please enter your password.");
      return;
    }

    setMessage("Login form is valid!");
  }

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div className="row justify-content-center">

          <div className="col-md-6 col-lg-5">

            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body p-4 p-md-5">

                <h2 className="fw-bold text-center">
                  Welcome Back
                </h2>

                <p className="text-muted text-center">
                  Login to continue learning.
                </p>

                {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )}

                {message && (
                  <div className="alert alert-success">
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-4">

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label">
                      Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 mt-2"
                  >
                    Login
                  </button>

                </form>

                <p className="text-center mt-4 mb-0">
                  Don't have an account?{" "}
                  <Link to="/register">
                    Register
                  </Link>
                </p>

              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Login;