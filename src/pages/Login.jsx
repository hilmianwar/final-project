import React from "react";
import login from "../assets/image/login.jpg";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import MessageModal from "../components/MessageModal";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    showModalLogin,
    successLogin,
    errLogin,
  } = useLogin();

  return (
    <div>
      <MessageModal
        show={showModalLogin}
        err={errLogin}
        succes={successLogin}
      />
      <div className="bg-black h-screen w-full flex">
        <div className="bg-black relatif w-1/2 h-screen hidden md:block">
          <div className="absolute text-white mt-24 ml-14">
            <h3 className="text-3xl">Jobs Fill Your Pocket, </h3>
            <p className="text-xl">But Adventures Fill Your Soul</p>
          </div>
          <img src={login} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 h-screen text-white">
          <div className="h-full flex flex-col justify-center md:max-w-[550px] mx-auto p-20 gap-10">
            <div>Logo</div>
            <div className="text-3xl">
              <h3>Login</h3>
            </div>
            <div className="flex flex-col">
              <input
                className="rounded-sm mb-6 py-3 bg-transparent border-b border-white outline-none placeholder:text-gray-400"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="rounded-sm mb-6 py-3 bg-transparent border-b border-white outline-none placeholder:text-gray-400"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-600 -mt-7"
              onClick={handleSubmit}
            >
              Login
            </button>
            <span className="text-center text-sm mt-7">
              Dont have a account?{" "}
              <Link to="/register" className="font-semibold underline">
                Register for free
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
