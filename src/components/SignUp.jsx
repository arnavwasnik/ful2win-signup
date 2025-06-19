import React, { useState } from "react";
import "../App.css";

function SignUp({ onBackToLogin }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.password || !form.confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!form.agree) {
      alert("Please agree to the terms.");
      return;
    }
    alert("Account created successfully!");
    onBackToLogin();
  };

  return (
    <div className="login-container signup-page">
      <div className="login-card">
        <div className="login-header">

          <div className="header-bubbles">
            <div className="header-bubble header-bubble1"></div>
            <div className="header-bubble header-bubble2"></div>
            <div className="header-bubble header-bubble3"></div>
            <div className="header-bubble header-bubble4"></div>
            <div className="header-bubble header-bubble5"></div>
          </div>

          <img
            src="/ful2win.png"
            alt="Ful2Win Logo"
            className="logo"
          />
          <p className="slogan">
            <span className="yellow">Entertainment.</span>
            <span className="blue">Earning.</span>
            <span className="red">Fame</span>
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome!</h2>
          <p className="form-subtext">Sign up to continue</p>

          <label className="input-label">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />

          <label className="input-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
          />

          <label className="input-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
          />

          <label className="input-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter your confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit" className="login-btn">SIGN UP</button>

          <div className="checkbox">
            <input
              type="checkbox"
              name="agree"
              id="signup-terms"
              checked={form.agree}
              onChange={handleChange}
            />
            <span>
              I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
            </span>
          </div>

          <p className="signup">
            Already have an account?{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); onBackToLogin(); }}>
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
