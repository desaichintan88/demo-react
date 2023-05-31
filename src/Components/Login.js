import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/style.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPass] = useState();
  const navigate = useNavigate();

  const onLog = () => {
    const fData = JSON.parse(localStorage.getItem("formData"));

    if (email === fData.email || password === fData.password) {
      localStorage.setItem("isLogin", true);
      navigate("/productlist");
    } else {
      alert("Your inputs are incorrect or you are ot registered.");
    }
  };
  return (
    <form
      className="setInput"
      onSubmit={onLog}
      style={{
        border: "1px solid",
        width: "350px",
        marginTop: "80px",
        marginLeft: "380px",
        padding: "25px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.359)",
      }}>
      <h1>Login</h1>
      <div>
        <input
          className="inputs"
          type="text"
          placeholder="Type user name"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          className="inputs"
          type="password"
          password="password"
          placeholder="Type password"
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <button className="button1" type="submit">
        Login
      </button>
      <br />
      <br />
      <span className="span">
        If you are new user?
        <Link style={{ textDecoration: "none" }} to={"/register"}>
          <span> Register yourself.</span>
        </Link>
      </span>
    </form>
  );
}

export default Login;
