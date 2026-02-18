import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Login.scss";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter valid email!");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    //Login Api Call
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <form onSubmit={handleLogin}>
            <h4 className="login-title">Login</h4>
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit" className="btn login-btn">
              Login
            </button>
            <p className="login-text">
              Not registered yet?{""}{" "}
              <Link to="/signup" className="login-link">
                {" "}
                Create an account{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
