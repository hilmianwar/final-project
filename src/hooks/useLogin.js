import { useState } from "react";
import { loginData } from "../utils/apis/data";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successLogin, setSuccessLogin] = useState("");
  const [errLogin, setErrLogin] = useState("");
  const [showModalLogin, setShowModalLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    loginData(email, password)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setSuccessLogin("Login Succes");
        setShowModalLogin(true);
        navigate("/");
        setTimeout(() => {
          setShowModalLogin(false);
          setSuccessLogin("");
        }, 2000);
      })
      .catch((err) => {
        setErrLogin(err.response.data.message);
        setShowModalLogin(true);
        setTimeout(() => {
          setShowModalLogin(false);
          setErrLogin("");
        }, 2000);
      });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    successLogin,
    setSuccessLogin,
    errLogin,
    setErrLogin,
    showModalLogin,
    setShowModalLogin,
  };
};

export default useLogin;
