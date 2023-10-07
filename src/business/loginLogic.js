import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../presentation/pages/Login";
import { loginData } from "../data/loginData";

export const loginLogic = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = () => {
    loginData(email, password)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        setErr(err.response.data.message);
      });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    err,
    setErr,
  };

  //   return (
  //     <Login
  //       email={email}
  //       setEmail={setEmail}
  //       password={password}
  //       setPassword={setPassword}
  //       handleSubmit={handleSubmit}
  //       err={err}
  //       setErr={setErr}
  //     />
  //   );
};

export default loginLogic;