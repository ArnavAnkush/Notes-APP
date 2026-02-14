import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./SignUp.scss";
import { validateEmail } from "../../utils/helper";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter valid email address!");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    // SignUp API Call
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <form onSubmit={handleSignUp}>
            <h4 className="title">SignUp</h4>

            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <button type="submit" className="btn">
              Create Account
            </button>
            <p className="login-text">
              Already have an account?{""}{" "}
              <Link to="/login" className="login-link">
                {" "}
                Login{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
