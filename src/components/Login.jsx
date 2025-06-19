/*import React, { useState } from "react";
import "../App.css";

function Login({ onSignUpClick }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!phone || !password) {
      alert("Please enter phone and password!");
      return;
    }
    alert(`Logged in with Phone: ${phone}`);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
           <img
            src="my-react-app/ful2win.png"
            alt="Ful2Win Logo"
            className="logo"
          />


          <p className="slogan">
            <span style={{ color: "yellow" }}>Entertainment.</span>{" "}
            <span style={{ color: "skyblue" }}>Earning.</span>{" "}
            <span style={{ color: "red" }}>Fame</span>
          </p>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Hello Again!</h2>
          <p>Login to continue</p>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" type="submit">LOGIN</button>
          <div className="checkbox">
            <input type="checkbox" />
            <span>
              I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
            </span>
          </div>
          <p className="signup">
            Don’t have an account?{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); onSignUpClick(); }}>
              SignUp
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;  */

import React, { useState } from "react";
import "../App.css";

function Login({ onSignUpClick }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!phone || !password) {
      alert("Please enter phone and password!");
      return;
    }
    alert(`Logged in with Phone: ${phone}`);
  };

  return (
    <div className="login-container login-page">
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
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Hello Again!</h2>
          <p className="form-subtext">Login to continue</p>
          <label className="input-label">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className="input-label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" type="submit">LOGIN</button>
          <div className="checkbox">
            <input type="checkbox" id="login-terms" />
            <span>
              I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
            </span>
          </div>
          <p className="signup">
            Don’t have an account?{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); onSignUpClick(); }}>
              SignUp
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

