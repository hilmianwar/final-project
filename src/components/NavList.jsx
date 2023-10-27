import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import useLogout from "../hooks/useLogout";
import MessageModal from "./MessageModal";
import { useProfil } from "../hooks/useProfil";

const NavList = ({ scroll }) => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { handleLogout, showModalLogout, errLogout, successLogout } =
    useLogout(setIsLoggedIn);
  const { profil } = useProfil();
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const content = (
    <>
      <div
        className={`lg:hidden font-mont block absolute h-60 top-16 w-full left-0 right-0 mt-6 pb-5 transition ${
          scroll ? "bg-black bg-opacity-50" : ""
        }`}
      >
        <ul className="text-center flex flex-col items-center justify-center gap-5 text-xl p-20 h-24  ">
          <Link
            to="/"
            className={`text-[17px] cursor-pointer hover:text-emerald-500 ${
              location.pathname === "/" ? "text-emerald-500" : "text-white"
            }`}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/categories"
            className={`text-[17px] cursor-pointer hover:text-emerald-500 ${
              location.pathname === "/categories"
                ? "text-emerald-500"
                : "text-white"
            }`}
          >
            <li>Categories</li>
          </Link>
          <Link
            to="/destination"
            className={`text-[17px] cursor-pointer hover:text-emerald-500 ${
              location.pathname === "/destination"
                ? "text-emerald-500"
                : "text-white"
            }`}
          >
            <li>Destination</li>
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="text-white text-[17px] cursor-pointer hover:text-emerald-500"
              >
                <li>Dashboard</li>
              </Link>
              <Link
                onClick={() => setShowDropdown(!showDropdown)}
                className="h-5 w-5 border rounded-[50%]"
              >
                <img
                  src={profil.profilePictureUrl}
                  alt=""
                  className="h-5 w-5 rounded-[50%]"
                />
              </Link>
              {showDropdown && (
                <div className="p-2 text-white fix">
                  <Link
                    to="/profil"
                    className={` text-[17px] cursor-pointer hover:text-emerald-500 ${
                      location.pathname === "/profil"
                        ? "text-emerald-500"
                        : "text-white"
                    }`}
                  >
                    <li>Profil</li>
                  </Link>
                  <button
                    className="text-[17px] hover:text-emerald-500"
                    onClick={handleLogout}
                  >
                    <li>Logout</li>
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white text-[17px] cursor-pointer hover:text-emerald-500"
              >
                <li>Login</li>
              </Link>
              <Link
                to="/register"
                className="text-white text-[17px] cursor-pointer hover:text-emerald-500"
              >
                <li>Register</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </>
  );

  return (
    <div>
      <div className="font-mont lg:flex items-center justify-end hidden">
        <ul className="flex gap-6 text-white">
          <Link
            className={`hover:text-emerald-500 ${
              location.pathname === "/" ? "text-emerald-500" : ""
            }`}
            to="/"
          >
            <li>Home</li>
          </Link>
          <Link
            className={`hover:text-emerald-500 ${
              location.pathname === "/categories" ? "text-emerald-500" : ""
            }`}
            to="/categories"
          >
            <li>Categories</li>
          </Link>
          <Link
            className={`hover:text-emerald-500 ${
              location.pathname === "/destination" ? "text-emerald-500" : ""
            }`}
            to="/destination"
          >
            <li>Destination</li>
          </Link>
          {isLoggedIn ? (
            <>
              <Link className={`hover:text-emerald-500 `} to="/dashboard">
                <li>Dashboard</li>
              </Link>
              <Link
                onClick={() => setShowDropdown(!showDropdown)}
                className="h-5 w-5 border rounded-[50%]"
              >
                <img
                  src={profil.profilePictureUrl}
                  alt=""
                  className="h-5 w-5 rounded-[50%]"
                />
              </Link>
              {showDropdown && (
                <div className="p-2 text-white absolute bg-black bg-opacity-50 top-[88px] right-24">
                  <Link
                    to="/profil"
                    className={`hover:text-emerald-500 ${
                      location.pathname === "/profil" ? "text-emerald-500" : ""
                    }`}
                  >
                    <li>Profil</li>
                  </Link>
                  <button
                    className="hover:text-emerald-500"
                    onClick={handleLogout}
                    to="/login"
                  >
                    <li>Logout</li>
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/login">
                <li>Login</li>
              </Link>
              <Link to="/register">
                <li>Register</li>
              </Link>
            </>
          )}
        </ul>
      </div>

      <div>{click && content}</div>
      <button
        className="block lg:hidden transition z-50 text-white"
        onClick={() => setClick(!click)}
      >
        {click ? <FaTimes /> : <BiMenu className="text-3xl -mt-1" />}
      </button>
      {/* memunculkan pesan eror/succes */}
      <MessageModal
        show={showModalLogout}
        err={errLogout}
        succes={successLogout}
      />
    </div>
  );
};

export default NavList;
