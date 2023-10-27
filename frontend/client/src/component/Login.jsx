import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/Login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          console.log("login success");
          navigate("/home"); // Redirect to "/home"
        }
      });
  };

  return (
    <form className="container" onSubmit={handleSumbit}>
      <label htmlFor="email" />
      <input
        type="text"
        className="email"
        id="email"
        name="email"
        placeholder="enter your email"
        onChange={(e) => setemail(e.target.value)}
      />
      <label htmlFor="password" />

      <input
        name="password"
        placeholder="enter your password"
        className="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <input
        type="submit"
        id="signup"
        className="form-button"
        name="signup"
        value="Login"
      />
    </form>
  );
};

export default Login;
