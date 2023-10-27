import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import "./signup.css";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState();
  const [email, setemail] = useState();

  const [password, setpassword] = useState();

  const handlesumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/register", {
        name,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <div className="signup-heading"></div>
            <form
              className="register-form"
              id="register-form"
              onSubmit={handlesumbit}
            >
              <div>
                <label htmlFor="name" />
                <PersonIcon />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  id="name"
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" />
                <EmailIcon />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="password" />
                <PasswordIcon />
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  id="password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </div>

              <div className="form-button">
                <input
                  type="submit"
                  id="signup"
                  className="form-button"
                  name="signup"
                  value="Register"
                />
              </div>
            </form>
            <div className="signup-image">
              <figure>
                <img
                  src="https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="pic"
                  id="pic"
                />

                <NavLink to="/login" className="alreadysignup">
                  {" "}
                  Already signed up
                </NavLink>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
