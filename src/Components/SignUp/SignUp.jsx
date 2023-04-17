import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
    if (password !== confirm) {
      setError("your password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be longer than 6 characters");
      return;
    }
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <button className="btn-submit" type="submit" value="Sign Up">
          Sign Up
        </button>
      </form>
      <p>
        <small>
          Already have an account?<Link to="/login">Login</Link>{" "}
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;