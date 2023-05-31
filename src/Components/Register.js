import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/style.css";

const Register = () => {
  const [email, setEmail] = useState();
  const [contact, setNum] = useState();
  const [address, setAddress] = useState();
  const [pass, setPass] = useState();
  const [repass, setRepass] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const FormData = {
    email: email,
    contact: contact,
    address: address,
    pass: pass,
  };

  const onHandleSubmitForm = () => {
    localStorage.setItem("formData", JSON.stringify(FormData));
    navigate("/");
  };

  return (
    <div>
      <form
        onSubmit={onHandleSubmitForm}
        style={{
          border: "1px solid",
          width: "350px",
          marginTop: "80px",
          marginLeft: "380px",
          padding: "25px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.359)",
        }}>
        <h1>Register</h1>
        <div>
          <input
            className="inputs"
            type="text"
            placeholder="Type your email-id"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="inputs"
            type="number"
            placeholder="Type your contact number"
            onChange={(e) => setNum(e.target.value)}
          />
        </div>
        <div>
          <input
            className="inputs"
            type="password"
            placeholder="Type password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div>
          <input
            className="inputs"
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setRepass(e.target.value)}
          />
        </div>
        <div>
          <textarea
            className="inputs"
            placeholder="Type your address"
            onChange={(e) => setAddress(e.target.value)}></textarea>
        </div>
        <button className="button1" type="submit">
          Register
        </button>
        <br />
        <br />
        <span>
          If you have account?
          <Link style={{ textDecoration: "none" }} to="/">
            <span> Login here.</span>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
