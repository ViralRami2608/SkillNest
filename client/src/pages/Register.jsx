import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setMessage("");
    setError("");

    if (formData.name.trim() === "") {
      setError("Please enter your name.");
      return;
    }

    if (formData.email.trim() === "") {
      setError("Please enter your email.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setMessage("Registration form is valid!");
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
                  Create Account
                </h2>

                <p className="text-muted text-center">
                  Join SkillNest and start learning.
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

                  {/* Name */}
                  <div className="mb-3">
                    <label className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

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
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-3">
                    <label className="form-label">
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mt-2"
                  >
                    Register
                  </button>

                </form>

                <p className="text-center mt-4 mb-0">
                  Already have an account?{" "}
                  <Link to="/login">
                    Login
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

export default Register;