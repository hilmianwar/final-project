import { useState } from "react";
import { useNavigate } from "react-router";
import { registerData } from "../data/RegisterData";

const registerLogic = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [profilPicture, setProfilPicture] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    registerData(email, name, password, passwordRepeat, profilPicture)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        setErr(err.response.data.message);
        console.log(err);
      });
  };
  return {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    passwordRepeat,
    setPasswordRepeat,
    profilPicture,
    setProfilPicture,
    err,
    setErr,
    handleSubmit,
  };
};

export default registerLogic;
