import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`container ${active ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <button className="icons">
              <i className="bx bxl-google"></i>
            </button>
            <button className="icons">
              <i className="bx bxl-facebook"></i>
            </button>
            <button className="icons">
              <i className="bx bxl-github"></i>
            </button>
            <button className="icons">
              <i className="bx bxl-linkedin"></i>
            </button>
          </div>
          <span>Register with E-mail</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Enter E-mail" />
          <input type="password" placeholder="Enter Password" />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <button className="icons">
              <i className="bx bxl-google"></i>
            </button>
            <button className="icons">
              <i className="bx bxl-facebook"></i>
            </button>
            <button className="icons">
              <i className="bx bxl-github"></i>
            </button>
            <button className="icons">
              <i className="bx bxl-linkedin"></i>
            </button>
          </div>
          <span>Login With Email & Password</span>
          <input type="email" placeholder="Enter E-mail" />
          <input type="password" placeholder="Enter Password" />
          <button className="forget-password-button">Forget Password?</button>
          <button>Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>
              Welcome To <br />
              TechSolutions
            </h1>
            <p>Sign in With ID & Password</p>
            <button
              className="hidden"
              id="login"
              onClick={() => setActive(false)}
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hii Coder's</h1>
            <p>Join "Code With TechSolutions" to Improve Your Coding Skills</p>
            <button
              className="hidden"
              id="register"
              onClick={() => setActive(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
